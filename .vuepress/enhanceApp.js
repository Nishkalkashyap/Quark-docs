import json from './routes.json';

export default ({
    Vue, // the version of Vue being used in the VuePress app
    // options, // the options for the root Vue instance
    router, // the router instance for the app
    // siteData // site metadata
}) => {
    Vue.config.ignoredElements = ['ion-icon', 'ion-button']
    router.addRoutes(json);
}