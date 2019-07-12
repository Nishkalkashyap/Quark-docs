<template>
<div class="hero-features-component">
    <div style="text-align:center;margin-top:150px">
        <h1>Everything you would expect</h1>
        <div class="features-container">
            <div class="feature" v-for="feature in features">
                <div class="svg" v-html="feature.svg" v-if="feature.svg"></div>
                <h3>{{feature.heading}}</h3>
                <p>{{feature.text}}</p>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            features: [{
                    svg: require('!!svg-inline-loader!./../../buildAssets/landing-page-svgs/key-binding.svg'),
                    heading: 'Keybindings and Quick Actions',
                    text: `Use Keybindings and Quick Actions to execute commonly used actions more quickly.`
                },
                {
                    svg: require('!!svg-inline-loader!./../../buildAssets/landing-page-svgs/configuration-ui.svg'),
                    heading: 'Settings and UI',
                    text: `We show a UI for configuration files and settings so you don't have to look up how the configuration is structured.`
                },
                {
                    svg: require('!!svg-inline-loader!./../../buildAssets/landing-page-svgs/monaco-editor.svg'),
                    heading: 'Monaco Editor',
                    text: `We use the same editor as VSCode, which gives us "Go to Definition", "Replace Occurences" and more!`
                },
                {
                    svg: require('!!svg-inline-loader!./../../buildAssets/landing-page-svgs/error-overlay.svg'),
                    heading: 'Friendly Errors',
                    text: `We show a user friendly error overlay for every error, sometimes with suggestions on how to solve it.`
                },
                {
                    svg: require('!!svg-inline-loader!./../../buildAssets/landing-page-svgs/typescript.svg'),
                    heading: 'TypeScript',
                    text: 'Thanks to Monaco Editor we have out of the box support for Typescript autocompletions and diagnostics.'
                },
                {
                    svg: require('!!svg-inline-loader!./../../buildAssets/landing-page-svgs/integrated-terminal.svg'),
                    heading: 'Integrated Terminal',
                    text: 'The integrated terminal stays in the bottom of your editor while you work, making it super convenient to use.'
                },
                {
                    svg: require('!!svg-inline-loader!./../../buildAssets/landing-page-svgs/webpack-build.svg'),
                    heading: 'Webpack Build',
                    text: 'Behind the scenes we use webpack to build your projects.'
                },
                {
                    svg: require('!!svg-inline-loader!./../../buildAssets/landing-page-svgs/npm-support.svg'),
                    heading: 'Npm client',
                    text: 'Explore and install almost any of the 900,000 packages listed on the npm repository, with the inbuilt graphical npm client.'
                },
                {
                    svg: require('!!svg-inline-loader!./../../buildAssets/landing-page-svgs/cross-platform.svg'),
                    heading: 'Cross Platform',
                    text: 'Quark works across operating systems. Use it on OS X, Windows, or Linux.'
                },
                {
                    svg: require('!!svg-inline-loader!./../../buildAssets/landing-page-svgs/multiple-themes.svg'),
                    heading: 'Multiple Themes',
                    text: 'Quark comes pre-installed with some of the most common light and dark themes for code editors. Take your pick!'
                },
                {
                    svg: require('!!svg-inline-loader!./../../buildAssets/landing-page-svgs/web-technologies.svg'),
                    heading: 'Web Technologies',
                    text: 'Build applications using your existing knowledge of HTML, CSS and JavaScript.'
                },
                {
                    svg: require('!!svg-inline-loader!./../../buildAssets/landing-page-svgs/control-hardware.svg'),
                    heading: 'Control Hardware',
                    text: 'Use with Arduino or Raspberry Pi to create beautiful dashboards and control systems.'
                },
                {
                    svg: require('!!svg-inline-loader!./../../buildAssets/landing-page-svgs/find-and-replace.svg'),
                    heading: 'Find and replace',
                    text: 'Find, preview, and replace text as you type in a file or across all your projects.'
                },
                {
                    svg: require('!!svg-inline-loader!./../../buildAssets/landing-page-svgs/smart-autoCompletion.svg'),
                    heading: 'Smart autocompletion',
                    text: 'Quark helps you write code faster with a smart and flexible autocomplete.'
                },
                {
                    svg: require('!!svg-inline-loader!./../../buildAssets/landing-page-svgs/under-the-hood.svg'),
                    heading: 'Under the hood',
                    text: 'Quark is a desktop application built with web technologies. It runs on Electron, a framework for building cross platform apps using web technologies.'
                },
                {
                    svg: require('!!svg-inline-loader!./../../buildAssets/landing-page-svgs/nodejs.svg'),
                    heading: 'Nodejs',
                    text: 'Your projects have access to all the powers of Node.js. Think of anything you can do with node, you can do here!'
                }
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
h1 {
    padding: 15px 20px;
    display: inline-block;
    border-radius: 4px;
    font-size: 36px !important;
    text-align: center;
    box-shadow: 0 20px 30px rgba(0, 0, 0, 0.5);
    max-width: calc(100% - 100px);
    box-sizing: border-box;
}

@media only screen and (max-width: 600px) {
    h1 {
        font-size: 28px !important;
    }
}

.features-container {
    display: flex;
    flex-wrap: wrap;
    max-width: 1260px;
    padding: 20px;
    justify-content: space-around;
    text-align: initial;
    margin-bottom: 100px;

    .feature {
        min-width: 340px;
        width: calc(33% - 60px);
        padding: 10px 20px;
        margin: 10px 20px;
        display: inline-block;
        box-sizing: border-box;
        border-radius: 5px;
        box-shadow: 0 20px 30px rgba(0, 0, 0, 0.5);
        transition: transform 0.2s;

        h3 {
            padding-top: 0px !important;
            margin-top: 15px !important;
            margin-bottom: 15px !important;
        }

        .svg {
            width: 32px;
            margin-top: 15px !important;
        }
    }

    .feature:hover {
        transform: translateY(-5px);
    }
}
</style>
