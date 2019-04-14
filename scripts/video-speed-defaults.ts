import * as path from 'path';

interface IDefaults {
    [path: string]: number
}

const defaultsInner: IDefaults = {
    // './videos/guide/introduction.mp4': 1
}

export const defaults: IDefaults = {};
Object.keys(defaultsInner).map((key) => {
    defaults[path.resolve(key)] = defaultsInner[key];
});