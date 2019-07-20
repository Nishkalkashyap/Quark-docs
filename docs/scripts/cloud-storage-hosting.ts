import { Storage } from '@google-cloud/storage';
import * as recc from 'recursive-readdir';
import { printConsoleStatus } from './util';
import * as path from 'path';

const bucketName = 'quarkjs.io';
const folder = './.vuepress/dist';
process.env.GOOGLE_APPLICATION_CREDENTIALS = path.resolve('./cloud-storage-key.json');
process.chdir(folder);

uploadFileToBucket()
    .catch((err) => {
        console.error(err);
        process.exit(1);
    });

async function uploadFileToBucket() {
    const storage = new Storage({
        projectId: 'diy-mechatronics'
    });

    const bucket = storage.bucket(bucketName);
    // await bucket.deleteFiles();

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
    if (file.match(/.+worker\.js/)) {
        printConsoleStatus(`Service worker cache set to zero: ${file}`, 'info');
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