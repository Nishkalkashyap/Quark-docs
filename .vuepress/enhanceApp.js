// import {
//     vsButton
// } from 'vuesax';
// import 'vuesax/dist/vuesax.css';
// import '!!style-loader!css-loader!vuesax/dist/vuesax.css';

// import '@ionic/core/dist/ionic.js';

export default ({
    Vue, // the version of Vue being used in the VuePress app
    // options, // the options for the root Vue instance
    // router, // the router instance for the app
    // siteData // site metadata
}) => {
    Vue.config.ignoredElements = ['ion-icon', 'ion-button']
    // const conf = {
    //     server: true,
    //     theme: {
    //         colors: {
    //             primary: '#007acc',
    //             success: 'rgb(23, 201, 100)',
    //             danger: 'rgb(242, 19, 93)',
    //             warning: 'rgb(255, 130, 0)',
    //             dark: 'rgb(36, 33, 69)'
    //         }
    //     }
    // }
    // Vue.use(vsButton, conf);
}