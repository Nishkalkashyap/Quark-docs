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

workbox.routing.registerRoute(
    /^https:\/\/google-analytics\.com/,
    new workbox.strategies.StaleWhileRevalidate({
        cacheName: 'google-analytics',
    })
);

workbox.routing.registerRoute(
    /^https:\/\/static\.hotjat\.com/,
    new workbox.strategies.StaleWhileRevalidate({
        cacheName: 'hotjar',
    })
);

// imgur images
workbox.routing.registerRoute(
    /^https:.*imgur.*\.(png|jpg|jpeg|gif)$/,
    new workbox.strategies.StaleWhileRevalidate({
        cacheName: 'imgur-images',
        plugins: [
            new workbox.cacheableResponse.Plugin({
                statuses: [200],
            }),
            new workbox.expiration.Plugin({
                maxAgeSeconds: 60 * 60 * 24 * 7,
                maxEntries: 30,
            })
        ]
    })
);

// imgur videos
workbox.routing.registerRoute(
    /^https:.*imgur.*\.(mp4)$/,
    new workbox.strategies.StaleWhileRevalidate({
        cacheName: 'imgur-videos',
        plugins: [
            new workbox.cacheableResponse.Plugin({
                statuses: [200],
            }),
            new workbox.rangeRequests.Plugin(),
            new workbox.expiration.Plugin({
                maxAgeSeconds: 60 * 60 * 24 * 7,
                maxEntries: 30,
            })
        ]
    })
);

// https://developers.google.com/web/tools/workbox/guides/advanced-recipes#cached-av
workbox.routing.registerRoute(
    // new RegExp('.(mp4)$'),
    // /.*\.mp4/,//
    /.*quarkjs.*\.mp4/,//
    new workbox.strategies.CacheFirst({
        cacheName: 'videos',
        plugins: [
            new workbox.cacheableResponse.Plugin({ statuses: [200] }),
            new workbox.rangeRequests.Plugin(),
        ],
    })
);