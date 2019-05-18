import * as sharp from 'sharp';
import * as Path from 'path';
import * as fs from 'fs-extra';
import * as recc from 'recursive-readdir';

const GIMAGES_PATH = './.vuepress/buildAssets/g-images';
convertImages().catch(console.error);

async function convertImages() {
    const files = await recc(GIMAGES_PATH, [(file, stat) => {
        if (file.endsWith('.png')) {
            return false;
        }
        if (stat.isDirectory()) {
            return false;
        }
        return true;
    }]);

    files.map(async (file) => {
        const outFilePath = file.replace('buildAssets', 'public')
        await fs.ensureDir(Path.dirname(outFilePath));
        const buffer = await sharp(file)
            .resize(600)
            .toBuffer();

        await fs.writeFile(outFilePath, buffer);
    });
}