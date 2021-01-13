const staticCacheName = 'site-static-v6';
const assets = [
    './',
    './index.html',
    './about.html',
    './js/app.js',
    './js/materialize.min.js',
    './css/styles.css',
    './css/materialize.min.css',
    './img/t2.png',
];

// install sw
self.addEventListener('install', evt => {
    // console.log('sw has been installed');
    evt.waitUntil(
        caches.open(staticCacheName).then((cache) => {
            console.log('caching shell assets');
            cache.addAll(assets);

        })
    );
});

// activate event
self.addEventListener('activate', evt => {
    // console.log('sw has been activated');
    evt.waitUntil(
        caches.keys().then(keys => {
            // console.log(keys);
            return Promise.all(keys
                .filter(key => key !== staticCacheName)
                .map(key => caches.delete(key))
            )
        })
    )
});

//fetch event
self.addEventListener('fetch', evt => {
    // console.log('fetch event', evt);
    evt.respondWith(
        caches.match(evt.request).then(cachesRes => {
            return cachesRes || fetch(evt.request);
        })
    );
});