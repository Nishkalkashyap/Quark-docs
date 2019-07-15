import fetch from 'node-fetch';
import * as dotenv from 'dotenv';
dotenv.config({ path: '.env' });

purgeCache().then((res) => {
    console.log(res);
}).catch(console.error);

async function purgeCache() {
    const result = await fetch(`https://api.cloudflare.com/client/v4/zones/7d5732fab88b05cc381a9479ad89a090/purge_cache`, {
        method: 'post',
        headers: {
            'X-Auth-Email': 'kashyapnishkal@gmail.com',
            'X-Auth-Key': process.env.CLOUD_FLARE_API_KEY,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            purge_everything: true
        })
    });
    console.log(await result.text());
}