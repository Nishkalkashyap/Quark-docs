import * as fs from 'fs-extra';
import fetch from 'node-fetch';
import * as js from 'js-beautify';
import * as path from 'path';
import { Storage } from '@google-cloud/storage';
import * as compareVersions from 'compare-versions';
import { makeReleaseDir } from './make-release-dir';

const bucketUrl = `https://quark-release.quarkjs.io`;
const insiders_versionFilePath = './version-assets/insiders/__versions.json';
const stable_versionFilePath = './version-assets/stable/__versions.json';
const badReleases: string[] = JSON.parse(fs.readFileSync(`./version-assets/insiders/__broken-releases.json`).toString());

const bucketName = 'quark-release.quarkjs.io';
process.env.GOOGLE_APPLICATION_CREDENTIALS = path.resolve('./cloud-storage-key.json');

const storage = new Storage({
    projectId: 'diy-mechatronics'
});

const bucket = storage.bucket(bucketName);


root().catch(console.error);
async function root() {
    const insiders_versionJson = JSON.parse(fs.readFileSync(insiders_versionFilePath).toString());
    const stable_versionJson = JSON.parse(fs.readFileSync(stable_versionFilePath).toString());

    const allReleasedVersions = Object.keys(insiders_versionJson);

    const insidersObject = {} as any;
    const stableObject = {} as any;
    const promises = allReleasedVersions.map(async (version, index) => {
        // if (index > 2) {
        //     return;
        // }
        const fix = await fixForVersion(version);
        console.log(`Fixed version: ${version}`);

        insidersObject[version] = fix;
        if (!badReleases.includes(version) && stable_versionJson[version]) {
            stableObject[version] = fix;
        }
    });
    await Promise.all(promises);

    const insiders_filteredObject: any = {};
    const stable_filteredObject: any = {};

    Object.keys(insidersObject).sort(compareVersions).reverse().map((key) => { insiders_filteredObject[key] = insidersObject[key] });
    Object.keys(stableObject).sort(compareVersions).reverse().map((key) => { stable_filteredObject[key] = stableObject[key] });

    fs.writeFileSync(insiders_versionFilePath, JSON.stringify(insiders_filteredObject, undefined, 4));
    fs.writeFileSync(stable_versionFilePath, JSON.stringify(stable_filteredObject, undefined, 4));

    process.env.forceUpdate ? makeReleaseDir() : '';

    async function fixForVersion(version: string) {
        try {
            const win32_SHA = JSON.parse((await bucket.file(`Quark-insiders-${version}/win32-shasum.json`).download())[0].toString());
            const linux_SHA = JSON.parse((await bucket.file(`Quark-insiders-${version}/linux-shasum.json`).download())[0].toString());
            const darwin_SHA = JSON.parse((await bucket.file(`Quark-insiders-${version}/darwin-shasum.json`).download())[0].toString());

            const shaObj = Object.assign({}, win32_SHA, linux_SHA, darwin_SHA);

            const newNotes = `<ReleaseNotes :sha='${js.js_beautify(JSON.stringify(shaObj))}' />`;
            const newString = (insiders_versionJson[version] as string).replace(/<ReleaseNotes :sha=[\w\W]+' \/>/, newNotes);
            return newString;
        } catch (err) {
            return insiders_versionJson[version];
        }
    }
}