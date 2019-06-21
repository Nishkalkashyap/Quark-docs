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

    const matches = Object.keys(versions).map((key) => {
        return versions[key];
    });

    const versionMatches = versions.reverse().map((val) => {
        return matches.filter((match) => {
            return match.includes(`Quark-${val}`);
        });
    });

    versionMatches.map((version, index) => {
        const frontmatter = getFrontmatterFromObject({
            description: `"Release notes for all the releases in minor version: Quark-${versions[index]}.x"`,
            title: `"Release notes: Quark-${versions[index]}.x"`,
            author: 'nishkal',
            tags: '[]',
            sidebarDepth: '4'
        });

        let str = '';
        str = str.concat(`# Release Notes\n\n`);
        str = str.concat(`## Version: Quark-v${versions[index]}.x`, '\n\n');
        str = str.concat('\n\n', '[[toc]]', '\n\n');
        str = str.concat(version.join('\n\n'));

        if (versions[index] == currentVersion) {
            const frontmatter = getFrontmatterFromObject({
                description: `"Release notes current release: Quark-${versions[index]}.x"`,
                title: `"Current release: Quark-${versions[index]}.x"`,
                author: 'nishkal',
                tags: '[]',
                sidebarDepth: '4'
            });
            fs.ensureFileSync(`./releases/current-release.md`);
            fs.writeFileSync(`./releases/current-release.md`, frontmatter.concat('\n\n', str));
        } else {
            fs.ensureFileSync(`./releases/Quark-v${versions[index]}.md`);
            fs.writeFileSync(`./releases/Quark-v${versions[index]}.md`, frontmatter.concat('\n\n', str));
        }
    });
}