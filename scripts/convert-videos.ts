import * as mpg from 'fluent-ffmpeg';
import * as recc from 'recursive-readdir';
import * as path from 'path';
import * as fs from 'fs-extra';

const ffmpeg_path = './videos/ffmpeg/ffmpeg/bin/ffmpeg.exe';
const ffprobe_path = './videos/ffmpeg/ffmpeg/bin/ffprobe.exe';
const presets_path = './videos/ffmpeg/ffmpeg/presets';

recc('./videos/input', [
    (file, stat) => {
        return file.search(/(mp4|wmv|avi)/g) !== -1 && stat.isDirectory()
    }
]).then((files) => {
    // console.log(files);
    files.map((file) => {
        convertVideo(file, 2);
    });
}).catch((err) => {
    console.log(err);
});

function convertVideo(inputPath: string, videoSpeedTimes: number) {

    const relativePath = path.relative('./videos/input', inputPath);
    const filename = path.basename(inputPath).replace(path.extname(inputPath), '').concat('.mp4');
    const outputPath = path.join('./videos/output', path.dirname(relativePath), filename);
    fs.ensureDirSync(path.dirname(outputPath));

    const command = mpg({
        source: inputPath,
        presets: presets_path,
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
        .withSize('1920x?')
        .withAutoPad(true, '#ffffff')
        .withVideoBitrate('10000k')
        .withVideoFilters([
            {
                filter: 'setpts',
                // options: '0.5*PTS'
                options: `${1 / videoSpeedTimes}*PTS`
            }
        ])

        .saveToFile(outputPath)
}
