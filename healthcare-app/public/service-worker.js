// public/service-worker.js
self.addEventListener('install', (event) => {
    event.waitUntil(
      caches.open('static-cache').then((cache) => {
        return cache.addAll([
          '/',
          '/_next/static/css/styles.chunk.css',
          '/_next/static/js/bundle.js',
          // Add other assets here
        ]);
      })
    );
  });
  
  self.addEventListener('fetch', (event) => {
    event.respondWith(
      caches.match(event.request).then((response) => {
        return response || fetch(event.request);
      })
    );
  });
  