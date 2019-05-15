import * as fs from 'fs-extra';
import * as path from 'path';
import * as recc from 'recursive-readdir';
import * as YAML from 'yamljs';
import { AllTags } from './types';

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

const SNIPPETS_BASE_PATH = './snippets';
const TAGS_BASE_PATH = './tags';

activate().catch(console.error);

export async function activate() {
    await fs.ensureDir('./tags');

    const frontmatterData: IFrontmatterData[] = [];
    const promises = (await recc(SNIPPETS_BASE_PATH, ['README.md'])).map(async (file) => {
        frontmatterData.push({
            path: file,
            frontmatter: getFrontmatter((await fs.readFile(file)).toString())
        });
    });
    await Promise.all(promises);
    createTagsPage();
    createFilesInTagsFolder(frontmatterData);

    function getFrontmatter(fileData: string): Frontmatter {
        const frontmatter = fileData.match(/---([\s\S\n]+)---/);
        return YAML.parse(frontmatter[1]);
    }
}

function createTagsPage() {
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
        str = str.concat(`# ${tag}`, '\n\n');
        files.map((file) => {
            str = str.concat(
                `<MetaCard title="${file.frontmatter.title}" `,
                `description="${file.frontmatter.description}" `,
                `link="${file.path}" `,
                `tags='${JSON.stringify(file.frontmatter.tags)}' />`, '\n\n');
            fs.writeFileSync(path.join(TAGS_BASE_PATH, tag + '.md'), str);
        });
    });
}
