const path = require('path');

module.exports = {
    title: 'Quark',
    desctiption: 'IoT Framework',
    serviceWorker: true,
    themeConfig: {
        editLinks: true,
        repoLabel: 'Contribute!',
        repo: 'Github',
        lastUpdated: 'Last Updated',
        serviceWorker: {
            updatePopup: true
        },
        nav: [{
                text: 'References',
                link: '/references/'
            },
            {
                text: 'Guide',
                link: '/guide/'
            },
            {
                text: 'External',
                link: 'https://google.com'
            }
        ],
        sidebar: {
            '/docs/': [{
                title: 'Docs',
                collapsable: false,
                children: [
                    'api-references'
                ]
            }],
            '/references/': [
                '',
                ['window', 'Window'],
                ['views', 'Views'],
                ['app', 'App'],
            ],
            '/faq/': [
                ''
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