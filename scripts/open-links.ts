const op: typeof import('open') = require('open');


const links = [
    'https://electronjs.org/docs',
    'https://fireship.io/',
    'https://processing.org/',
    'https://vuejs.org/',
    'https://docs.npmjs.com/about-npm/',
    'https://ionicframework.com/docs/intro/',
    "https://ionicframework.com/studio",
    'https://medium.com/@ericsimons/stackblitz-online-vs-code-ide-for-angular-react-7d09348497f4',
    'https://styleguide.mailchimp.com/writing-technical-content/',
    "https://code.visualstudio.com/docs/setup/setup-overview",
    "https://docs.platformio.org/en/latest/what-is-platformio.html"
]


links.map((url) => {
    op(url, {
        background: true
    });
})