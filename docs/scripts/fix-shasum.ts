import * as fs from 'fs-extra';
import fetch from 'node-fetch';
import * as js from 'js-beautify';
import * as path from 'path';
import { Storage } from '@google-cloud/storage';
import * as compareVersions from 'compare-versions';
import { makeReleaseDir } from './make-release-dir';

const bucketUrl = `https://quark-release.quarkjs.io`;
const versionFilePath = './version-assets/insiders/__versions.json';

const bucketName = 'quark-release.quarkjs.io';
process.env.GOOGLE_APPLICATION_CREDENTIALS = path.resolve('./cloud-storage-key.json');

const storage = new Storage({
    projectId: 'diy-mechatronics'
});

const bucket = storage.bucket(bucketName);


root().catch(console.error);
async function root() {
    const versionJson = JSON.parse(fs.readFileSync(versionFilePath).toString());
    const allReleasedVersions = Object.keys(versionJson);

    const newObject = {} as any;
    const promises = allReleasedVersions.map(async (version, index) => {
        // if (index > 2) {
        //     return;
        // }
        const fix = await fixForVersion(version);
        newObject[version] = fix;
        console.log(`Fixed version: ${version}`);
    });
    await Promise.all(promises);

    const filteredObject: any = {};
    Object.keys(newObject).sort(compareVersions).reverse().map((key) => { filteredObject[key] = newObject[key] });
    fs.writeFileSync(versionFilePath, JSON.stringify(filteredObject, undefined, 4));
    makeReleaseDir();

    async function fixForVersion(version: string) {
        try {
            const win32_SHA = JSON.parse((await bucket.file(`Quark-insiders-${version}/win32-shasum.json`).download())[0].toString());
            const linux_SHA = JSON.parse((await bucket.file(`Quark-insiders-${version}/linux-shasum.json`).download())[0].toString());
            const darwin_SHA = JSON.parse((await bucket.file(`Quark-insiders-${version}/darwin-shasum.json`).download())[0].toString());

            const shaObj = Object.assign({}, win32_SHA, linux_SHA, darwin_SHA);

            const newNotes = `<ReleaseNotes :sha='${js.js_beautify(JSON.stringify(shaObj))}' />`;
            const newString = (versionJson[version] as string).replace(/<ReleaseNotes :sha=[\w\W]+' \/>/, newNotes);
            return newString;
        } catch (err) {
            return versionJson[version];
        }
    }
}