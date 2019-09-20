import * as fs from 'fs-extra';
import { getFrontmatterFromObject, releaseVariables } from './util';
import * as compareVersions from 'compare-versions';

const releaseVar: typeof releaseVariables['stable'] = releaseVariables['stable'];
const baseVerisonAssetsPath = `./version-assets/${releaseVar.bucketSubUrl}`

const versionsJson = JSON.parse(fs.readFileSync('./scripts/versions.json').toString());
const versions = versionsJson.versions;
const currentVersion = versionsJson.currentVersion;
const badReleases: string[] = JSON.parse(fs.readFileSync(`${baseVerisonAssetsPath}/__broken-releases.json`).toString());
const versionNotes: { [version: string]: string } = JSON.parse(fs.readFileSync(`${baseVerisonAssetsPath}/__versions.json`).toString());

if (process.env.forceUpdate) {
    makeReleaseDir();
}

export function makeReleaseDir() {
    let tempVersionNotes: any = {};
    const insidersVersionNotes: { [version: string]: string } = JSON.parse(fs.readFileSync(`./version-assets/insiders/__versions.json`).toString());

    badReleases.map((release) => {
        const faliure = String().concat(`!!! failure This version was never released in the stable channel because the insiders release was found to have major bugs.`, '\n', `!!!`, '\n');

        if (insidersVersionNotes[release]) {
            const str = insidersVersionNotes[release].replace('####', String().concat(faliure, '\n\n', '####'));
            tempVersionNotes[release] = str;
            return;
        }

        const preText = `<!-- Quark-${release}-start -->`;
        const postText = `<!-- Quark-${release}-end -->\n\n\n`;

        let str = '';
        str = str.concat(preText, '\n');
        str = str.concat(`## Quark ${release} - (Release skipped)`, '\n');
        str = str.concat(faliure);
        // console.log(key, release, !!insidersVersionNotes[key]);
        // str = str.concat(insidersVersionNotes[release] || '');
        str = str.concat('<!-- ---------------------------------------------- -->', '\n');
        str = str.concat(postText);
        tempVersionNotes[release] = str;
    });
    tempVersionNotes = Object.assign(tempVersionNotes, versionNotes);

    let allVersionNotes: any = {};
    Object.keys(tempVersionNotes)
        .sort(compareVersions)
        .reverse()
        .map((key) => {
            allVersionNotes[key] = tempVersionNotes[key];
        });

    const matches = Object.keys(allVersionNotes).map((key) => {
        return allVersionNotes[key];
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
            str = replaceAndAppEmoji(str);
            fs.writeFileSync(`./releases/current-release.md`, frontmatter.concat('\n\n', str));
        } else {
            fs.ensureFileSync(`./releases/Quark-v${versions[index]}.md`);
            str = replaceAndAppEmoji(str);
            fs.writeFileSync(`./releases/Quark-v${versions[index]}.md`, frontmatter.concat('\n\n', str));
        }
    });

    function replaceAndAppEmoji(str: string) {
        str = str.replace(/Bug\s*Fixes/ig, '🐞 Bug Fixes');
        str = str.replace(/Updated/ig, '⬆️ Updated');
        // str = str.replace(/Fixed/ig, '⛑️ Fixed');
        str = str.replace(/Fixed/ig, '🚑 Fixed');
        str = str.replace(/Breaking/ig, '💔 Breaking');
        str = str.replace(/Features/ig, '🎉 Features');
        str = str.replace(/Dependencies/ig, '🚀 Dependencies');
        return str;
    }
}