import json from './routes.json';

export default ({
    Vue, // the version of Vue being used in the VuePress app
    // options, // the options for the root Vue instance
    router, // the router instance for the app
    // siteData // site metadata
}) => {
    Vue.config.ignoredElements = ['ion-icon', 'ion-button']
    console.log(router);
    router.addRoutes(json);
    // router.beforeEach((to, from, next) => {
    //     if (to.matched[0].path == '*') {
    //         if (to.fullPath.includes('#')) {
    //             const matchStr = to.path.replace(/[\/]$/, '') + '.html' + to.hash;
    //             const match = router.match(matchStr);
    //             const matchedPath = match.matched[0].path;
    //             if (matchedPath !== '*') {
    //                 next({ path: matchedPath });
    //                 return;
    //             }
    //         }
    //         next({ component: router.options.routes.reverse()[0].component });
    //     } else {
    //         next({ path: to.matched[0].path });
    //         // next({ path: to.matched[0].path});
    //     }
    // });
}