importScripts('https://storage.googleapis.com/workbox-cdn/releases/5.1.2/workbox-sw.js');

if (workbox) {
    console.log('Yeah ! Workbox is loaded');
} else {
    console.log ('Pas de chance');
}
const {ExpirationPlugin} = workbox.expiration;
const {registerRoute} = workbox.routing;
const {StaleWhileRevalidate} = workbox.strategies;
const {CacheableResponsePlugin} = workbox.cacheableResponse;
const {CacheFirst} = workbox.strategies;
//const {ExpirationPlugin} = workbox.expiration;

registerRoute(
    ({url}) => url.origin === 'https://fonts.googleapis.com' ||
               url.origin === 'https://fonts.gstatic.com',
    new StaleWhileRevalidate({
        cacheName: 'google-fonts',
        plugins: [
            new ExpirationPlugin({maxEntries:20}),
        ],
    }),
);



registerRoute(
    ({request}) =>  request.destination === 'document' ||
                    request.destination === 'script'   ||
                    request.destination === 'style',
    new StaleWhileRevalidate({cacheName: 'cache-files'})
);



registerRoute(
    ({request}) =>  request.destination === 'image',
new CacheFirst({
    cacheName: 'images',
    plugins: [
        new ExpirationPlugin({
            maxEntries: 10,
            maxAgeSeconds: 30 * 24 * 60 * 60,
        }),
    ],
}),
);