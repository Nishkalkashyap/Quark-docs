import * as sharp from 'sharp';
import * as Path from 'path';
import * as fs from 'fs-extra';
import * as recc from 'recursive-readdir';
import { printConsoleStatus } from './util'

const ignoreFunction = (file: string, stat: fs.Stats) => {
    if (file.endsWith('.png')) {
        return false;
    }
    // if (stat.isDirectory()) {
    //     return false;
    // }
    return true;
}

const guideInputPath = './.vuepress/buildAssets/guide';
const guideOutputPath = './.vuepress/public/g-images/guide';

const arr: IMap[] = [
    {
        inputPath: Path.join(guideInputPath, './'),
        outputPath: Path.join(guideOutputPath, './'),
    },
    {
        inputPath: Path.join(guideInputPath, './intro'),
        outputPath: Path.join(guideOutputPath, './intro'),
        width: 1200
    },
    {
        inputPath: Path.join(guideInputPath, './user-interface'),
        outputPath: Path.join(guideOutputPath, './user-interface'),
        width: 1200
    }
];

fs.emptyDirSync('./.vuepress/public/g-images');
convert(arr);

function convert(maps: IMap[]) {
    maps.map((map) => {

        if (fs.statSync(map.inputPath).isDirectory()) {
            convertFolder(map);
            return;
        }
        convertFile(map);
    });
}

async function convertFolder(map: IMap) {
    const files = await recc(map.inputPath, [ignoreFunction]);
    files.map(async (file) => {
        const newMap = JSON.parse(JSON.stringify(map)) as IMap;
        newMap.inputPath = file;
        newMap.outputPath = Path.join(map.outputPath, Path.basename(file));
        convertFile(newMap);
    });
}

async function convertFile(map: IMap) {

    if (map.outputPath.includes('buildAssets')) {
        throw Error('Output path is input path');
    }

    const meta = await sharp(map.inputPath).metadata();
    let width: number = map.width || 600;
    let height: number = map.height;

    if ((meta.width < width) && !map.forceGivenSize) {
        width = meta.width;
    }

    if (height && (meta.height < height) && !map.forceGivenSize) {
        height = meta.height;
    }

    const buffer = await sharp(map.inputPath)
        .resize(width, height)
        .toBuffer();

    fs.ensureDirSync(Path.dirname(map.outputPath));

    await fs.writeFile(map.outputPath, buffer);
    printConsoleStatus(`Generated image at: ${map.outputPath};`, 'success')
}

interface IMap {
    inputPath: string;
    outputPath: string;
    width?: number;
    height?: number;
    forceGivenSize?: boolean
}