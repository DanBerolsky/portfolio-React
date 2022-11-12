// //cuando se instala
const CACHE_STATIC_NAME = "static-v1";

const precachedAssets =[
    "https://fonts.googleapis.com/css2?family=Montserrat:wght@100&display=swap",
    "https://unpkg.com/ionicons@5.5.2/dist/ionicons/svg/star-outline.svg",
    "https://unpkg.com/ionicons@5.5.2/dist/ionicons/svg/git-branch-sharp.svg",
    "https://unpkg.com/ionicons@5.5.2/dist/ionicons/svg/link-outline.svg",
    "https://unpkg.com/ionicons@5.5.2/dist/ionicons/svg/logo-linkedin.svg",
    "https://unpkg.com/ionicons@5.5.2/dist/ionicons/svg/logo-github.svg",
    "https://unpkg.com/ionicons@5.5.2/dist/ionicons/svg/folder-open-outline.svg",
    "https://unpkg.com/ionicons@5.5.2/dist/ionicons/svg/code-sharp.svg",
    "https://unpkg.com/ionicons@5.5.2/dist/ionicons/svg/location-sharp.svg",
    "https://unpkg.com/ionicons@5.5.2/dist/ionicons/svg/mail-sharp.svg",
   "/favicon-32x32.png",
    "/manifest.json",
    "/android-chrome-192x192.png",
    "/back.png",
    "/img.avif",
    "/background-swiper.avif",
    "https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@48,400,0,0&display=swap",
    "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0&display=swap",
    "/index.html",
    "/favicon.ico",
    "/"
];
self.addEventListener("install", event=>{
    // console.log("install : /n"+event)
    const cacheProm = caches.open(CACHE_STATIC_NAME)
        .then(cache =>{

            cache.addAll(precachedAssets);
        })

      event.waitUntil(cacheProm);  
});

// //cuando se activa

// self.addEventListener("activate", event=>{
//     console.log("activate : /n"+event)
// });

// //hacer algo cuando recibe una notificacion push
// self.addEventListener("push", event=>{
//     console.log("push : /n"+event)
// });

//cuando necesita traer algo

self.addEventListener('fetch', async event=>{    
    
        // Check if this is a request for an image
        if (event.request.destination === 'image') {
          event.respondWith(caches.open(CACHE_STATIC_NAME).then((cache) => {
            // Go to the cache first
            return cache.match(event.request.url).then((cachedResponse) => {
              // Return a cached response if we have one
              if (cachedResponse) {
                return cachedResponse;
              }
      
              // Otherwise, hit the network
              return fetch(event.request).then((fetchedResponse) => {
                // Add the network response to the cache for later visits
                cache.put(event.request, fetchedResponse.clone());
      
                // Return the network response
                return fetchedResponse;
              });
            });
          }));
        } else {
          return;
        }
});

// //se recupera conexion a internet
// self.addEventListener("sync", event=>{
//     console.log("fetch : /n"+event)
// });

// //se recupera conexion a internet
// self.addEventListener("message", event=>{
//     console.log("message : /n"+event)
// });