import * as YAML from 'yamljs';
import * as fs from 'fs-extra';
import chalk from 'chalk';

export function printConsoleStatus(message: string, status: 'danger' | 'success' | 'warning' | 'info'): void {
    let emoji = (status == 'danger') ? '  ❗' : (status == 'success') ? ' ✅ ' : (status == 'warning') ? ' ⚠️ ' : ' ️️💁 ';
    const color = (status == 'danger') ? chalk.redBright : (status == 'success') ? chalk.greenBright : (status == 'warning') ? chalk.yellowBright : chalk.whiteBright;
    console.log(color(`| ${emoji}  | ${message}`));
}

export function getFrontmatterFromPath(path: string): (Frontmatter & { path: string }) | null {
    const frontmatter = fs.readFileSync(path).toString().match(/---([\s\S\n]+?)---/);
    try {
        const data = YAML.parse(frontmatter[1]);
        data.path = path;
        return data;
    } catch (err) {
        return null;
    }
}

export function capitalize(s: string) {
    var splitStr = s.split(' ');
    for (var i = 0; i < splitStr.length; i++) {
        splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
    }
    return splitStr.join(' ');
}

export type IFrontmatterData = {
    path: string;
    frontmatter: Frontmatter;
};

export type Frontmatter = {
    author: string;
    tags: string[];
    description: string;
    cover: string;
};