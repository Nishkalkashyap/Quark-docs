import * as path from 'path';
import * as fs from 'fs-extra';
import * as wbb from 'workbox-build';

const outDir = path.resolve('./.vuepress/dist');
const vuepressDefaultFiles = `js,css,html,png,jpg,jpeg,gif,svg,woff,woff2,eot,ttf,otf`;

generateServiceWorker().catch(console.error);

async function generateServiceWorker() {
    const result = await wbb.generateSW({
        swDest: path.resolve(outDir, 'service-worker.js'),
        globDirectory: outDir,
        globPatterns: [`**\/*.{${vuepressDefaultFiles}}`]
    });
    console.log(result);

    const initialSw = (await fs.readFile(path.resolve(outDir, 'service-worker.js'))).toString();
    const custom = (await fs.readFile('./scripts/sw.js')).toString();
    const skipWaiting = (await fs.readFile(path.resolve('./node_modules/vuepress/lib', 'service-worker/skip-waiting.js'))).toString();
    await fs.writeFile(
        path.resolve(outDir, 'service-worker.js'),
        String().concat(initialSw, custom, skipWaiting)
    );
}