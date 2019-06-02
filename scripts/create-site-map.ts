import * as recc from 'recursive-readdir';
import * as Path from 'path';
import * as fs from 'fs-extra';
import { ChildProcess, exec } from 'child_process';

createSiteMap().catch(console.error);

export async function createSiteMap() {
    let files = await recc('./', [(path, stat) => {
        if (stat.isDirectory() && path.includes('node_modules')) {
            return true;
        }

        if (stat.isDirectory()) {
            return false;
        }

        if (path.includes('devtime.md')) {
            return true;
        }

        if (!path.endsWith('md')) {
            return true;
        }
    }]);

    files = files.map((file) => {
        return file
            .replace(/README.md/, '')
            .replace(/[\\\/]/g, '/')
    });

    let str = `<?xml version="1.0" encoding="UTF-8"?>\n`;
    str = str.concat(`<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:news="http://www.google.com/schemas/sitemap-news/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1" xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">`, '\n');

    const promises = files.map(async (file) => {
        const cp = exec(`git --no-pager log -1 --format="%cd" ${file}`, {
            timeout: 1000
        });
        let obj = { str: '' }
        await promiseFromChildProcess(cp, obj);
        let url = ''
        if (!file.endsWith('.md') || obj.str.length == 0) {
            url = url.concat(`
            <url>
                <loc>https://quarkjs.io/${file.replace(/\.(md)$/g, '.html')}</loc> 
                <changefreq>daily</changefreq>
            </url>
            `);
        } else {
            const date = obj.str.replace(/\n/g, '');
            url = url.concat(`
            <url>
                <loc>https://quarkjs.io/${file.replace(/\.(md)$/g, '.html')}</loc>
                <lastmod>${(new Date(date)).toISOString()}</lastmod>
            </url>
            `);
        }
        str = str.concat(url.replace(/(\n|\s)/g, '').concat('\n'));
    });
    await Promise.all(promises);

    str = str.concat(`</urlset>`);
    const sitemapPath = `./.vuepress/dist/sitemap.xml`;
    fs.ensureFileSync(sitemapPath);
    fs.writeFileSync(sitemapPath, str);
}

function promiseFromChildProcess(child: ChildProcess, obj: { str: string }) {

    child.stdout.on('data', (data) => { obj.str = obj.str.concat(data) });
    child.stderr.on('data', (data) => { console.error(data) });
    child.on('close', (code) => {
        if (code !== 0) {
            throw Error(`Closing code: ${code}`);
        }
    });

    return new Promise((resolve, reject) => {
        child.addListener("error", reject);
        child.addListener("exit", resolve);
    });
}