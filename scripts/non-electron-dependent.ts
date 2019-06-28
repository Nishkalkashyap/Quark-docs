import * as fs from 'fs-extra';
import * as Path from 'path';
import * as recc from 'recursive-readdir';
import { AllTags } from './types';
import { themeConfig } from '../.vuepress/config';
import { IFrontmatterData, getFrontmatterFromPath, capitalize, Frontmatter, randomIntFromInterval, reccursiveIgnoreFunction } from './util';
import * as sharp from 'sharp';

var beautify = require('js-beautify').js;

const sidebars = ['guide', 'references', 'structures', 'FAQ', 'tags', 'snippets', 'releases'];
const readmefiles = ['guide', 'references', 'structures', 'FAQ', 'snippets', 'releases'];

const SNIPPETS_BASE_PATH = './snippets';
const TAGS_BASE_PATH = './tags';

(async () => {
    console.log(new Date());
    console.log(Date.now());
    await createTagsDirectory();
    createSidebars(sidebars);
    createReadmeFiles(readmefiles);
    await updatePrimaryColor();
    generateAllDocsPage();
    await createRoutes();
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
        readmeData = readmeData.concat('<div class="tags-container">', '\n\n');
        Object.keys(AllTags).map((tag) => {
            readmeData = readmeData.concat(`<Tag name="${tag}" />`, '\n');
        });
        readmeData = readmeData.concat(`</div>`);
        fs.writeFileSync(Path.join(TAGS_BASE_PATH, 'README.md'), readmeData);
    }

    function createFilesInTagsFolder(data: IFrontmatterData[]) {
        Object.keys(AllTags).map((tag) => {
            const files = data.filter((d) => {
                if (d.frontmatter && d.frontmatter.tags) {
                    return d.frontmatter.tags.includes(tag);
                }
            }).sort((a, b) => {
                if (a.frontmatter.cover && b.frontmatter.cover) { return 0; }
                if (a.frontmatter.cover && !b.frontmatter.cover) { return -1; }
                if (!a.frontmatter.cover && b.frontmatter.cover) { return 1; }
                return 0;
            }).sort((a, b) => {
                return (a.path > b.path) ? 1 : (a.path < b.path) ? -1 : 0
            });

            let str = '';
            str = str.concat('---', '\n',
                'pageClass : sidebar-metacard-container', '\n',
                `description : ${AllTags[tag].description}`, '\n',
                `title : ${tag}`, '\n',
                '---', '\n\n');
            // str = str.concat(`# ${capitalize(tag)}`, '\n\n');
            str = str.concat(`<Tag name="${capitalize(tag)}" />`, '\n\n');
            str = str.concat(`<Header />`, '\n\n');
            str = str.concat('<div class="tags-container">', '\n\n');
            files.map((file) => {
                str = str.concat(
                    `<MetaCard link="/${file.path.replace('.md', '.html').replace(/[\\/]/g, '/')}" >`,
                    file.frontmatter.cover ? `<img src="${file.frontmatter.cover}"> ` : '',
                    '</MetaCard>', '\n\n'
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
        fs.readdir(`./${path}`).then((dir) => {
            const files = dir.filter((file) => { return file != 'README.md' });
            const frontmatters = files
                .map((file) => {
                    return getFrontmatterFromPath(Path.join(path, file));
                }).sort((a, b) => {
                    if (a.cover && b.cover) { return 0; }
                    if (a.cover && !b.cover) { return -1; }
                    if (!a.cover && b.cover) { return 1; }
                    return 0;
                });


            let str = '';
            str = str.concat('---', '\n', 'pageClass : no-sidebar-metacard-container', '\n', 'sidebar : false', '\n', '---', '\n\n');
            str = str.concat(capitalize(`# ${path}`), '\n\n');
            str = str.concat('<div class="tags-container">', '\n\n');

            frontmatters.map((frontmatter) => {
                if (frontmatter) {
                    str = str.concat(
                        `<MetaCard link="/${frontmatter.path.replace('.md', '.html').replace(/[\\/]/g, '/')}" >`,
                        frontmatter.cover ? `<img src="${frontmatter.cover}"> ` : '',
                        '</MetaCard>', '\n\n'
                    );
                }
            });
            str = str.concat('</div>', '\n');

            fs.writeFileSync(`./${path}/README.md`, str);
        }).catch((err) => {
            console.log(err);
        });
    }
}


async function updatePrimaryColor() {
    //has to be hex code
    const iconColor = '#020814';
    // const iconColor = '#ffffff';

    //can be rgb
    // const accentColor = process.env.TRAVIS_EVENT_TYPE == 'cron' ? getRandomColor() : '#3880ff';
    console.log(process.env.TRAVIS_EVENT_TYPE);
    const accentColor = '#3880ff';//ionic blue
    // const accentColor = '#020814';//black

    const overrideFilePath = Path.resolve('./.vuepress/override.styl');
    const svgFilePath = Path.resolve(`./.vuepress/public/images/icon-svg.svg`);
    const pngFilePath = Path.resolve(`./.vuepress/public/images/icon.png`);
    const manifestFilePath = Path.resolve(`./.vuepress/public/pwa/manifest.json`);

    let override = fs.readFileSync(overrideFilePath).toString();
    override = override.replace(/\$accentColor.+/, `$accentColor = ${accentColor}`);
    fs.writeFileSync(overrideFilePath, override);

    //svg color
    let svg = fs.readFileSync(svgFilePath).toString();
    svg = svg.replace(/fill="[#0-9a-z(),]+"/g, `fill="${iconColor}"`);
    fs.writeFileSync(svgFilePath, svg);


    //png image
    const imageBuffer = await sharp(svgFilePath)
        .png()
        .toBuffer();
    fs.writeFileSync(pngFilePath, imageBuffer);


    //manifest json color
    const manifest = fs.readJsonSync(manifestFilePath);
    manifest.theme_color = accentColor;
    fs.writeFileSync(manifestFilePath, JSON.stringify(manifest));

    function getRandomColor(): string {
        const arr = [
            '#ff5252',
            '#3880ff',
            '#3b5bdb',
            '#ffce00',
            '#09c372',
            '#fa7c3b',
            '#5851ff'
        ];
        return arr[randomIntFromInterval(0, 6)]
    }
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
        const str = String().concat('sidebar:', JSON.stringify(Object.assign(initialObject, obj)).replace(/(:|,|\[)/g, '$1\n'));
        const match = file.toString().replace(/sidebar:(.|\n|\s|{)+?}/, str);
        fs.writeFileSync('./.vuepress/config.js', beautify(match));
    }).catch((err) => {
        console.log(err);
    });
}

function generateAllDocsPage() {

    const folders = sidebars.filter((val) => {
        return !val.match(/(tags|FAQ|all)/);
    });

    let str = ``;
    str = str.concat(`---`, '\n');
    str = str.concat(`description : All docs on one page.`, '\n');
    str = str.concat(`author : nishkal`, '\n');
    str = str.concat(`tags : []`, '\n');
    str = str.concat(`sidebarDepth: 4`, '\n');
    str = str.concat(`---`, '\n');

    str = str.concat(`\n# All Docs\n`);

    folders.map((folder) => {
        str = str.concat('\n', `## ${caps(folder)}`, '\n');

        let files = fs.readdirSync(folder).filter((val) => !val.includes('README.md'));

        const initialObject: ISidebarObject = JSON.parse(JSON.stringify(themeConfig.sidebar));
        files = files.sort((a, b) => {
            return initialObject[`/${folder}/`].indexOf(a) - initialObject[`/${folder}/`].indexOf(b)
        });

        files.map((file) => {
            const frontmatter = getFrontmatterFromPath(Path.join(folder, file));
            let data = fs.readFileSync(Path.join(folder, file)).toString();

            data = data
                .replace(/---([\s\S\n]+?)---/, '')
                .replace(/(#.*?)\s/g, '$1## ')
                .replace(/\[\[toc\]\]/g, '');

            //set heading
            const regex = /[\s\n]#{3}\s(\w+)/;
            const match = data.match(regex);
            if (match) {
                data = data.replace(regex, '### $1');
            } else {
                data = `\n\n### ${file.replace('.md', '')}\n\n`.concat(data);
            }

            if (frontmatter) {
                data = data.replace(/<Header\/>/g, `<Header label="${frontmatter.description}" />`)
            }
            str = str.concat(data, '\n', '________', '\n\n');
        });
    });

    fs.ensureFileSync('./all/README.md');
    fs.writeFileSync('./all/README.md', str);
}

function caps(str: string) {
    str = str[0].toUpperCase() + str.substr(1, str.length);
    return str;
}


async function createRoutes() {
    let results: any[] = await recc('./', ['README.md', reccursiveIgnoreFunction])
    results = results.map((res) => {
        const redirect = res.replace(/[\\]/g, '/').replace('.md', '');
        return {
            redirect: '/'.concat(redirect, '.html'),
            path: '/'.concat(redirect, '/')
        }
    });
    fs.writeFileSync('./.vuepress/routes.json', (JSON.stringify(results, undefined, 4)));
}





interface ISidebarObject {
    [name: string]: string[];
}
