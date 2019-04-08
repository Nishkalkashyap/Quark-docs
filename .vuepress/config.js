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
            })
        }
    },
    themeConfig: {
        logo: '/images/icon.png',
        editLinks: true,
        repoLabel: 'GitHub',
        repo: 'https://github.com/Nishkalkashyap/Quark-docs',
        lastUpdated: 'Last Updated',
        serviceWorker: {
            updatePopup: true
        },
        nav: [{
                text: 'Guide',
                link: '/guide/intro.html'
            },
            {
                text: 'References',
                link: '/references/app.html'
            },
            {
                text: 'Structures',
                link: '/structures/bottomview-controller.html'
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
                    }
                ]
            }
        ],
        sidebar: {
            "/guide/": [
                "examples.md",
                "getting-started.md",
                "intro.md",
                "quark-ide.md",
                "user-interface.md"
            ],
            "/references/": [
                "app.md",
                "clipboard.md",
                "commands.md",
                "icons.md",
                "util.md",
                "views.md",
                "window.md"
            ],
            "/structures/": [
                "bottomview-controller.md",
                "button-field.md",
                "context-menu-ref.md",
                "icon.md",
                "IKeyBindingRegister.md",
                "input-field.md",
                "menu-item.md",
                "menu-ref.md",
                "select-field.md",
                "sideview-controller.md",
                "tabsview-controller.md",
                "view-provider.md"
            ],
            "/FAQ/": [
                "glossary.md"
            ]
        }
    },
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