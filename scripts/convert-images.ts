import * as sharp from 'sharp';
import * as Path from 'path';
import * as fs from 'fs-extra';
import * as recc from 'recursive-readdir';

const ignoreFunction = (file: string, stat: fs.Stats) => {
    if (file.endsWith('.png')) {
        return false;
    }
    // if (stat.isDirectory()) {
    //     return false;
    // }
    return true;
}

const arr: IMap[] = [
    {
        inputPath: Path.join('./.vuepress/buildAssets', './guide'),
        outputPath: Path.join('./.vuepress/public/g-images', './guide'),
    },
    {
        inputPath: Path.join('./.vuepress/buildAssets', './guide/intro'),
        outputPath: Path.join('./.vuepress/public/g-images', './guide/intro'),
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
    const buffer = await sharp(map.inputPath)
        .resize(map.width || 600, map.height)
        .toBuffer();

    fs.ensureDirSync(Path.dirname(map.outputPath));

    if(map.outputPath.includes('buildAssets')){
        throw Error('Output path is input path');
    }

    await fs.writeFile(map.outputPath, buffer);
}

interface IMap {
    inputPath: string;
    outputPath: string;
    width?: number;
    height?: number;
}