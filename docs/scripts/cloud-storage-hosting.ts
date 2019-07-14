import { Storage } from '@google-cloud/storage';
import * as recc from 'recursive-readdir';
import { printConsoleStatus } from './util';
import * as path from 'path';

const folder = './.vuepress/dist';
process.env.GOOGLE_APPLICATION_CREDENTIALS = path.resolve('./cloud-storage-key.json');
process.chdir(folder);

uploadFileToBucket('quark-www.quarkjs.io').catch((err) => {
    console.error(err);
    throw Error(`Error uploading files`);
});

async function uploadFileToBucket(bucketName: string) {
    const storage = new Storage({
        projectId: 'diy-mechatronics'
    });
    const bucket = storage.bucket(bucketName);

    const files = await recc('./');
    const promises = files.map(async (_file) => {
        const file = _file.replace(/\\/g, '/');
        const f = await bucket.upload(file, {
            gzip: true,
            public: true,
            destination: file,
            metadata: {
                cacheControl: 'public, max-age=31536000',
            }
        });
    });
    await Promise.all(promises);
    printConsoleStatus(`Uploaded all files`, 'success');
}