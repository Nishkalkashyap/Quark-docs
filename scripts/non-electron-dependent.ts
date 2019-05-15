import * as fs from 'fs-extra';
import * as path from 'path';
import * as recc from 'recursive-readdir';
import * as YAML from 'yamljs';
import { AllTags } from './types';
import { themeConfig } from '../.vuepress/config';
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
    const promises = (await recc(SNIPPETS_BASE_PATH, ['README.md'])).map(async (file) => {
        frontmatterData.push({
            path: file,
            frontmatter: getFrontmatter((await fs.readFile(file)).toString())
        });
    });
    await Promise.all(promises);
    createReadmePage();
    createFilesInTagsFolder(frontmatterData);

    function getFrontmatter(fileData: string): Frontmatter {
        const frontmatter = fileData.match(/---([\s\S\n]+)---/);
        return YAML.parse(frontmatter[1]);
    }

    function createReadmePage() {
        let str = '';
        str = str.concat('# Tags', '\n\n');

        Object.keys(AllTags).map((tag) => {
            str = str.concat(`<Tag name="${tag}" />`, '\n');
        });
        fs.writeFileSync(path.join(TAGS_BASE_PATH, 'README.md'), str);
    }

    function createFilesInTagsFolder(data: IFrontmatterData[]) {

        Object.keys(AllTags).map((tag) => {
            const files = data.filter((d) => {
                return d.frontmatter.tags.includes(tag);
            });

            let str = '';
            str = str.concat('---', '\n', 'pageClass : tags-page', '\n', '---', '\n\n\n');
            str = str.concat(`# ${tag}`, '\n\n');
            str = str.concat(`<Header label="${AllTags[tag].description}" />`, '\n');
            str = str.concat('<div class="tags-container">', '\n');
            files.map((file) => {
                str = str.concat(
                    `<MetaCard title="${file.frontmatter.title}" `,
                    `description="${file.frontmatter.description}" `,
                    `link="${file.path.replace('.md', '.html').replace(/[\\/]/g, '/')}" `,
                    `tags='${JSON.stringify(file.frontmatter.tags)}' />`, '\n\n'
                );
            });
            str = str.concat('</div>', '\n');
            fs.writeFileSync(path.join(TAGS_BASE_PATH, tag + '.md'), str);
        });
    }
}


function updatePrimaryColor() {
    //has to be hex code
    const iconColor = '#020814';

    //can be rgb
    const accentColor = '#3880ff';

    const overrideFilePath = path.resolve('./.vuepress/override.styl');
    const svgFilePath = path.resolve(`./.vuepress/public/images/icon-svg.svg`);

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

type IFrontmatterData = {
    path: string;
    frontmatter: Frontmatter;
};

type Frontmatter = {
    author: string;
    tags: string[];
    title: string;
    description: string;
};

interface ISidebarObject {
    [name: string]: string[];
}
