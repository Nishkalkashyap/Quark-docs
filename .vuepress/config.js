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
`]
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
        repoLabel: 'Contribute',
        repo: 'https://github.com/Nishkalkashyap/Quark-docs',
        lastUpdated: 'Last Updated',
        serviceWorker: {
            updatePopup: true
        },
        nav: [{
                text: 'Guide',
                link: '/guide/'
            },
            {
                text: 'References',
                link: '/references/'
            },
            {
                text: 'Structures',
                link: '/structures/'
            },
            {
                text: 'Download',
                link: '/download/'
            },
            // {
            //     text: 'External',
            //     link: 'https://google.com'
            // }
        ],
        // sidebar : 'auto'
        sidebar: {
            '/docs/': [{
                title: 'Docs',
                collapsable: false,
                children: [
                    'api-references'
                ]
            }],
            '/references/': [
                'app',
                'clipboard',
                'commands',
                'icons',
                'util',
                'views',
                'window',
                // {
                //     title: 'Views',
                //     collapsable: false,
                //     children: [
                //         'views'
                //     ]
                // }
            ],
            '/structures/': [
                'bottomview-controller',
                'button-field',
                'context-menu-ref',
                'icon',
                'IKeyBindingRegister',
                'input-field',
                'menu-item',
                'menu-ref',
                'select-field',
                'sideview-controller',
                'tabsview-controller',
                'view-provider',
            ],
            '/guide/': [
                'examples.md',
                'getting-started.md',
                'quark-ide.md',
                'user-interface.md'
            ]
        }
    },
    // configureWebpack: {
    //     mode: 'production',
    //     // module: {
    //     //     rules: [{
    //     //         test: /\.css$/,
    //     //         loader: 'css-loader'
    //     //     }]
    //     // }
    // }
}