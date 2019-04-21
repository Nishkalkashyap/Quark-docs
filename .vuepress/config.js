module.exports = {
    title: 'Quark',
    desctiption: 'IoT Framework',
    ga: 'UA-112064718-3',
    serviceWorker: true,
    head: [
        ['script', {}, `
                (function(h,o,t,j,a,r){
                    h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
                    h._hjSettings={hjid:1226062,hjsv:6};
                    a=o.getElementsByTagName('head')[0];
                    r=o.createElement('script');r.async=1;
                    r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
                    a.appendChild(r);
                })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
        `],
        ['link', {
            href: 'https://fonts.googleapis.com/icon?family=Material+Icons',
            rel: 'stylesheet'
        }],
        ['script', {
            src: '/assets/anime.min.js',
            type: 'text/javascript'
        }]
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
                text: 'API',
                items: [{
                        text: 'References',
                        link: '/references/app.html'
                    }, {
                        text: 'Structures',
                        link: '/structures/view-provider.html'
                    },
                    // {
                    //     text: 'Style Guide',
                    //     link: '/guide/intro.html'
                    // }
                ]
            },
            {
                text: 'Download',
                link: '/download/'
            },
            {
                text: 'More',
                items: [{
                        text: 'FAQ',
                        link: '/FAQ/glossary.html'
                    },
                    {
                        text: 'Social',
                        link: 'https://social.quarkjs.io/'
                    },
                    {
                        text: 'GitHub',
                        link: 'https://github.com/Nishkalkashyap/Quark-docs'
                    }
                ]
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
                "release-notes.md",
                "license.md"
            ]
        }
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