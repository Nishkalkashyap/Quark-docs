import * as fs from 'fs-extra';
import * as YAML from 'yamljs';
import * as js from 'js-beautify';
import fetch from 'node-fetch';
import { makeReleaseDir } from './make-release-dir';

const json = fs.readJsonSync('./scripts/__package.json');
let version = json.version;
const notes = fs.readFileSync('./scripts/__release-notes.md').toString();
const bucketUrl = 'https://quark-release.quarkjs.io/stable';

createReleaseNotes();
updateDownloadLinks();
makeReleaseDir();

function createReleaseNotes() {
    let str = '';
    str = str.concat('# Release Notes', '\n\n');
    str = str.concat(notes);
    fs.writeFileSync('./FAQ/release-notes.md', str);
}

async function updateDownloadLinks() {
    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    const latestYMLText = await (await fetch(`${bucketUrl}/latest.yml`)).text();
    const latestYML = YAML.parse(latestYMLText);

    const date = new Date(latestYML.releaseDate);

    const win32_SHA = JSON.parse(await (await fetch(`${bucketUrl}/win32-shasum.json`)).text());
    const linux_SHA = JSON.parse(await (await fetch(`${bucketUrl}/linux-shasum.json`)).text());

    const binaries = Object.keys(win32_SHA).concat(Object.keys(linux_SHA));

    const linuxMain = binaries.find((bin) => { return bin.endsWith('.AppImage') });
    const windowsMain = binaries.find((bin) => { return bin.endsWith('.exe') });

    const linux_other_downloads = binaries.filter((bin) => {
        return bin.search(/(.deb|.tar.gz)$/) !== -1;
    });

    const windows_other_downloads = binaries.filter((bin) => {
        return bin.search(/(.zip|.msi)$/) !== -1;
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
    str = str.concat('| -------------------    | -------------------------- |', '\n');
    str = str.concat(`| ⚡ Latest Version:     | ${version}            |`, '\n');
    str = str.concat(`| 🆕 Release Date:       | ${monthNames[date.getMonth()]} ${date.getDate()} ${date.getFullYear()},  ${date.toLocaleTimeString()}|`, '\n');
    str = str.concat(`| [Release Notes](/releases/current-release.html)        ||`, '\n\n');

    str = str.concat('<Download', '\n');
    str = str.concat(`version="${version}"`, '\n');

    str = str.concat(`linux_main='${linuxMain}'`, '\n');
    str = str.concat(`linux_other='${JSON.stringify(linux_other_downloads)}'`, '\n');

    str = str.concat(`windows_main='${windowsMain}'`, '\n');
    str = str.concat(`windows_other='${JSON.stringify(windows_other_downloads)}'`, '\n');

    str = str.concat('/>', '\n');
    str = str.concat(hashes);

    fs.writeFileSync('./download/README.md', str);
}




