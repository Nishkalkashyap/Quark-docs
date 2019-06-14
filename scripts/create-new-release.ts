import * as fs from 'fs-extra';
import * as YAML from 'yamljs';
import * as js from 'js-beautify';
import fetch from 'node-fetch';
import { getFiles } from './util';

// let json: any;
let version: string;
let notes: string;
let latestYMLText: string;
let latestYML: any;

root().catch(console.error);
async function root() {
    await getRawContent();
    createReleaseNotes();
    await updateDownloadLinks(await getFiles('quarkjs-auto-update', version), './download/README.md');
}

async function getRawContent() {
    latestYMLText = await (await fetch(`https://storage.googleapis.com/quarkjs-auto-update/latest.yml`)).text();
    latestYML = YAML.parse(latestYMLText);
    version = latestYML.version;
    // json = await (await fetch('https://raw.githubusercontent.com/Nishkalkashyap/Quark-electron/release/package.json')).json();
    notes = await (await fetch('https://raw.githubusercontent.com/Nishkalkashyap/Quark-electron/release/dev-assets/releaseNotes.md')).text();
}

function createReleaseNotes() {
    let str = '';
    str = str.concat('# Release Notes', '\n\n');
    str = str.concat(notes);
    fs.writeFileSync('./FAQ/release-notes.md', str);
}

function updateDownloadLinks(contents: string[], outFilePath: string) {
    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    const date = new Date(latestYML.releaseDate);

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

    const preText = `<!-- Quark-${version}-start -->`;
    const postText = `<!-- Quark-${version}-end -->`;
    const substr = notes.substring(notes.indexOf(preText), notes.indexOf(postText));
    // console.log(json);
    const match = substr.match(/{(\n|.|\s)+}/)[0];

    let hashes = '';
    hashes = hashes.concat(`!!! note See SHA-512 Hashes`, '\n');
    hashes = hashes.concat(`<DropDown>`, '\n');
    hashes = hashes.concat(`<ReleaseNotes :sha='${js.js_beautify(JSON.stringify(JSON.parse(match)))}' />`, '\n');
    hashes = hashes.concat(`</DropDown>`, '\n');
    hashes = hashes.concat('!!!', '\n\n');

    let str = '';
    str = str.concat(`---`, '\n', 'pageClass: download-page', '\n', '---', '\n\n');
    str = str.concat(`# All Downloads`, '\n');
    str = str.concat(`[![Build Status](https://travis-ci.org/Nishkalkashyap/Quark-electron.svg?branch=release)](https://travis-ci.org/Nishkalkashyap/Quark-electron)`, '\n');
    str = str.concat(`[![Build Status](https://ci.appveyor.com/api/projects/status/e9n73kxva64pccwe/branch/release?svg=true)](https://ci.appveyor.com/project/Nishkalkashyap/quark-electron)`, '\n');
    // str = str.concat(`[![Known Vulnerabilities](https://snyk.io/test/github/Nishkalkashyap/Quark-electron/badge.svg)](https://snyk.io/test/github/Nishkalkashyap/Quark-electron)`, '\n');
    str = str.concat(`[![contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](https://github.com/Nishkalkashyap/Quark-docs)`, '\n');
    // str = str.concat(`[![HitCount](http://hits.dwyl.io/Nishkalkashyap/Quark-docs.svg)](http://hits.dwyl.io/Nishkalkashyap/Quark-docs)`, '\n');
    str = str.concat('| Meta                                            ||', '\n');
    str = str.concat('| ------------------- | -------------------------- |', '\n');
    str = str.concat(`| Latest Version:     | ${version}            |`, '\n');
    str = str.concat(`| Release Date:       | ${monthNames[date.getMonth()]} ${date.getDate()} ${date.getFullYear()},  ${date.toLocaleTimeString()}|`, '\n');
    str = str.concat(`| [Release Notes](/FAQ/release-notes.html)        ||`, '\n\n');

    str = str.concat('<Download', '\n');
    str = str.concat(`version="${version}"`, '\n');

    str = str.concat(`linux_main='${linuxMain}'`, '\n');
    str = str.concat(`linux_other='${JSON.stringify(linux_other_downloads)}'`, '\n');

    str = str.concat(`windows_main='${windowsMain}'`, '\n');
    str = str.concat(`windows_other='${JSON.stringify(windows_other_downloads)}'`, '\n');

    str = str.concat('/>', '\n');
    str = str.concat(hashes);

    fs.writeFileSync(outFilePath, str);
}