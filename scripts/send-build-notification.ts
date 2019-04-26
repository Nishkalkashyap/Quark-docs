import * as dotenv from 'dotenv';
dotenv.config({ path: './.env' });

import * as web from '@slack/web-api';
import * as fs from 'fs-extra';

type channels = 'storage' | 'general' | 'compute' | 'billing' | 'download' | 'documentation';

const token = (process.env.BOT_ACCESS_TOKEN);
const client = new web.WebClient(token);
function postMessage(channel: channels, text: string) {
    client.chat.postMessage({
        channel,
        text,
        mrkdwn: true
    }).then((value) => {
        console.log(text);
    }).catch((err) => {
        console.log(err);
    });
}

const version = fs.readJsonSync('./package.json').version;
postMessage('documentation', `Build version:${version} was uploaded.`);