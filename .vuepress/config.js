const path = require('path');

module.exports = {
    title: 'Quark',
    desctiption: 'IoT Framework',
    serviceWorker: true,
    themeConfig: {
        logo: '/images/icon.png',
        editLinks: true,
        repoLabel: 'Contribute',
        repo: 'https://github.com/Nishkalkashyap/Quark-docs',
        lastUpdated: 'Last Updated',
        ga: 'UA-112064718-3',
        serviceWorker: {
            updatePopup: true
        },
        nav: [{
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
                'window',
                'app',
                'views'
                // {
                //     title: 'Views',
                //     collapsable: false,
                //     children: [
                //         'views'
                //     ]
                // }
            ],
            '/structures/': [
                'sideview-controller',
                'bottomview-controller',
                'tabsview-controller',
                'view-provider',
            ]
        }
    },
    // configureWebpack: {
    //     module: {
    //         rules: [{
    //             test: /\.css$/,
    //             loader: 'css-loader'
    //         }]
    //     }
    // }
}