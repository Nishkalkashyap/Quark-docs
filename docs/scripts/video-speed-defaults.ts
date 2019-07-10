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
    },
    './videos/guide/showcase/control-system-1.mp4' : {
        bitrate : '1000k'
    },
    './videos/guide/showcase/system-monitor.mp4' : {
        bitrate : '512k'
    }
}

export const defaults: IDefaults = {};
Object.keys(defaultsInner).map((key) => {
    defaults[path.resolve(key)] = defaultsInner[key];
});