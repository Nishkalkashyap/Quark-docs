import * as fs from 'fs-extra';
import * as YAML from 'yamljs';
import * as js from 'js-beautify';

const json = require('./../../Quark-electron/package.json');

createReleaseNotes();
updateDownloadLinks();

function createReleaseNotes() {
    const notes = fs.readFileSync('./../Quark-electron/dev-assets/releaseNotes.md').toString();
    let str = '';
    str = str.concat('# Release Notes', '\n\n');
    str = str.concat(notes);
    fs.writeFileSync('./FAQ/release-notes.md', str);
}

function updateDownloadLinks() {
    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    if (!fs.pathExistsSync(`./../Quark-electron/release/${json.version}/latest.yml`)) {
        return;
    }

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

    const notes = fs.readFileSync('./../Quark-electron/dev-assets/releaseNotes.md').toString();
    const preText = `<!-- Quark-${json.version}-start -->`;
    const postText = `<!-- Quark-${json.version}-end -->`;
    const substr = notes.substring(notes.indexOf(preText), notes.indexOf(postText));
    const match = substr.match(/{(\n|.|\s)+}/)[0];

    let hashes = '';
    hashes = hashes.concat(`!!! note See SHA-512 Hashes`, '\n');
    hashes = hashes.concat(`<DropDown>`, '\n');
    hashes = hashes.concat(`<ReleaseNotes :sha='${js.js_beautify(JSON.stringify(JSON.parse(match)))}' />`, '\n');
    hashes = hashes.concat(`</DropDown>`, '\n');
    hashes = hashes.concat('!!!', '\n\n');

    let str = '';
    str = str.concat(`# All Downloads`, '\n');
    str = str.concat('| Meta                                            ||', '\n');
    str = str.concat('| ------------------- | -------------------------- |', '\n');
    str = str.concat(`| Latest Version:     | ${json.version}            |`, '\n');
    str = str.concat(`| Release Date:       | ${monthNames[date.getMonth()]} ${date.getDate()} ${date.getFullYear()},  ${date.toLocaleTimeString()}|`, '\n');
    str = str.concat(`| [Release Notes](/FAQ/release-notes.html)        ||`, '\n\n');

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




