import * as path from 'path';

interface IDefaults {
    [path: string]: {
        size?: string;
        bitrate?: string;
        speed?: number;
    }
}

const defaultsInner: IDefaults = {
    './videos/guide/hello-world-intro.avi': {
        speed: 2
    }
}

export const defaults: IDefaults = {};
Object.keys(defaultsInner).map((key) => {
    defaults[path.resolve(key)] = defaultsInner[key];
});