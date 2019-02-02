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
        sidebar: {
            '/introduction/': [{
                title: 'Introduction'
            }],
            '/docs/': [{
                title: 'Docs',
                children : [
                    'api-references'
                ]
            }],
            '/tutorials/': [
                ''
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