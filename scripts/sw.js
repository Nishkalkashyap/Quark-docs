workbox.routing.registerRoute(
    /^https:\/\/fonts\.gstatic\.com/,
    new workbox.strategies.CacheFirst({
        cacheName: 'google-fonts-webfonts',
        plugins: [
            new workbox.cacheableResponse.Plugin({
                statuses: [200],
            }),
            new workbox.expiration.Plugin({
                maxAgeSeconds: 60 * 60 * 24 * 365,
                maxEntries: 30,
            }),
        ],
    })
);

workbox.routing.registerRoute(
    new RegExp('/__/'),
    new workbox.strategies.StaleWhileRevalidate({
        cacheName: 'firebase',
    })
);

// https://developers.google.com/web/tools/workbox/guides/advanced-recipes#cached-av
workbox.routing.registerRoute(
    // new RegExp('.(mp4)$'),
    /.*\.mp4/,//
    new workbox.strategies.CacheFirst({
        cacheName: 'videos',
        plugins: [
            new workbox.cacheableResponse.Plugin({ statuses: [200, 206] }),
            new workbox.rangeRequests.Plugin(),
        ],
    })
);