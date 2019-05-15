import * as YAML from 'yamljs';
import * as fs from 'fs-extra';
import chalk from 'chalk';

export function printConsoleStatus(message: string, status: 'danger' | 'success' | 'warning' | 'info'): void {
    let emoji = (status == 'danger') ? '  ❗' : (status == 'success') ? ' ✅ ' : (status == 'warning') ? ' ⚠️ ' : ' ️️💁 ';
    const color = (status == 'danger') ? chalk.redBright : (status == 'success') ? chalk.greenBright : (status == 'warning') ? chalk.yellowBright : chalk.whiteBright;
    console.log(color(`| ${emoji}  | ${message}`));
}

export function getFrontmatterFromPath(path: string): Frontmatter {
    const frontmatter = fs.readFileSync(path).toString().match(/---([\s\S\n]+?)---/) || [];
    try {
        const data = YAML.parse(frontmatter[1] || '');
        return data;
    } catch (err) {
        return null;
    }
}

export type IFrontmatterData = {
    path: string;
    frontmatter: Frontmatter;
};

export type Frontmatter = {
    author: string;
    tags: string[];
    title: string;
    description: string;
};