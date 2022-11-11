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
    const url = new URL(event.request.url);
    const isPrecachedRequest = precachedAssets.includes(url.pathname);
    
    if(isPrecachedRequest){
        event.respondWith(caches.open(CACHE_STATIC_NAME).then((cache) => {
            return cache.match(event.request.url);
          }));
        } else {
          // Go to the network
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