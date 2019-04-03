import * as fs from 'fs-extra';
const paths = ['guide', 'references', 'structures'];
var beautify = require('js-beautify').js;
import fetch from 'node-fetch';
import * as YAML from 'yamljs';

createSidebars(paths);
createReadmeFiles(paths);
updateDownloadLinks();

function updateDownloadLinks() {

    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    fetch('https://storage.googleapis.com/quarkjs-auto-update/latest.yml').then(async (val) => {
        const text = await val.text();
        const obj = YAML.parse(text);
        const windowsURL = obj.files[0].url;
        const date = new Date(obj.releaseDate);
        let file = fs.readFileSync('./download/README.md').toString();

        file = file.replace(/https:\/\/storage.+exe/g, `https://storage.googleapis.com/quarkjs-auto-update/${windowsURL}`);
        file = file.replace(/__Latest.+?__/, `__Latest Version: ${obj.version}__`);
        file = file.replace(/__Release.+?__/, `__Release Date: ${monthNames[date.getMonth()]} ${date.getDay()} ${date.getFullYear()},  ${date.toLocaleTimeString()}__`);
        fs.writeFileSync('./download/README.md', file);
    }).catch((err) => {
        console.log(err);
    });
}


function createSidebars(paths: string[]) {
    fs.readFile('./.vuepress/config.js').then((file) => {
        const obj = {};
        paths.map((path) => {
            obj[`/${path}/`] = fs.readdirSync(`./${path}`).filter((val) => { return val != 'README.md' })
        });

        const str = String().concat('sidebar:', JSON.stringify(obj).replace(/(:|,|\[)/g, '$1\n'));
        const match = file.toString().replace(/sidebar:(.|\n|\s|{)+?}/, str);
        fs.writeFileSync('./.vuepress/config.js', beautify(match));
    }).catch((err) => {
        console.log(err);
    });
}


function createReadmeFiles(paths: string[]) {

    paths.map((v) => {
        createReadmeFile(v);
    });

    function createReadmeFile(path: string) {
        fs.readdir(`./${path}`).then((dirs) => {
            let str = '';
            const files = dirs.filter((dir) => { return dir != 'README.md' });

            str = str.concat(capitalize(`# ${path}`), '\n\n');
            // str = str.concat('<Breadcrumbs :url="this.$page"/>', '\n\n\n');
            str = str.concat('| Objects | Description |', '\n');
            str = str.concat('| ----- | ----- |', '\n');
            files.map(async (file) => {
                // str = str.concat('* ', `[${capitalize(file.replace(/\.md$/, '').replace(/-/g, ' '))}](/${path}/${file})`, '\n');

                const data = (fs.readFileSync(require('path').join(path, file))).toString();
                const header = (data.match(/Header label="(.+?)"/) || [])[1];

                str = str.concat(`| [${capitalize(file.replace(/\.md$/, '').replace(/-/g, ' '))}](/${path}/${file}) | ${header || ''}|`, '\n');
            });
            fs.writeFileSync(`./${path}/README.md`, str);
        }).catch((err) => {
            console.log(err);
        });


        function capitalize(s: string) {
            var splitStr = s.split(' ');
            for (var i = 0; i < splitStr.length; i++) {
                splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
            }
            return splitStr.join(' ');
        }
    }
}

