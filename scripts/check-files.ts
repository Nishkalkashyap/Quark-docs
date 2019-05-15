import * as recc from 'recursive-readdir';
import { getFrontmatterFromPath, printConsoleStatus } from './util';

checkFiles().catch(console.error);

async function checkFiles() {
    const files = await recc('./', [(path, stat) => {

        if (stat.isDirectory() && path.includes('node_modules')) {
            return true;
        }

        if (stat.isDirectory()) {
            return false;
        }

        if (!path.endsWith('md')) {
            return true;
        }

    }]);

    files.map((file) => {
        if (!isValidFile(file)) {
            printConsoleStatus(`Invalid file: ${file}`, 'danger');
        }
    });
}

function isValidFile(path: string): boolean {
    return !!getFrontmatterFromPath(path);
}