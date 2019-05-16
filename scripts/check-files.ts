import * as recc from 'recursive-readdir';
import { getFrontmatterFromPath, printConsoleStatus } from './util';
import { AllTags } from './types';
import * as fs from 'fs-extra';
import * as Path from 'path';

checkFiles().catch(console.error);

export function reccursiveIgnoreFunction(path: string, stat: fs.Stats) {

    if (stat.isDirectory() && path.includes('node_modules')) {
        return true;
    }

    if (stat.isDirectory() && Path.resolve(path) == Path.resolve('./tags')) {
        return true;
    }

    if (stat.isDirectory()) {
        return false;
    }

    if (!path.endsWith('md')) {
        return true;
    }
}

async function checkFiles() {
    const files = await recc('./', [reccursiveIgnoreFunction]);

    files.map((file) => {
        if (!isValidFile(file)) {
            printConsoleStatus(`Invalid file: ${file}`, 'danger');
        }
    });
}

export function isValidFile(path: string): boolean {
    const check1 = path.endsWith('README.md') || path.match(/(style-guide|tags|devtime|release-notes)/) != null;
    if (check1) {
        return check1;
    }

    const frontmatter = getFrontmatterFromPath(path);
    const check2 = !!(!!frontmatter.author && frontmatter.description != null && !!frontmatter.tags!! && frontmatter.title);
    if (!check2) {
        return check2;
    }

    const check3 = frontmatter.tags.every((val) => { return AllTags[val] });
    return check3;
}