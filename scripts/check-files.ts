import * as recc from 'recursive-readdir';
import { getFrontmatterFromPath, printConsoleStatus, reccursiveIgnoreFunction } from './util';
import { AllTags } from './types';

const GIMAGES_OUT = './.vuepress/public';
checkFiles().catch(console.error);

async function checkFiles() {
    const files = await recc('./', [reccursiveIgnoreFunction]);

    files.map((file) => {
        const result = isValidFile(file);
        if (!result.isValid) {
            printConsoleStatus(`Invalid file: ${file}`, 'danger');
            printConsoleStatus(`Error: ${result.errMsg}\n`, 'danger');
        }
    });

    console.log(`Checked: ${files.length}`);
}

export function isValidFile(path: string): { isValid: boolean, errMsg: string } {
    const check1 = path.endsWith('README.md') || path.match(/(style-guide|tags|devtime|release-notes|download-insiders.md)/) != null;
    if (check1) {
        return { isValid: check1, errMsg: 'Is ignored file.' };
    }

    const frontmatter = getFrontmatterFromPath(path);
    const check2 = !!(!!frontmatter.author && frontmatter.description != null && !!frontmatter.tags!!);
    if (!check2) {
        return { isValid: check2, errMsg: 'Frontmatter required member missing.' };
    }

    // const check3 = frontmatter.cover ? fs.existsSync(Path.join(GIMAGES_OUT, frontmatter.cover)) : true;
    // if (!check3) {
    //     return { isValid: check3, errMsg: `Cover image path does not exists. ${(Path.join(GIMAGES_OUT, frontmatter.cover))}` };
    // }

    const check4 = frontmatter.tags.every((val) => { return AllTags[val] });
    return { isValid: check4, errMsg: 'Tags match.' };
}