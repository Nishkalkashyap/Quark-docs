import * as fs from 'fs-extra';
import * as path from 'path';
const paths = ['guide', 'references', 'structures', 'FAQ'];
var beautify = require('js-beautify').js;
import fetch from 'node-fetch';
import * as YAML from 'yamljs';
import { themeConfig } from './../.vuepress/config';
import * as js from 'js-beautify';

const json = require('./../../Quark-electron/package.json');

createSidebars(paths);
createReadmeFiles(paths);
updateDownloadLinks();
createLegalFolder();
updatePrimaryColor();

function updatePrimaryColor() {
    //has to be hex code
    const iconColor = '#000000';

    //can be rgb
    const accentColor = '#3880ff';

    const overrideFilePath = path.resolve('./.vuepress/override.styl');
    const svgFilePath = path.resolve(`./.vuepress/public/images/icon-svg.svg`);

    let override = fs.readFileSync(overrideFilePath).toString();
    override = override.replace(/\$accentColor.+/, `$accentColor = ${accentColor}`);
    fs.writeFileSync(overrideFilePath, override);

    let svg = fs.readFileSync(svgFilePath).toString();
    svg = svg.replace(/fill="[#0-9a-z(),]+"/g, `fill="${iconColor}"`);
    fs.writeFileSync(svgFilePath, svg);
}

function createLegalFolder() {
    const notes = fs.readFileSync('./../Quark-electron/releaseNotes.md').toString();
    let str = '';
    str = str.concat('# Release Notes', '\n\n');
    str = str.concat('[[toc]]', '\n\n');
    str = str.concat(notes);
    fs.writeFileSync('./FAQ/release-notes.md', str);
}

function updateDownloadLinks() {
    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    const latest = YAML.parse(fs.readFileSync(`./../Quark-electron/release/${json.version}/latest.yml`).toString());
    const date = new Date(latest.releaseDate);

    const contents = fs.readdirSync(`./../Quark-electron/release/${json.version}`);
    const binaries = contents.filter((bin) => {
        return !(bin.includes('blockmap') || bin.includes('latest'));
    });

    const linuxMain = binaries.find((bin) => { return bin.endsWith('.AppImage') });
    const windowsMain = binaries.find((bin) => { return bin.endsWith('.exe') });

    const linux_other_downloads = binaries.filter((bin) => {
        return bin.search(/(.deb|.tar.gz)$/) !== -1;
    });

    const windows_other_downloads = binaries.filter((bin) => {
        return bin.search(/(.zip)$/) !== -1;
    });

    const notes = fs.readFileSync('./../Quark-electron/releaseNotes.md').toString();
    const match = notes.match(/{(\n|.)+}/)[0];
    let hashes = '';
    hashes = hashes.concat(`!!! note See SHA-512 Hashes`, '\n');
    hashes = hashes.concat(`<DropDown>`, '\n');
    hashes = hashes.concat(`<ReleaseNotes :sha='${js.js_beautify(JSON.stringify(JSON.parse(match)))}' />`, '\n');
    hashes = hashes.concat(`</DropDown>`, '\n');
    hashes = hashes.concat('!!!', '\n\n');

    // return;


    let str = '';
    str = str.concat(`# All Downloads`, '\n');
    str = str.concat('| Meta                |                            |', '\n');
    str = str.concat('| ------------------- | -------------------------- |', '\n');
    str = str.concat(`| Latest Version:     | ${json.version}            |`, '\n');
    str = str.concat(`| Release Date:       | ${monthNames[date.getMonth()]} ${date.getDate()} ${date.getFullYear()},  ${date.toLocaleTimeString()}|`, '\n\n');

    str = str.concat('<Download', '\n');
    str = str.concat(`version="${json.version}"`, '\n');

    str = str.concat(`linux_main='${linuxMain}'`, '\n');
    str = str.concat(`linux_other='${JSON.stringify(linux_other_downloads)}'`, '\n');

    str = str.concat(`windows_main='${windowsMain}'`, '\n');
    str = str.concat(`windows_other='${JSON.stringify(windows_other_downloads)}'`, '\n');

    str = str.concat('/>', '\n');
    str = str.concat(hashes);

    fs.writeFileSync('./download/README.md', str);
}


