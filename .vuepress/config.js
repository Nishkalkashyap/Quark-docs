const path = require('path');

const AllTags = require('./../scripts/types').AllTags;

module.exports = {
    title: 'Quark',
    description: 'IoT Framework',
    ga: 'UA-112064718-3',
    serviceWorker: true,
    head: [
        [
            'script', {}, `
                (function(h,o,t,j,a,r){
                    h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
                    h._hjSettings={hjid:1226062,hjsv:6};
                    a=o.getElementsByTagName('head')[0];
                    r=o.createElement('script');r.async=1;
                    r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
                    a.appendChild(r);
                })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
        `
        ],
        [
            'link', {
                href: '/pwa/manifest.json',
                rel: 'manifest'
            }
        ],
        [
            'link', {
                rel: 'shortcut icon',
                type: 'image/svg',
                href: '/images/icon.png'
            },
        ],
        [
            'script', {
                src: '/__/firebase/6.0.2/firebase-app.js',
                type: 'text/javascript'
            }
        ],
        [
            'script', {
                src: '/__/firebase/init.js',
                type: 'text/javascript'
            }
        ],
        [
            'script', {
                src: '/__/firebase/6.0.2/firebase-performance.js',
                type: 'text/javascript'
            }
        ],
        [
            'script', {}, `
                var perf = firebase.performance();
        `
        ],
        // ['script', {
        //     src: '/assets/anime.min.js',
        //     type: 'text/javascript'
        // }]
        // ['script', {
        //     src: 'https://unpkg.com/ionicons@4.5.5/dist/ionicons.js'
        // }],
        // ['script', {
        //     src: "https://unpkg.com/@ionic/core@latest/dist/ionic.js"
        // }],
        // ['link', {
        //     href: "https://unpkg.com/@ionic/core@latest/css/ionic.bundle.css",
        //     rel: "stylesheet"
        // }]
    ],
    markdown: {
        config: md => {
            md.use(require('markdown-it-html5-embed'), {
                html5embed: {
                    useImageSyntax: true,
                    useLinkSyntax: false
                }
            });

            md.use(require('markdown-it-imsize'));
            md.use(require("markdown-it-admonition"));
            md.use(require('markdown-it-task-lists'));
            md.use(require('markdown-it-multimd-table'));
        }
    },
    themeConfig: {
        logo: '/images/icon-svg.svg',
        editLinks: true,
        repoLabel: 'GitHub',
        repo: 'https://github.com/Nishkalkashyap/Quark-docs',
        lastUpdated: 'Last Updated',
        serviceWorker: {
            updatePopup: true
        },
        nav: [{
                text: 'Guide',
                link: '/guide/intro.md'
            },
            {
                text: 'Tags',
                items: Object.keys(AllTags).map((tag) => {
                    return {
                        text: tag,
                        link: `/tags/${tag}.html`
                    }
                })
            },
            {
                text: 'API',
                items: [{
                        text: 'References',
                        link: '/references/'
                        // link: '/references/app.html'
                    }, {
                        text: 'Structures',
                        link: '/structures/'
                        // link: '/structures/view-provider.html'
                    }
                    // {
                    //     text: 'Style Guide',
                    //     link: '/guide/intro.html'
                    // }
                ]
            },
            {
                text: 'More',
                items: [{
                        text: 'FAQ',
                        link: '/FAQ/glossary.html'
                    },
                    {
                        text: 'Snippets',
                        link: '/snippets/'
                    },
                    {
                        text: 'Links',
                        items: [{
                                text: 'Social',
                                link: 'https://social.quarkjs.io/'
                            },
                            {
                                text: 'GitHub',
                                link: 'https://github.com/Nishkalkashyap/Quark-docs'
                            }
                        ]
                    }
                ]
            },
            {
                text: 'Download',
                link: '/download/'
            }
        ],
        sidebar: {
            "/guide/": [
                "intro.md",
                "setup.md",
                "user-interface.md",
                "getting-started.md",
                "showcase.md"
            ],
            "/references/": [
                "app.md",
                "util.md",
                "window.md",
                "views.md",
                "commands.md",
                "storage.md",
                "clipboard.md",
                "icons.md"
            ],
            "/structures/": [
                "view-provider.md",
                "tabsview-controller.md",
                "sideview-controller.md",
                "bottomview-controller.md",
                "button-field.md",
                "context-menu-ref.md",
                "ICommand.md",
                "icon.md",
                "IKeyBindingRegister.md",
                "input-field.md",
                "MemoryStore.md",
                "menu-item.md",
                "menu-ref.md",
                "PersistantStore.md",
                "select-field.md"
            ],
            "/FAQ/": [
                "glossary.md",
                "license.md",
                "release-notes.md"
            ],
            "/tags/": [
                "api.md",
                "faq.md",
                "guide.md",
                "structures.md",
                "typescript.md",
                "javascript.md",
                "nodejs.md"
            ],
            "/snippets/": [
                "cron-example-schedule.md",
                "install-nodejs.md"
            ],
            "/all/": [
                ""
            ]
        }
    },
    configureWebpack: (config) => {
        config.resolve.alias['@public'] = path.resolve('./.vuepress/public');
        config.resolve.alias['@vuepress'] = path.resolve('./.vuepress');
        config.resolve.alias['@scripts'] = path.resolve('./scripts');
    }
    // configureWebpack: {
    //     entry: {
    //         styles: [
    //             'vuesax/dist/vuesax.css'
    //         ]
    //     }
    //     // module: {
    //     //     rules: [{
    //     //         test: /\.css$/,
    //     //         use: ExtractTextPlugin.extract({
    //     //             fallback: "style-loader",
    //     //             use: "css-loader"
    //     //         })
    //     //     }]
    //     // },
    //     // plugins: [
    //     //     new ExtractTextPlugin("styles.css")
    //     // ]
    // }
    // chainWebpack: (config) => {
    //     console.log(config);
    //     const HtmlWebpackPlugin = config.plugins.find(plugin => {
    //         return plugin.constructor.name === 'HtmlWebpackPlugin'
    //     })

    //     HtmlWebpackPlugin.options.chunksSortMode = 'none';
    //     return config;
    // }
}