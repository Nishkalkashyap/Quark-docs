import * as fs from 'fs-extra';
const paths = ['guide', 'references', 'structures'];
var beautify = require('js-beautify').js;

regexp(paths);
paths.map((v) => {
    createReadmeFiles(v);
});


function regexp(paths: string[]) {
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


function createReadmeFiles(path: string) {
    fs.readdir(`./${path}`).then((dirs) => {
        let str = '';
        str = str.concat(capitalize(`# ${path}`), '\n\n');
        const files = dirs.filter((dir) => { return dir != 'README.md' });
        files.map((file) => {
            str = str.concat('* ', `[${capitalize(file.replace(/\.md$/, '').replace(/-/g, ' '))}](/${path}/${file})`, '\n');
        });
        fs.writeFileSync(`./${path}/README.md`, str);
    }).catch((err) => {
        console.log(err);
    });
}

const capitalize = (s: string) => {
    var splitStr = s.split(' ');
    for (var i = 0; i < splitStr.length; i++) {
        splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
    }
    return splitStr.join(' ');
}