function createSidebars(paths: string[]) {
    const obj: ISidebarObject = {};
    paths.map((path) => {
        obj[`/${path}/`] = fs.readdirSync(`./${path}`).filter((val) => { return val != 'README.md' })
    });
    const initialObject: ISidebarObject = JSON.parse(JSON.stringify(themeConfig.sidebar));
    const folders = Object.keys(obj);
    folders.map((folder) => {
        obj[folder].sort((a, b) => {
            return initialObject[folder].indexOf(a) - initialObject[folder].indexOf(b)
        });
    });

    fs.readFile('./.vuepress/config.js').then((file) => {
        const str = String().concat('sidebar:', JSON.stringify(obj).replace(/(:|,|\[)/g, '$1\n'));
        const match = file.toString().replace(/sidebar:(.|\n|\s|{)+?}/, str);
        fs.writeFileSync('./.vuepress/config.js', beautify(match));
    }).catch((err) => {
        console.log(err);
    });
}



function createReadmeFiles(paths: string[]) {

    paths.map((v) => {
        createReadmeFile(v);
    });

    function createReadmeFile(path: string) {
        fs.readdir(`./${path}`).then((dirs) => {
            let str = '';
            const files = dirs.filter((dir) => { return dir != 'README.md' });

            str = str.concat(capitalize(`# ${path}`), '\n\n');
            // str = str.concat('<Breadcrumbs :url="this.$page"/>', '\n\n\n');
            str = str.concat('| Objects | Description |', '\n');
            str = str.concat('| ----- | ----- |', '\n');
            files.map(async (file) => {
                // str = str.concat('* ', `[${capitalize(file.replace(/\.md$/, '').replace(/-/g, ' '))}](/${path}/${file})`, '\n');

                const data = (fs.readFileSync(require('path').join(path, file))).toString();
                const header = (data.match(/Header label="(.+?)"/) || [])[1];

                str = str.concat(`| [${capitalize(file.replace(/\.md$/, '').replace(/-/g, ' '))}](/${path}/${file}) | ${header || ''}|`, '\n');
            });
            fs.writeFileSync(`./${path}/README.md`, str);
        }).catch((err) => {
            console.log(err);
        });


        function capitalize(s: string) {
            var splitStr = s.split(' ');
            for (var i = 0; i < splitStr.length; i++) {
                splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
            }
            return splitStr.join(' ');
        }
    }
}

function updateDownloadLinkssss() {

    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    fetch('https://storage.googleapis.com/quarkjs-auto-update/latest.yml').then(async (val) => {
        const text = await val.text();
        const obj = YAML.parse(text);
        const windowsURL = obj.files[0].url;
        const date = new Date(obj.releaseDate);
        let file = fs.readFileSync('./download/README.md').toString();

        // file = file.replace(/https:\/\/storage.+exe/g, `https://storage.googleapis.com/quarkjs-auto-update/${windowsURL}`);
        file = file.replace(/windows.+exe/g, `windows="https://storage.googleapis.com/quarkjs-auto-update/${json.version}/${windowsURL}`);
        file = file.replace(/__Latest.+?__/, `__Latest Version: ${obj.version}__`);
        file = file.replace(/__Release.+?__/, `__Release Date: ${monthNames[date.getMonth()]} ${date.getDate()} ${date.getFullYear()},  ${date.toLocaleTimeString()}__`);
        fs.writeFileSync('./download/README.md', file);
        latestLinux();
    }).catch((err) => {
        console.log(err);
    });

    function latestLinux() {
        fetch('https://storage.googleapis.com/quarkjs-auto-update/latest-linux.yml').then(async (val) => {
            const text = await val.text();
            const obj = YAML.parse(text);
            const linuxURL = obj.files[0].url;
            let file = fs.readFileSync('./download/README.md').toString();
            file = file.replace(/linux.+AppImage/g, `linux="https://storage.googleapis.com/quarkjs-auto-update/${json.version}/${linuxURL}`);
            fs.writeFileSync('./download/README.md', file);
        }).catch((err) => {
            console.log(err);
        });
    }
}

interface ISidebarObject {
    [name: string]: string[];
}


