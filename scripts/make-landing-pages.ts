import * as fs from 'fs-extra';
const paths = ['guide', 'references', 'structures'];

//sidebar:(.|\n)+?}

// paths.map((v) => {
//     createReadmeFiles(v);
// });

const regexp = () => {
    fs.readFile('./.vuepress/config.js').then((file) => {
        // const sidebar = eval(file.toString())['themeConfig']['sidebar'];
        // console.log(sidebar);
        // const match = file.toString().replace(/sidebar\s*:\s*{/, '');
        const match = file.toString().replace(/sidebar:(.|\n|\s|{)+?}/, '');
        console.log(match);
    }).catch((err) => {
        console.log(err);
    })
}

regexp();

function createReadmeFiles(path: string) {
    fs.readdir(`./${path}`).then((dirs) => {
        let str = '';
        str = str.concat(capitalize(path), '\n\n');

        const files = dirs.filter((dir) => { return dir != 'README.md' });

        files.map((file) => {
            str = str.concat('* ', `[${capitalize(file.replace(/\.md$/, '').replace(/-/g, ' '))}](/${path}/${file})`, '\n');
        });
        // console.log(str);
        fs.writeFileSync(`./${path}/README.md`, str);
    }).catch((err) => {
        console.log(err);
    });
}

const capitalize = (s: string) => {
    // if (typeof s !== 'string') return ''
    // return s.charAt(0).toUpperCase() + s.slice(1)

    // var splitStr = s.toLowerCase().split(' ');
    var splitStr = s.split(' ');
    for (var i = 0; i < splitStr.length; i++) {
        // You do not need to check if i is larger than splitStr length, as your for does that for you
        // Assign it back to the array
        splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
    }
    // Directly return the joined string
    return splitStr.join(' ');
}