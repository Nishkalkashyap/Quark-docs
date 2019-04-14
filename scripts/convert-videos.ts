import * as mpg from 'fluent-ffmpeg';
import * as recc from 'recursive-readdir';
import * as path from 'path';
import * as fs from 'fs-extra';
import { defaults } from './video-speed-defaults';
import chalk from 'chalk';
import { table as Table } from 'table';
import { stdout } from 'single-line-log';

const ffmpeg_path = require('@ffmpeg-installer/ffmpeg').path;
const ffprobe_path = require('@ffprobe-installer/ffprobe').path;
const baseOutputDir = '.vuepress/public/c-assets';

interface Table {
    filename: string;
    started: string;
    finished: string;
}

createVideos();

function createVideos() {
    fs.emptyDirSync(baseOutputDir);

    const ignoreFunction = (_path: string, stat: fs.Stats) => {
        if (stat.isDirectory()) {
            return false;
        }

        return _path.search(/(mp4|wmv|avi)/g) == -1;
    }

    let filesToConvert = [''];
    let index = 0;
    let table: { [path: string]: Table } = {};

    setInterval(() => {
        const data = [['Path', 'Started', 'Finished']];
        Object.keys(table).map((key) => {
            data.push([table[key].filename, table[key].started, table[key].finished])
        });
        stdout(Table(data));

        const exit = Object.keys(table).map((key) => {
            return table[key].finished;
        }).every((val) => {
            return val.search('Finished') != -1
        });

        if (exit) {
            console.log(chalk.bgGreenBright.black('Converted All Files! ✓✓✓✓'));
            setTimeout(() => {
                process.exit(0);
            }, 5000);
        }

    }, 500);

    recc('./videos', [ignoreFunction]).then((files) => {
        filesToConvert = files;
        files.map((_path) => {
            table[_path] = {
                filename: chalk.bgBlueBright.black(_path),
                finished: chalk.bgYellowBright.black('false'),
                started: chalk.bgYellowBright.black('false')
            }
        });
        convertNextFile();
    }).catch((err) => {
        console.log(err);
    });

    function convertNextFile() {

        if (!filesToConvert[index]) {
            return;
        }

        convertVideo(filesToConvert[index]).then(() => {
            index++;
            convertNextFile();
        });
    }

    function convertVideo(inputPath: string): Promise<boolean> {

        table[inputPath].started = chalk.bgGreenBright.black('Started ✓✓');

        return new Promise((resolve) => {
            // console.log(chalk.bgBlueBright.whiteBright('Converting:') + chalk.blueBright.bgBlack(inputPath));
            const relativePath = path.relative('./videos', inputPath);
            const filename = path.basename(inputPath).replace(path.extname(inputPath), '');
            const outputPath = path.join(baseOutputDir, path.dirname(relativePath), filename.concat('.mp4'));
            const screenshotOutputPath = path.join(baseOutputDir, path.dirname(relativePath), filename.concat('.png'));
            const videoSpeedTimes: number = defaults[path.resolve(inputPath)] || 3;

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
                        options: `${1 / videoSpeedTimes}*PTS`
                    }
                ])
                .saveToFile(outputPath)
                .takeScreenshots({
                    count: 1,
                    timemarks: ['0.2'],
                    filename: screenshotOutputPath,
                    size: '?x1080'
                })
                .on('error', (e) => {
                    resolve(true);
                    console.log(`Cannot process: ${e}`);
                })
                // .on('progress', (e) => {
                //     process.stdout.write("Progress Percent: " + (e.percent as number).toFixed(2).toString() + "%\r");
                // })
                .on('end', (e) => {
                    table[inputPath].finished = chalk.bgGreenBright.black('Finished ✓✓');
                    resolve(true);
                    // console.log(chalk.bgBlueBright.whiteBright('Finished Building::') + chalk.blueBright.bgBlack(outputPath));
                    // console.log('\n\n');
                });
        });
    }
}

