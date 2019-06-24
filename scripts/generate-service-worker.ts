import * as path from 'path';
import * as fs from 'fs-extra';

const outDir = path.resolve('./.vuepress/dist');

generateServiceWorker().catch(console.error);

async function generateServiceWorker() {
    const initialSw = (await fs.readFile(path.resolve(outDir, 'service-worker.js'))).toString();
    const custom = (await fs.readFile('./scripts/sw.js')).toString();
    await fs.writeFile(
        path.resolve(outDir, 'service-worker.js'),
        String().concat(initialSw, custom)
    );
}