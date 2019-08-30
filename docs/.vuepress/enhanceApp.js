import json from './routes.json';

export default ({
    Vue, // the version of Vue being used in the VuePress app
    // options, // the options for the root Vue instance
    router, // the router instance for the app
    // siteData // site metadata
}) => {
    router.addRoutes(json);
    addAnalytics(router, 'UA-112064718-3');
}

function addAnalytics(router, GA_ID) {
    if (process.env.NODE_ENV === 'production' && GA_ID && typeof window !== 'undefined') {
        (function (i, s, o, g, r, a, m) {
            i['GoogleAnalyticsObject'] = r
            i[r] = i[r] || function () {
                (i[r].q = i[r].q || []).push(arguments)
            }
            i[r].l = 1 * new Date()
            a = s.createElement(o)
            m = s.getElementsByTagName(o)[0]
            a.async = 1
            a.src = g
            m.parentNode.insertBefore(a, m)
        })(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga')

        ga('create', GA_ID, 'auto');
        ga('set', 'anonymizeIp', true);
        ga('send', 'pageview');
        console.log('up');

        router.afterEach(function (to) {
            console.log('down');
            ga('set', 'page', to.fullPath);
            ga('send', 'pageview');
        });
    }
}