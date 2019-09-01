const op: typeof import('open') = require('open');


const links = [
    // 'https://electronjs.org/docs',
    // 'https://fireship.io/',
    // 'https://processing.org/',
    // 'https://vuejs.org/',
    // 'https://docs.npmjs.com/about-npm/',
    // 'https://ionicframework.com/docs/intro/',
    // "https://ionicframework.com/studio",
    // 'https://medium.com/@ericsimons/stackblitz-online-vs-code-ide-for-angular-react-7d09348497f4',
    // 'https://styleguide.mailchimp.com/writing-technical-content/',
    // "https://code.visualstudio.com/docs/setup/setup-overview",
    // "https://docs.platformio.org/en/latest/what-is-platformio.html"
    "http://tushkiz.github.io/",
    "https://arthelon.github.io",
    "https://jsonnull.com/",
    "https://elrumordelaluz.com/",
    "http://ivesvh.com/",
    "https://valentin-hervieu.fr",
    "http://anenth.js.org",
    "http://nyaganti.com/",
    "http://bogas04.github.io"
]


links.map((url) => {
    op(url, {
        background: true
    });
})