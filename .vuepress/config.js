const path = require('path');

module.exports = {
    title: 'Quark',
    desctiption: 'Quark website',
    themeConfig: {
        // nav: [{
        //         text: 'Home',
        //         link: ''
        //     },
        //     {
        //         text: 'Intro',
        //         link: '/intro/'
        //     }
        // ],
        // sidebar: {
        //     '/intro/': [
        //         '',
        //         "Installation"
        //     ]
        // }
        sidebar: {
            '/introduction/': [
                ''
            ],
            '/docs/': [
                ''
            ],
            '/tutorials/': [
                ''
            ],
            '/faq/': [
                ''
            ]
        }
    },
    configureWebpack: {
        module: {
            rules: [{
                test: /\.scss$/,
                loader: 'sass-loader',
                options: {
                    includePaths: [path.resolve('node_modules')]
                }
            }]
        }
    }
}