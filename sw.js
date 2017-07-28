/* eslint-disable no-console */

'use strict';

let appCaches = [{
    name: 'static',
    urls: [
        '/app/',
        '/'
    ]
}, {
    name: 'offline',
    urls: [
        '/offline.html'
    ]
}];

let cacheNames = appCaches.map((cache) => cache.name);

self.addEventListener("install", (event) => {
    // console.log('installing');
    event.waitUntil(
        caches.keys()
        .then((keys) => {
            return Promise.all(appCaches.map((appCache) => {
                console.log(`cache Name:: ${appCache.name}`);
                console.log(`keys:: ${keys}`);
                if (keys.indexOf(appCache.name) === -1) {
                    caches.open(appCache.name).then((cache) => {
                        console.log(`caching ${appCache.name}`);
                        return cache.addAll(appCache.urls);
                    });
                } else {
                    console.log(`found ${appCache.name}`);
                    return Promise.resolve(true);
                }
            })).then(function() {
                // At this point everything has been cached
                return self.skipWaiting();
            });
        }));
});


//Adding `activate` event listener
self.addEventListener('activate', (event) => {
    // console.info('Event: Activate');
    //Remove old and unwanted caches
    event.waitUntil(
        caches.keys().then((keys) => {
            return Promise.all(keys.map((key) => {
                console.log(`activation checking key ${key}`);
                if (cacheNames.indexOf(key) === -1) {
                    console.log(`deleting ${key}`);
                    return caches.delete(key);
                }
            }));
        })
    );
});

//-------------------------------------------------------------------
function addToCache(cacheKey, request, response) {
    console.log("addToCache", arguments);
    if (response.ok) {
        var copy = response.clone();
        caches.open(cacheKey).then((cache) => {
            cache.put(request, copy);
        });
        return response;
    }
}

function fetchFromCache(event) {
    console.log("fetchFromCache", arguments);
    return caches.match(event.request).then((response) => {
        if (!response) {
            // A synchronous error that will kick off the catch handler
            throw Error('${event.request.url} not found in cache');
        }
        return response;
    });
}

function offlineResponse(resourceType) {
    console.log("%c offlineResponse::resourceType::" + resourceType, 'color:green');
    if (resourceType === 'content') {
        return caches.match('/offline.html');
    }
    return undefined;
}

self.addEventListener('fetch', (event) => {
    var request = event.request;
    var url = new URL(request.url);
    console.log("%curl=>" + url, 'color:red');
    var acceptHeader = request.headers.get('Accept');
    var resourceType = 'static';
    var cacheKey;

    if (acceptHeader.indexOf('text/html') !== -1) {
        resourceType = 'content';
    } else if (acceptHeader.indexOf('image') !== -1) {
        resourceType = 'image';
    }

    // {String} [static|image|content]
    cacheKey = resourceType;

    if (request.method !== 'GET') {
        return;
    } else {
        console.log("resourceType=>", cacheKey);
        if (resourceType === 'content') {
            // Use a network-first strategy.
            console.info("Use a network-first strategy.");
            event.respondWith(
                fetch(request)
                .then((response) => addToCache(cacheKey, request, response))
                .catch(() => fetchFromCache(event))
                .catch(() => offlineResponse(resourceType))
            );
        } else {
            // Use a cache-first strategy.
            console.info("Use a cache-first strategy.");
            event.respondWith(
                fetchFromCache(event)
                .catch(() => fetch(request))
                .then((response) => addToCache(cacheKey, request, response))
                .catch(() => offlineResponse(resourceType))
            );
        }
    }
});