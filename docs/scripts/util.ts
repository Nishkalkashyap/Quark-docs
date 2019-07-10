import * as YAML from 'yamljs';
import * as fs from 'fs-extra';
import chalk from 'chalk';
import { Storage } from '@google-cloud/storage';
process.env.GOOGLE_APPLICATION_CREDENTIALS = './cloud-storage-key.json';

export function printConsoleStatus(message: string, status: 'danger' | 'success' | 'warning' | 'info'): void {
    let emoji = (status == 'danger') ? '  ❗' : (status == 'success') ? ' ✅ ' : (status == 'warning') ? ' ⚠️ ' : ' ️️💁 ';
    const color = (status == 'danger') ? chalk.redBright : (status == 'success') ? chalk.greenBright : (status == 'warning') ? chalk.yellowBright : chalk.whiteBright;
    console.log(color(`| ${emoji}  | ${message}`));
}
export function randomIntFromInterval(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1) + min);
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

export function getFiles(bucketName: string, version: string): Promise<string[]> {
    return new Promise((resolve) => {

        const arr: string[] = [];
        const storage = new Storage({
            projectId: 'diy-mechatronics'
        });
        storage.bucket(bucketName).getFiles().then((folders) => {
            folders.map((files) => {
                files.map((file) => {
                    if (file.name.includes(`Quark-${version}`)) {
                        arr.push(file.name.replace(`Quark-${version}/`, ''));
                    }
                });
                resolve(arr);
            });
        });
    });
}

export function getFrontmatterFromObject(obj: object) {
    let str = '';
    str = str.concat(`---`, '\n');
    Object.keys(obj).map((key) => {
        str = str.concat(`${key}: ${obj[key]}`, '\n');
    });
    str = str.concat(`---`, '\n');
    return str;
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

type releaseType = 'stable' | 'insiders';
interface releaseInterface {
    downloadFilePath: string;
    bucketSubUrl: releaseType;
}

export const releaseVariables: { [key in releaseType]: releaseInterface } = {
    stable: {
        downloadFilePath: './download/README.md',
        bucketSubUrl: 'stable'
    },
    insiders: {
        downloadFilePath: './download/insiders.md',
        bucketSubUrl: 'insiders'
    }
}

export function reccursiveIgnoreFunction(path: string, stat: fs.Stats) {
    const Path = require('path');

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