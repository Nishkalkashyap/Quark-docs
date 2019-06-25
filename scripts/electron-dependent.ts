import * as fs from 'fs-extra';
import * as YAML from 'yamljs';
import * as js from 'js-beautify';
import fetch from 'node-fetch';
import { makeReleaseDir } from './make-release-dir';
import { releaseVariables } from './util';

const releaseVar: typeof releaseVariables['stable'] = releaseVariables[process.env.RELEASE_TYPE];
const baseVerisonAssetsPath = `./version-assets/${releaseVar.bucketSubUrl}`;

const json = fs.readJsonSync(`${baseVerisonAssetsPath}/__package.json`);
let version = json.version;
let versionsJson = JSON.parse(fs.readFileSync(`${baseVerisonAssetsPath}/__versions.json`).toString());
const bucketUrl = `https://quark-release.quarkjs.io/${releaseVar.bucketSubUrl}`;

updateDownloadLinks();
makeReleaseDir();

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


    const substr = versionsJson[version];
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
    // str = str.concat(`[![Build Status](https://travis-ci.org/Nishkalkashyap/Quark-electron.svg?branch=master-all)](https://travis-ci.org/Nishkalkashyap/Quark-electron)`, '\n');
    // str = str.concat(`[![Build Status](https://ci.appveyor.com/api/projects/status/e9n73kxva64pccwe/branch/master-all?svg=true)](https://ci.appveyor.com/project/Nishkalkashyap/quark-electron)`, '\n');
    // str = str.concat(`[![Known Vulnerabilities](https://snyk.io/test/github/Nishkalkashyap/Quark-electron/badge.svg)](https://snyk.io/test/github/Nishkalkashyap/Quark-electron)`, '\n');
    // str = str.concat(`[![contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](https://github.com/Nishkalkashyap/Quark-docs)`, '\n');
    // str = str.concat(`[![HitCount](http://hits.dwyl.io/Nishkalkashyap/Quark-docs.svg)](http://hits.dwyl.io/Nishkalkashyap/Quark-docs)`, '\n');

    // str = str.concat('| Meta                                            ||', '\n');
    // str = str.concat('| -------------------    | -------------------------- |', '\n');
    // str = str.concat(`| 🆕 Release type:     | ${releaseVar.bucketSubUrl}            |`, '\n');
    // str = str.concat(`| ⚡ Latest Version:     | ${version}            |`, '\n');
    // str = str.concat(`| 📅 Release Date:       | ${monthNames[date.getMonth()]} ${date.getDate()} ${date.getFullYear()},  ${date.toLocaleTimeString()}|`, '\n');
    // str = str.concat(`| [Release Notes](/releases/current-release.html)        ||`, '\n\n');

    str = str.concat(`\n\n<div class="build-status">`, '\n');
    str = str.concat(`<a href="https://travis-ci.org/Nishkalkashyap/Quark-electron" target="_blank" rel="noopener noreferrer"><img src="https://travis-ci.org/Nishkalkashyap/Quark-electron.svg?branch=master-all" alt="Build Status"></a>`, '\n');
    str = str.concat(`<a href="https://ci.appveyor.com/project/Nishkalkashyap/quark-electron" target="_blank" rel="noopener noreferrer"><img src="https://ci.appveyor.com/api/projects/status/e9n73kxva64pccwe/branch/master-all?svg=true" alt="Build Status"></a>`, '\n');
    str = str.concat(`<a href="https://github.com/Nishkalkashyap/Quark-docs" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat" alt="Build Status"></a>`, '\n\n');
    str = str.concat(`</div>`, '\n\n');

    str = str.concat(`| 🆕 Release type             | ⚡ Latest Version      | 📅 Release Date |`, '\n');
    str = str.concat('| -------------------          | --------------------   | --------------- |', '\n');
    str = str.concat(`| ${releaseVar.bucketSubUrl}   | ${version}             | ${monthNames[date.getMonth()]} ${date.getDate()} ${date.getFullYear()},  ${date.toLocaleTimeString()} |`, '\n');

    str = str.concat('<Download', '\n');
    str = str.concat(`version="${version}"`, '\n');
    str = str.concat(`channel="${releaseVar.bucketSubUrl}"`, '\n');

    str = str.concat(`linux_main='${linuxMain}'`, '\n');
    str = str.concat(`linux_other='${JSON.stringify(linux_other_downloads)}'`, '\n');

    str = str.concat(`windows_main='${windowsMain}'`, '\n');
    str = str.concat(`windows_other='${JSON.stringify(windows_other_downloads)}'`, '\n');

    str = str.concat('/>', '\n\n');
    str = str.concat(`<div class="release-notes"><router-link to="/releases/current-release.html">View Release Notes</router-link></div>`, '\n\n');

    str = str.concat(hashes);

    fs.writeFileSync(releaseVar.downloadFilePath, str);
}




