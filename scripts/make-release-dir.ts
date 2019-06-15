import * as fs from 'fs-extra';
import { getFrontmatterFromObject } from './util';

const versions = [
    0.1,
    0.2,
    0.3
];
const currentVersion = 0.3;

export function makeReleaseDir() {
    const notes = fs.readFileSync('./scripts/__release-notes.md').toString();
    const matches = notes.match(/<!-- Quark.+start[\s\S]+?-end -->/g);

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