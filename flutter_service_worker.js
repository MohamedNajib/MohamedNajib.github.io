'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "6d85168016f4814f4228f583538a0b19",
"index.html": "f7bb5538e96226c23dd2eac7aae58c28",
"/": "f7bb5538e96226c23dd2eac7aae58c28",
"main.dart.js": "4e27a725574947b554b7312e755f8e2e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "997465669e8fcf23092b05984e1a82be",
".git/config": "e87e32f18b702caff096ff994646d684",
".git/objects/9b/c3dea0815212c89b554c428201a076fda6059c": "07d3dc7e09f44d52f92a319de35753c1",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/56/cb34b7f8bb9dfda46cb113ab3ed7677518d641": "e428c355ab4ee88e955cdd6288a897d4",
".git/objects/56/ea6f0d13ae8e40da3e412da67027e7a78fce9a": "9955602928d115662f6393b391cb802d",
".git/objects/93/7ea61acfabe224345e2c7fa8316d01fe1f099e": "20a5b8d1453938c9493f8acf4523f7d3",
".git/objects/0e/5edb1d7f766bcda631730e2995a4908eac5e83": "a46c8d24dacf381777bae423a362b0a7",
".git/objects/d9/513cab8f87245d11d1767a2927fe56a20e1ffd": "310d5c6f2bd23b9fd4a44aaaa29e2170",
".git/objects/b3/f5af0db54903842267b1d63d6f8821830a2529": "6cecab3a31652781dcc5d403149b2274",
".git/objects/a2/be465d08c3178d427a10b303e7f8d263ce1049": "e2427d2c844ca54ac05b5bb761f9c584",
".git/objects/ae/66b257c66038c2ab2202bae06d5e499ed26d13": "a2e6eb2946bd96532b587994c2dda8c5",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/eb/849060d856de9d552a59da7f6ecfdc00318796": "0446a5f82bc198fc3d040b3031fe8050",
".git/objects/f2/4a5ea32e354372709bb07e642feb4d691692f5": "790fa3aa78acbcdedd48a9363b5e1a50",
".git/objects/ca/af8f967e905e49cb6f47ca7ba59d24d5e15bb1": "d4823ec3ee4ce7950fb0845f5492905f",
".git/objects/c8/55935c5173c1e36f9c51618dde787ed8da7782": "9ec7d078e14b2e410540bd17a794b6e2",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/2f/01c1b4efa752462f2ff4915c0862bf167d0972": "6b82339c6fa40ddbddddbbd068df83df",
".git/objects/43/65255c4ae525f34ab348425b58ee2a8ea1176a": "0fc3b4736bffc26e2d789f352c4a20a7",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/9f/f0e914ba7b93a5184d18a455a6be3256a72425": "8f5ed074f443b43b60b47aa94e55a3d2",
".git/objects/62/72cffec3c426890675b4c53b3ed8aeeb06e984": "96f36f18a492bdd327f7db50a04a58b2",
".git/objects/30/fe4f45ff9bff0c097ec10434c24c158d3d9f7a": "ba01b90391cb125dc427f9506d657737",
".git/objects/37/16e3f352bf4e0ba47034a9e5c9ef84f296200b": "24410bd792fde92445a4a2e0c12a65d1",
".git/objects/55/3ecbfd2abc921fff592036f4cea75294298a2a": "076e8f7434d7a680903db088ea9be655",
".git/objects/64/8e166e654b8f18d3b983a592f456cf9fa7d555": "027d96438f36c79a881d42da988c1341",
".git/objects/bf/e45dc094daa82db500a17cd4f32b237bfaba76": "91084600a6d8731f6a8090bfe798237d",
".git/objects/b8/ffdb9421a001e675570c953652fde7e24e3610": "b9b46015c6c33cd16f37901d8d8f8633",
".git/objects/dc/aea44f6690db7d10d47433d0eb829c36580ce9": "8734e90d1d01d1c84b19080e43f082e8",
".git/objects/b6/d74ed398d44a39fb7c7f00c19b2944892386ca": "50f58ed663323241858b4c21161c0f46",
".git/objects/b6/b6031ddde99742464e5f173a8e0139c1d98230": "d1d3fd3b4fb1e0d15094d92257a0e138",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/b0/8daed7925ad2606d84ddc0d34e8604bbc7813d": "e2ba08531f64b82ceb715c0b8d7d6db9",
".git/objects/a6/2f0744f9bd636ba1a55eea017fbd29ebd83cb5": "74f55d85cdf30e7c8504a7af2962fc74",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/cc/822cabe98e4b5d51653208e85339f1fc16cd71": "f9df2409533516e662c8d46e2aa43d19",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/84/911a8c44bc3b381a3c88bbddd4ec550fac15e7": "961ffb72ba2ed7a08b891d5fd26b872b",
".git/objects/84/bc3c868df35b7481a63055bf9bc317392c912a": "29c5bd6b0899994eb15139d791a30ff7",
".git/objects/23/da0de52b8727044a642a6bf1ac19e2db0f9fa5": "520e8d20a9c00ab360fcb80d36c91954",
".git/objects/49/730bbefd275f725f982d8427e345fa58050d9d": "5efce8a90ffb3b9474647c9bff8a2ba3",
".git/objects/40/59b2f43d51119e8c4b2859b7f5d9fa1739f55f": "5916d9a3db1b8943d867b8167394fa28",
".git/objects/7f/eb38211aff2974ad3ed87bef0fb5bd8a21fc4f": "6a6e1a404333c5fcbb298cf8f99800a7",
".git/objects/7a/8d0cb0923cfeb991654b8e5e6f662c7e7c99ca": "bf329dd6589288c2d46515ae5a4a6b04",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "28e8dd9c8635d0a1a069d45e9530dd59",
".git/logs/refs/heads/main": "7b470d78ce8e4ea387b2d5af207c7628",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "cb9188fc789433466a847d7514e1a322",
".git/index": "c731b6ae85d6dfa83d14d9d7c830bf83",
".git/COMMIT_EDITMSG": "14526ce701b71a6d979bc8d227edfb2a",
"assets/AssetManifest.json": "fc43885b2adbdc217b8562490fd6ee66",
"assets/NOTICES": "22e3038a1ccb1f1102ddac1c96d013e4",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/assets/images/home_image.svg": "3b832794c47c6888e20f218e005c02e0",
"assets/assets/images/logooo.svg": "1eb63f9e17f09a54db9f0388378e29c9",
"assets/assets/images/s13.jpg": "59e53b28183dcadcfae5f156f2f41282",
"assets/assets/images/s6.jpg": "e8e27bbcdfc9cfdc0d80d543dcec10e8",
"assets/assets/images/logo_text.png": "5292be5ca4d0a56b8b1250052d105595",
"assets/assets/images/s7.jpg": "bea72d8641d6d0d4c13bd9f5123292a9",
"assets/assets/images/s12.jpg": "2153baaea5669f8f49ddef0b720dfbf4",
"assets/assets/images/s10.jpg": "52bef400f920cc451c002d7bab8f4b0a",
"assets/assets/images/s5.jpg": "fa3fe22457361438cd29190b9a49b6ee",
"assets/assets/images/s4.jpg": "8c8a25ecd58ec507f68fd5ff08084f9d",
"assets/assets/images/s11.jpg": "a0302a85a7857c67ad5bf1e70c6a5b0b",
"assets/assets/images/dashboard.svg": "8ec4a42b779286b3ffdcd6fca9325d9c",
"assets/assets/images/s1.jpg": "f562d0426952290085bd23ac1cdf3da4",
"assets/assets/images/s14.jpg": "d0152b800c7508cd5f7cc0994ba31741",
"assets/assets/images/s3.jpg": "5f615af003a836adb5af850c059b4c1c",
"assets/assets/images/groupba.svg": "52de61b84abcc4124bd5268579d02b8e",
"assets/assets/images/news.svg": "f9873ba6b4cb398e838e03c0cfb28ce3",
"assets/assets/images/s2.jpg": "b9ced23309051f3d13c73858bc854189",
"assets/assets/images/groupb.svg": "09dc0ccbf06474e47c3c73f0f245df13",
"assets/assets/images/background_one.svg": "4149320a834d53b9897e22722f2f59c8",
"assets/assets/images/logo.png": "2356442f9a609f09e1657e146a4ff16a",
"assets/assets/images/s9.jpg": "536355b445d12b8401398dcd5cfe2e5f",
"assets/assets/images/s8.jpg": "1e1beb83fc7842124811af666e8fa67a",
"assets/assets/images/responsive.svg": "f8292521c3146bc1bd9758c34e55e1fa",
"assets/assets/images/contuct.svg": "c48ddc8673d5d59c7371116d9337f0dd",
"assets/assets/images/w4.png": "fcc652741bd2ec56bf02d768103419a4",
"assets/assets/images/w2.png": "473dbb033326540750c10af2890a62d7",
"assets/assets/images/lll.png": "a939a6b0a63a8a7ba1e6bf35db88743f",
"assets/assets/images/w3.png": "36ef21901809319cd23b4638baacc49f",
"assets/assets/images/w1.png": "8cb52700da89e52918e3a51af8cc355b",
"assets/assets/icons/dashboard.svg": "9c5fe0c09af16eef8c85099bb0f8950f",
"assets/assets/icons/customise.svg": "e8330b7451156b01d9ed90f2f9741042",
"assets/assets/icons/awesome.svg": "55c3322982dcf1fd481688af92204042",
"assets/assets/icons/notification.svg": "84fd0abe8398e3efa73773b47bc78654",
"assets/assets/icons/fast.svg": "57c8771dc853ee96179e4843fdfaa736",
"assets/assets/icons/security.svg": "13c117f5a5641e1d192afb58f73adcd6",
"assets/assets/icons/mobile.svg": "eefd4f6fbe6b324effdb66d6fda996f6",
"assets/assets/icons/web.svg": "f477b3c6889a7c484b8fc67a94a39a93",
"assets/assets/icons/logo.svg": "146571c56d84348d892176e7614956a7",
"assets/assets/icons/resolution.svg": "3c671af46cbbd8e2de7693857eb86910"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
