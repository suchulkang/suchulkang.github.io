'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "2da6fdeed0ba00c384db0467068a3836",
"version.json": "64cb0ce389656c2c375e57572a043641",
"page.html": "f1034f5cc0be1135b3693735d8f71507",
"index.html": "aa9189db0334fd9b683885f398951b1f",
"/": "aa9189db0334fd9b683885f398951b1f",
"page-2.html": "577c1f93abd75a2804b67c0bb4893de1",
"main.dart.js": "dd809d23be9af0d178065cfa2a24118a",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"heavy-page.html": "5899f77e2d2e05a8802c46b05f1131de",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "f99b214e27c85ea9645a75fbece792dd",
"assets/AssetManifest.json": "8c909b23904c665548c365d8cbfa44e5",
"assets/NOTICES": "59c1ac7cb582669506247ed3d4808696",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "b7810822b31a389785e043af974737a1",
"assets/test_assets/in_app_webview_on_js_dialog_test.html": "e2df0b14663fe3ba5dd84d10a0317e57",
"assets/test_assets/favicon.ico": "b0f49950ec27065178be8681928abd67",
"assets/test_assets/index.html": "07729aad2a9f2cced4f6ba0c6fcb500a",
"assets/test_assets/in_app_webview_on_load_resource_test.html": "208974545e91b2a028f1d1c401f37440",
"assets/test_assets/in_app_webview_javascript_handler_test.html": "acf8c67957a7a2a03f8ef579ae90259d",
"assets/test_assets/in_app_webview_on_create_window_test.html": "bc4a032ddf5b43aa1eecf613f5d94938",
"assets/test_assets/page-2.html": "bbbd986e0dae8583735523e7032d1005",
"assets/test_assets/css/blue-body.css": "bd0cf1ebb7dfca788b0c056cc51a353e",
"assets/test_assets/css/style.css": "8e82bce999c201e60b94319a63b2065f",
"assets/test_assets/images/flutter-logo.jpg": "45fa0cfd2359503341f32426e0a7d7c8",
"assets/test_assets/images/flutter-logo.png": "db4cc128f2888e7211d72884dbba0bb1",
"assets/test_assets/images/flutter-logo.svg": "987d1289362415a69ac6c7db358b34b5",
"assets/test_assets/js/jquery-3.3.1.min.js": "4b57cf46dc8cb95c4cca54afc85e9540",
"assets/test_assets/website/index.html": "8282b0f5fc7d9e53f5e98b710dc02b8a",
"assets/test_assets/certificate.pfx": "e12be121ec9adaf1612e576509953ca7",
"assets/test_assets/in_app_webview_on_console_message_test.html": "eb28ee55c13daba76c78bc34fdf98742",
"assets/test_assets/in_app_webview_on_load_resource_custom_scheme_test.html": "444f422f9deac7959e412f57759da107",
"assets/test_assets/sample_video.mp4": "59b8487da4236b3d42890fedab86ac64",
"assets/test_assets/in_app_webview_initial_file_test.html": "4f551790bae7b9385e010589143fb595",
"assets/test_assets/page-1.html": "0b84ca5fa65dcac642c70ac71267b989",
"assets/test_assets/in_app_webview_on_js_before_unload.html": "a903fe71186f856ed861c280e1a3d196",
"assets/test_assets/sample_audio.ogg": "40caac19d6c5282173d12a1793d4b845",
"assets/test_assets/in_app_webview_on_navigation_state_change_test.html": "dad645e52e7c53539e698de040f864a1",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/flutter_inappwebview_web/assets/web/web_support.js": "ffd063c5ddbbe185f778e7e41fdceb31",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "a343dd72159fc64599b8283d77aaaf25",
"assets/fonts/MaterialIcons-Regular.otf": "a3f0577d0595557e94ec39e44395aa8b",
"assets/assets/favicon.ico": "b0f49950ec27065178be8681928abd67",
"assets/assets/index.html": "7600760c0093fa2b4ef05cf3ff1d7d1c",
"assets/assets/page-2.html": "bbbd986e0dae8583735523e7032d1005",
"assets/assets/css/style.css": "8e82bce999c201e60b94319a63b2065f",
"assets/assets/images/flutter-logo.jpg": "45fa0cfd2359503341f32426e0a7d7c8",
"assets/assets/images/flutter-logo.png": "db4cc128f2888e7211d72884dbba0bb1",
"assets/assets/images/flutter-logo.svg": "987d1289362415a69ac6c7db358b34b5",
"assets/assets/js/main.js": "d89713073d5de11295fe75c396f2bc97",
"assets/assets/website/index.html": "8282b0f5fc7d9e53f5e98b710dc02b8a",
"assets/assets/web-auth.html": "b9e28488e90216ad8f94f9a4ba0e89a1",
"assets/assets/sample_video.mp4": "59b8487da4236b3d42890fedab86ac64",
"assets/assets/page-1.html": "0b84ca5fa65dcac642c70ac71267b989",
"assets/assets/sample_audio.ogg": "40caac19d6c5282173d12a1793d4b845",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
