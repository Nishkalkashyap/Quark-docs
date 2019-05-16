import * as fs from 'fs-extra';
import * as Path from 'path';
import * as recc from 'recursive-readdir';
import { AllTags } from './types';
import { themeConfig } from '../.vuepress/config';
import { IFrontmatterData, getFrontmatterFromPath } from './util';
import { reccursiveIgnoreFunction, isValidFile } from './check-files';
var beautify = require('js-beautify').js;

const sidebars = ['guide', 'references', 'structures', 'FAQ', 'tags', 'snippets'];
const readmefiles = ['guide', 'references', 'structures', 'FAQ', 'snippets'];

const SNIPPETS_BASE_PATH = './snippets';
const TAGS_BASE_PATH = './tags';

(async () => {
    await createTagsDirectory();
    createSidebars(sidebars);
    createReadmeFiles(readmefiles);
    updatePrimaryColor();
})().catch(console.error);


async function createTagsDirectory() {
    fs.ensureDirSync(TAGS_BASE_PATH);

    const frontmatterData: IFrontmatterData[] = [];
    (await recc(Path.join('./'), ['README.md', reccursiveIgnoreFunction])).map((file) => {
        frontmatterData.push({
            path: file,
            frontmatter: getFrontmatterFromPath(file)
        });
    });
    createFilesInTagsFolder(frontmatterData);
    createReadmePage();

    function createReadmePage() {
        let readmeData = '';
        readmeData = readmeData.concat('# Tags', '\n\n');
        Object.keys(AllTags).map((tag) => {
            readmeData = readmeData.concat(`<Tag name="${tag}" />`, '\n');
        });
        fs.writeFileSync(Path.join(TAGS_BASE_PATH, 'README.md'), readmeData);
    }

    function createFilesInTagsFolder(data: IFrontmatterData[]) {
        Object.keys(AllTags).map((tag) => {
            const files = data.filter((d) => {
                if (d.frontmatter) {
                    return d.frontmatter.tags.includes(tag);
                }
            });

            let str = '';
            str = str.concat('---', '\n', 'pageClass : sidebar-metacard-container', '\n', `description : ${AllTags[tag].description}`, '\n', '---', '\n\n');
            str = str.concat(`# ${tag}`, '\n\n');
            str = str.concat(`<Header/>`, '\n\n');
            str = str.concat('<div class="tags-container">', '\n\n');
            files.map((file) => {
                str = str.concat(
                    `<MetaCard title="${file.frontmatter.title}" `,
                    `description="${file.frontmatter.description}" `,
                    `link="${file.path.replace('.md', '.html').replace(/[\\/]/g, '/')}" `,
                    `tags='${JSON.stringify(file.frontmatter.tags)}' />`, '\n\n'
                );
            });
            str = str.concat('</div>', '\n');
            fs.writeFileSync(Path.join(TAGS_BASE_PATH, tag + '.md'), str);
        });
    }
}

function createReadmeFiles(paths: string[]) {

    paths.map((v) => {
        createReadmeFile(v);
    });

    function createReadmeFile(path: string) {
        fs.readdir(`./${path}`).then((dirs) => {
            const files = dirs.filter((dir) => { return dir != 'README.md' });

            let str = '';
            str = str.concat('---', '\n', 'pageClass : no-sidebar-metacard-container', '\n', 'sidebar : false', '\n', '---', '\n\n');
            str = str.concat(capitalize(`# ${path}`), '\n\n');
            str = str.concat('<div class="tags-container">', '\n\n');

            files.map((file) => {
                const frontmatter = getFrontmatterFromPath(Path.join(path, file));
                if (frontmatter) {
                    str = str.concat(
                        `<MetaCard title="${frontmatter.title}" `,
                        `description="${frontmatter.description}" `,
                        `link="${Path.join(path, file).replace('.md', '.html').replace(/[\\/]/g, '/')}" `,
                        `tags='${JSON.stringify(frontmatter.tags)}' />`, '\n\n'
                    );
                }
            });
            str = str.concat('</div>', '\n');

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


function updatePrimaryColor() {
    //has to be hex code
    const iconColor = '#020814';
    // const iconColor = '#10dc60';

    //can be rgb
    // const accentColor = '#3880ff';//blue
    // const accentColor = '#10dc60';//green
    // const accentColor = '#ffce00';//yello
    // const accentColor = '#f04141';//red
    // const accentColor = '#09c372';//fireship green
    // const accentColor = '#fa7c3b';//fireship orange
    // const accentColor = '#020814';//black
    const accentColor = '#5851ff';//stenciljs purple

    const overrideFilePath = Path.resolve('./.vuepress/override.styl');
    const svgFilePath = Path.resolve(`./.vuepress/public/images/icon-svg.svg`);

    let override = fs.readFileSync(overrideFilePath).toString();
    override = override.replace(/\$accentColor.+/, `$accentColor = ${accentColor}`);
    fs.writeFileSync(overrideFilePath, override);

    let svg = fs.readFileSync(svgFilePath).toString();
    svg = svg.replace(/fill="[#0-9a-z(),]+"/g, `fill="${iconColor}"`);
    fs.writeFileSync(svgFilePath, svg);
}

function createSidebars(paths: string[]) {
    const obj: ISidebarObject = {};
    paths.map((path) => {
        obj[`/${path}/`] = fs.readdirSync(`./${path}`).filter((val) => { return val != 'README.md' })
    });
    const initialObject: ISidebarObject = JSON.parse(JSON.stringify(themeConfig.sidebar));
    const folders = Object.keys(obj);
    folders.map((folder) => {
        obj[folder].sort((a, b) => {
            return initialObject[folder].indexOf(a) - initialObject[folder].indexOf(b)
        });
    });

    fs.readFile('./.vuepress/config.js').then((file) => {
        const str = String().concat('sidebar:', JSON.stringify(obj).replace(/(:|,|\[)/g, '$1\n'));
        const match = file.toString().replace(/sidebar:(.|\n|\s|{)+?}/, str);
        fs.writeFileSync('./.vuepress/config.js', beautify(match));
    }).catch((err) => {
        console.log(err);
    });
}





interface ISidebarObject {
    [name: string]: string[];
}
