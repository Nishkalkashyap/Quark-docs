import { Storage } from '@google-cloud/storage';
import * as recc from 'recursive-readdir';
import { printConsoleStatus } from './util';
import * as path from 'path';
import fetch from 'node-fetch';
import * as dotenv from 'dotenv';
dotenv.config({ path: '.env' });


// purgeCache();
async function purgeCache() {
    const result = await fetch(`https://api.cloudflare.com/client/v4/zones/7d5732fab88b05cc381a9479ad89a090/purge_cache`, {
        method: 'post',
        headers: {
            'X-Auth-Email': 'kashyapnishkal@gmail.com',
            'X-Auth-Key': process.env.CLOUD_FLARE_API_KEY,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            purge_everything: true
        })
    });
    console.log(await result.text());
}

const bucketName = 'quarkjs.io';
const folder = './.vuepress/dist';
process.env.GOOGLE_APPLICATION_CREDENTIALS = path.resolve('./cloud-storage-key.json');
process.chdir(folder);

uploadFileToBucket()
    .then(() => {
        purgeCache();
    })
    .catch((err) => {
        console.error(err);
        process.exit(1);
    });

async function uploadFileToBucket() {
    const storage = new Storage({
        projectId: 'diy-mechatronics'
    });

    const bucket = storage.bucket(bucketName);
    await bucket.deleteFiles();

    const files = await recc('./');
    const promises = files.map(async (_file) => {
        const file = _file.replace(/\\/g, '/');
        // console.log(`File: ${file}; ${getCacheControlForFile(file)}`);
        const f = await bucket.upload(file, {
            gzip: true,
            public: true,
            destination: file,
            metadata: {
                cacheControl: `public, max-age=${getCacheControlForFile(file)}`,
            }
        });
        return f;
    });
    await Promise.all(promises);
    printConsoleStatus(`Uploaded all files`, 'success');
}

function getCacheControlForFile(file: string) {
    // html max-age 3600
    // html max-age 3600

    // cache service-worker
    if (file.match(/.+service-worker\.js/)) {
        console.log('Service worker cache set to zero');
        return 0;
    }

    // cache images
    if (file.match(/\.(jpg|jpeg|gif|png|mp4)$/)) {
        return 2592000;
    }

    // cache javascript
    if (file.match(/assets\/js.+(js)$/)) {
        return 2592000;
    }

    // cache assets
    if (file.match(/\.(woff|woff2|css)$/)) {
        return 2592000;
    }

    // return 3600;
    return 7200;
}