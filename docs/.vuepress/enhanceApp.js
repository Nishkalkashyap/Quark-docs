import json from './routes.json';
import addAnalytics from './analytics';

export default ({
    Vue, // the version of Vue being used in the VuePress app
    // options, // the options for the root Vue instance
    router, // the router instance for the app
    // siteData // site metadata
}) => {
    router.addRoutes(json);
    addAnalytics(router, 'UA-112064718-3');
}