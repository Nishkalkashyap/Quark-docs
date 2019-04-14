import * as mpg from 'fluent-ffmpeg';
import * as recc from 'recursive-readdir';
import * as path from 'path';
import * as fs from 'fs-extra';

const ffmpeg_path = require('@ffmpeg-installer/ffmpeg').path;
const ffprobe_path = require('@ffprobe-installer/ffprobe').path;
const baseOutputDir = '.vuepress/public/c-assets';
fs.emptyDirSync(baseOutputDir);

const ignoreFunction = (file: string, stat: fs.Stats) => {
    if (stat.isDirectory()) {
        return false;
    }

    if (file.search('node_modules') !== -1 || file.search('.vuepress') !== -1 || file.search('output') !== -1) {
        return true;
    }

    return file.search(/(mp4|wmv|avi)/g) == -1;
}

recc('./', [ignoreFunction]).then((files) => {
    console.log(files);
    files.map((file) => {
        convertVideo(file, 3);
    });
}).catch((err) => {
    console.log(err);
});

function convertVideo(inputPath: string, videoSpeedTimes: number) {

    const relativePath = path.relative('./videos', inputPath);
    const filename = path.basename(inputPath).replace(path.extname(inputPath), '');
    const outputPath = path.join(baseOutputDir, path.dirname(relativePath), filename.concat('.mp4'));
    const screenshotOutputPath = path.join(baseOutputDir, path.dirname(relativePath), filename.concat('.png'));

    fs.ensureDirSync(path.dirname(outputPath));

    const command = mpg({
        source: inputPath,
        logger: {
            error: console.error,
            debug: console.log,
            info: console.log,
            warn: console.warn
        }
    })

    command
        .setFfmpegPath(ffmpeg_path)
        .setFfprobePath(ffprobe_path)

        .withNoAudio()
        .withOutputFormat('mp4')
        .withSize('?x1080')
        .withAutoPad(true, '#ffffff')
        .withVideoBitrate('1000k')
        .withVideoFilters([
            {
                filter: 'setpts',
                // options: '0.5*PTS'
                options: `${1 / videoSpeedTimes}*PTS`
            }
        ])

        .saveToFile(outputPath)
        .takeScreenshots({
            count: 1,
            timemarks: ['0.1'],
            filename: screenshotOutputPath,
            size: '?x1080'
        })
        .on('error', (e) => {
            console.log(`Cannot process: ${e}`);
        })
        .on('end', (e) => {
            console.log(`Finished Building: ${outputPath}`);
        });
}
