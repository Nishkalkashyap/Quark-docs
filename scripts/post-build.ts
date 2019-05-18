import * as path from 'path';
import * as fs from 'fs-extra';
import * as wbb from 'workbox-build';

const outDir = path.resolve('./.vuepress/dist');
generateServiceWorker().catch(console.error);

const vuepressDefaultFiles = `js,css,html,png,jpg,jpeg,gif,svg,woff,woff2,eot,ttf,otf`;

async function generateServiceWorker() {
    await wbb.generateSW({
        swDest: path.resolve(outDir, 'service-worker.js'),
        globDirectory: outDir,
        globPatterns: [`**\/*.{${vuepressDefaultFiles}}`]
    })
    await fs.writeFile(
        path.resolve(outDir, 'service-worker.js'),
        await fs.readFile(path.resolve('./node_modules/vuepress/lib', 'service-worker/skip-waiting.js'), 'utf8'),
        { flag: 'a' }
    )
}