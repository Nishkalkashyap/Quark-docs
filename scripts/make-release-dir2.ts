import * as fs from 'fs-extra';
import { getFrontmatterFromObject } from './util';
import * as compareVersions from 'compare-versions';

const versions = [
    0.1,
    0.2,
    0.3
];
const currentVersion = 0.3;
const badReleases: string[] = JSON.parse(fs.readFileSync('./scripts/__broken-releases.json').toString());
const versionNotes: { [version: string]: string } = JSON.parse(fs.readFileSync('./scripts/versions.json').toString());

makeReleaseDir();
export function makeReleaseDir() {
    let allVersionNotes: any = {};
    badReleases.map((release) => {
        allVersionNotes[release] = `## Bad Release`;
    });
    allVersionNotes = Object.assign(allVersionNotes, versionNotes);
    let versions: any = {};
    Object.keys(allVersionNotes)
        .sort(compareVersions)
        .map((key) => {
            versions[key] = allVersionNotes[key];
        });
    console.log(versions);
}