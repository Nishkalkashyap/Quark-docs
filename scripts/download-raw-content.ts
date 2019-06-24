import * as fs from 'fs-extra';
import * as YAML from 'yamljs';
import * as js from 'js-beautify';
import fetch from 'node-fetch';
import { printConsoleStatus, releaseVariables } from './util';
import * as compareVersions from 'compare-versions';

const releaseVar: typeof releaseVariables['stable'] = releaseVariables[process.env.RELEASE_TYPE];

let packageJson: any;
let brokenReleaseJson: any;
let currentNotes: string;
let latestYML: any;

const baseVerisonAssetsPath = `./version-assets/${releaseVar.bucketSubUrl}`
const versionsJson = `${baseVerisonAssetsPath}/__versions.json`;
const bucketUrl = `https://quark-release.quarkjs.io/${releaseVar.bucketSubUrl}`;

let win32_SHA: any;
let linux_SHA: any;


const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];

root().then(() => {
    fs.writeFileSync(`${baseVerisonAssetsPath}/__package.json`, JSON.stringify(packageJson, undefined, 4));
    fs.writeFileSync(`${baseVerisonAssetsPath}/__broken-releases.json`, JSON.stringify(brokenReleaseJson, undefined, 4));
}).catch(console.error);
async function root() {
    await getRawContent();
    await createVersionJsonFile().catch(console.error);
}

async function getRawContent() {
    const latestYMLText = await (await fetch(`${bucketUrl}/latest.yml`)).text();
    latestYML = YAML.parse(latestYMLText);

    packageJson = JSON.parse(await (await fetch(`${bucketUrl}/package.json`)).text());
    brokenReleaseJson = JSON.parse(await (await fetch(`${bucketUrl}/broken-releases.json`)).text());
    currentNotes = await (await fetch(`${bucketUrl}/current-release-notes.md`)).text();

    win32_SHA = JSON.parse(await (await fetch(`${bucketUrl}/win32-shasum.json`)).text());
    linux_SHA = JSON.parse(await (await fetch(`${bucketUrl}/linux-shasum.json`)).text());
}



function gitDiff(): string {
    const current = JSON.parse(JSON.stringify(packageJson));
    const previous = fs.readJsonSync(`${baseVerisonAssetsPath}/__package.json`);

    const currentDeps = getImportantDeps(current);
    const previousDeps = getImportantDeps(previous);

    let text = '';
    text = text.concat('#### Dependencies:', '\n');
    Object.keys(currentDeps).map((key) => {
        if (!previousDeps[key]) {
            text = text.concat(`* Added: \`${key}@${currentDeps[key]}\``, '\n');
            return;
        }

        if (previousDeps[key] != currentDeps[key]) {
            text = text.concat(`* Updated: \`${key}@${currentDeps[key]}\` (Previous: v${previousDeps[key]})`, '\n');
            return;
        }
    });

    Object.keys(previousDeps).map((key) => {
        if (!currentDeps[key]) {
            text = text.concat(`* Removed: \`${key}@${previousDeps[key]}\``, '\n');
        }
    });

    if (!text.match(/(Added|Updated|Removed)/)) {
        text = '';
    }

    return String().concat(text, '\n\n');

    function getImportantDeps(obj: any) {
        const deps = obj.dependencies;
        const dev = obj.devDependencies;

        Object.keys(dev).map((key) => {
            if (!key.includes('electron')) {
                delete dev[key];
            }
        });

        return Object.assign(deps, dev);
    }
}


async function createVersionJsonFile(): Promise<string> {

    const obj = {} as any;
    const shaObj = Object.assign(win32_SHA, linux_SHA);
    Object.keys(shaObj).map((key) => {
        obj[key] = shaObj[key];
    });

    const date = new Date(latestYML.releaseDate);

    const preText = `<!-- Quark-${packageJson.version}-start -->`;
    const postText = `<!-- Quark-${packageJson.version}-end -->\n\n\n`;

    let str = '';
    str = str.concat(preText, '\n');
    str = str.concat(`## Quark ${packageJson.version} - ${monthNames[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`, '\n\n');
    str = str.concat(currentNotes, '\n\n');
    str = str.concat(await gitDiff());
    str = str.concat(`!!! note See SHA-512 Hashes`, '\n');
    str = str.concat(`<DropDown>`, '\n');
    str = str.concat(`<ReleaseNotes :sha='${js.js_beautify(JSON.stringify(obj))}' />`, '\n');
    str = str.concat(`</DropDown>`, '\n');
    str = str.concat('!!!', '\n\n');
    str = str.concat('<!-- ---------------------------------------------- -->', '\n');
    str = str.concat(postText);

    const baseVersionsObj = JSON.parse(fs.readFileSync(versionsJson).toString());
    baseVersionsObj[packageJson.version] = str;
    let filteredObject: any = {};
    Object.keys(baseVersionsObj).sort(compareVersions).reverse().map((key) => { filteredObject[key] = baseVersionsObj[key] });
    fs.writeFileSync(versionsJson, JSON.stringify(filteredObject, undefined, 4));

    printConsoleStatus(`Release notes added successfully!`, 'success');
    return str;
}