import * as fs from 'fs-extra';
import * as YAML from 'yamljs';
import * as js from 'js-beautify';
import fetch from 'node-fetch';
import { printConsoleStatus } from './util';

let json: any;
let version: string;
let currentNotes: string;
let latestYMLText: string;
let latestYML: any;
const releaseNotesPath = './scripts/__release-notes.md';
const bucketUrl = 'https://storage.googleapis.com/quark-release.quarkjs.io/stable';

let win32_SHA: any;
let linux_SHA: any;


const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];

root().then(() => {
    fs.writeFileSync('./scripts/__package.json', JSON.stringify(json, undefined, 4));
}).catch(console.error);
async function root() {
    await getRawContent();
    await createShaHash().catch(console.error);
}

async function getRawContent() {
    latestYMLText = await (await fetch(`${bucketUrl}/latest.yml`)).text();
    json = JSON.parse(await (await fetch(`${bucketUrl}/package.json`)).text());
    latestYML = YAML.parse(latestYMLText);
    version = latestYML.version;
    currentNotes = await (await fetch(`${bucketUrl}/current-release-notes.md`)).text();

    win32_SHA = JSON.parse(await (await fetch(`${bucketUrl}/win32-shasum.json`)).text());
    linux_SHA = JSON.parse(await (await fetch(`${bucketUrl}/linux-shasum.json`)).text());
}



function gitDiff(): string {
    const current = JSON.parse(JSON.stringify(json));
    const previous = fs.readJsonSync('./scripts/__package.json');

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


async function createShaHash(): Promise<any> {

    const obj = {} as any;
    const shaObj = Object.assign(win32_SHA, linux_SHA);
    Object.keys(shaObj).map((key) => {
        obj[key] = shaObj[key];
    });

    const date = new Date(latestYML.releaseDate);
    let baseReleaseNotes = fs.readFileSync(releaseNotesPath).toString();

    const preText = `<!-- Quark-${json.version}-start -->`;
    const postText = `<!-- Quark-${json.version}-end -->\n\n\n`;

    if (baseReleaseNotes.includes(json.version)) {
        const start = baseReleaseNotes.indexOf(preText);
        const end = baseReleaseNotes.indexOf(postText) + postText.length;

        const substr = baseReleaseNotes.substring(start, end);
        baseReleaseNotes = baseReleaseNotes.replace(substr, '');
    }

    let str = '';
    str = str.concat(preText, '\n');
    str = str.concat(`## Quark ${json.version} - ${monthNames[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`, '\n\n');
    str = str.concat(currentNotes, '\n\n');
    str = str.concat(await gitDiff());
    str = str.concat(`!!! info See SHA-512 Hashes`, '\n');
    str = str.concat(`<DropDown>`, '\n');
    str = str.concat(`<ReleaseNotes :sha='${js.js_beautify(JSON.stringify(obj))}' />`, '\n');
    str = str.concat(`</DropDown>`, '\n');
    str = str.concat('!!!', '\n\n');
    str = str.concat('<!-- ---------------------------------------------- -->', '\n');
    str = str.concat(postText);
    str = str.concat(baseReleaseNotes);
    fs.writeFileSync(releaseNotesPath, str);
    printConsoleStatus(`Release notes added successfully!`, 'success');
    return str;
}

interface IYAML {
    version: number;
    path: string;
    sha512: string;
    releaseDate: string;
    files: { url: string; sha512: string; size: number; }[]
}