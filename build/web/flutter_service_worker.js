'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"version.json": "fce75c7f8022795bf806aa71668a2f85",
"manifest.json": "8e3363ee710c97ed3d8b934f138ea280",
"img/splash.png": "1d1186a96a58185fc773b0e14749dc98",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/FontManifest.json": "0feac677128640ff34fe2c5190538b90",
"assets/AssetManifest.bin": "4cb888becd1c4689f20545bfaf6c0c2c",
"assets/assets/images/logo/logo_icon_dark.png": "c7765cfb1bb600132e0e4ecab55832d8",
"assets/assets/images/logo/logo.svg": "a7e200120c87ba6eeb2df057a275bee6",
"assets/assets/images/logo/ethereum-eth-logo.png": "3a3285881789dc8b524b6e5b42012460",
"assets/assets/images/shopping_images/photo1.jpg": "d7ccb15a6ac4a586de43396666b7ca4a",
"assets/assets/images/shopping_images/photo5.jpg": "1c7ce8a95fc4a2a29a4fce133fc52cd2",
"assets/assets/images/shopping_images/photo8.jpg": "769c3311613d4461e7c22459432e1feb",
"assets/assets/images/shopping_images/photo9.jpg": "78fef162169dda6d15a8aee167ea1886",
"assets/assets/images/shopping_images/photo2.jpg": "99489ec91adec6d10137fb53b97f21b9",
"assets/assets/images/shopping_images/photo6.jpg": "6985d3fa6da41659bbdaccb703667504",
"assets/assets/images/shopping_images/photo7.jpg": "79602126e2d2a5b12f614894e6bdcc3b",
"assets/assets/images/shopping_images/photo3.jpg": "b1e140c7006154228c9e1ff678c6abde",
"assets/assets/images/shopping_images/photo10.jpg": "a07db3d53b2d50c858ecd33832006cb2",
"assets/assets/images/shopping_images/photo4.jpg": "6f54fc8b30c28629ac6a91c13512753a",
"assets/assets/images/food/fruit_juice.jpg": "851bc16633d0eced234ac83ef230374b",
"assets/assets/images/food/veggies.jpg": "a503d8b5cfa2bd09915ba553fd335037",
"assets/assets/images/food/fruits.jpg": "7c0e358d7948db33ea8029ae2265d67c",
"assets/assets/images/dummy/m4.jpg": "4d48509b2c0ef880d388cf7c27e1ab64",
"assets/assets/images/dummy/l4.jpg": "6e61e33609a76e1c425668e73dce7157",
"assets/assets/images/dummy/nft.jpg": "911042dcfe776a05e8427a11da8c98f5",
"assets/assets/images/dummy/avatar-2.jpg": "8d832f19a264711a804b1f0ff599e0ae",
"assets/assets/images/dummy/login6.jpg": "b3028101973b605c1e79cdd3cf04072e",
"assets/assets/images/dummy/fileManager-1.jpg": "f183718ba252d007b8e9112cfdce3075",
"assets/assets/images/dummy/15.jpg": "8e7e65bd31a5bd3d1c1575471205115e",
"assets/assets/images/dummy/avatar-7.jpg": "e09a066d4230404dde5f4235ad5e2522",
"assets/assets/images/dummy/login2.jpg": "9dd949ba82e62865b0bca1a1c35f6ea3",
"assets/assets/images/dummy/m7.jpg": "32d9f96d13d0e2ec32237474e75236f0",
"assets/assets/images/dummy/login3.jpg": "4147c67ec2598fe574291cbf1474f097",
"assets/assets/images/dummy/login1.jpg": "03d1dfc686973b9088e74ba8e41ae5ec",
"assets/assets/images/dummy/landing-1.jpg": "55782e136d49d77f5e39ad78d4a7cc32",
"assets/assets/images/dummy/avatar-4.jpg": "c2490a01011a037c979e4c2ba890844d",
"assets/assets/images/dummy/11.jpg": "f774b24254052e87b577893240c9287f",
"assets/assets/images/dummy/6.jpg": "52ef62ecb6548394da4fcffa2bf82aed",
"assets/assets/images/dummy/a4.jpg": "bbe5c27105fb18f90d4d39d246bed14c",
"assets/assets/images/dummy/9.jpg": "9c13dd8c28df6d4d35ebfd8907dac1fa",
"assets/assets/images/dummy/14.jpg": "8278b9c949763b70ba034da3d4d01bac",
"assets/assets/images/dummy/h4.jpg": "bb71a3e18cc3741431dba50e84c160bd",
"assets/assets/images/dummy/fileManager-2.jpg": "8e9cf57a7b9fbf35a8b859642448085d",
"assets/assets/images/dummy/p1.jpg": "0993a07c2eca498fc53abbb4754d4bb5",
"assets/assets/images/dummy/m5.jpg": "0302ba2b1eced67ba5d51f5b572dcc1d",
"assets/assets/images/dummy/a3.jpg": "069df945775d3e291b6bafa474208120",
"assets/assets/images/dummy/landing-3.jpg": "1471f164dd94365b091dec06c7596b58",
"assets/assets/images/dummy/landing-2.jpg": "ac674445f71db60dff1ed9754bcea2c1",
"assets/assets/images/dummy/social-4.jpg": "c4669abf5c4950d89ba03c053af022d3",
"assets/assets/images/dummy/l1.jpg": "a530d59fa7fca0e2983d1ada0aec577a",
"assets/assets/images/dummy/7.jpg": "bebf52764bc8e61d03059305a38692b8",
"assets/assets/images/dummy/avatar-11.jpg": "27639ad85f5b3fe0e348fd357a7aba43",
"assets/assets/images/dummy/m3.jpg": "dd31845e4ab55f8ac0b4bc25aba3ecee",
"assets/assets/images/dummy/p2.jpg": "07975334d9a5cb9449a7fa9a5b5578ef",
"assets/assets/images/dummy/social-2.jpg": "5672c1bff49726b1a99a14bace0770ee",
"assets/assets/images/dummy/avatar-6.jpg": "82c67e16a29e2b8fb371368a49c18a77",
"assets/assets/images/dummy/avatar-10.jpg": "d80707cfaa72d68e9f15521c5912fd7e",
"assets/assets/images/dummy/social-1.jpg": "6b3362eabff4a84bbbacbe99e0a92ac8",
"assets/assets/images/dummy/social-3.jpg": "36321ede8653a9842bb158e833806087",
"assets/assets/images/dummy/h3.jpg": "6847e351d9efe19c8de927b748f0f9ec",
"assets/assets/images/dummy/avatar-1.jpg": "6b3d7fc9fc5c13c563ca66847b87c67d",
"assets/assets/images/dummy/h5.jpg": "229e58adfaf51530a8ae6e2228234111",
"assets/assets/images/dummy/a6.jpg": "4f24905229cd418c3ca7a6b548304561",
"assets/assets/images/dummy/login5.jpg": "32376c1656bb0cd32dce5320838c06a2",
"assets/assets/images/dummy/a5.jpg": "4767834c27471d2edad72d43010b5c04",
"assets/assets/images/dummy/a7.jpg": "b0dfabe6d05a90cf4b1bf76ddae6b52a",
"assets/assets/images/dummy/h7.jpg": "b800f411a9308c7126bcfc67ceea27c6",
"assets/assets/images/dummy/avatar-8.jpg": "da7ed22cc8df53bc0e43394b785d3a85",
"assets/assets/images/dummy/a2.jpg": "397ffc6d89dd46c5494ef307e6c8932c",
"assets/assets/images/dummy/m1.jpg": "75d84ef25cbf23e2df3deb053e42b7df",
"assets/assets/images/dummy/dashboard-1.jpg": "091be5bb79ae4e25b23ffbb5800fb50c",
"assets/assets/images/dummy/avatar-3.jpg": "69bac73c4e3ccdf4e0c17a1d85e346b7",
"assets/assets/images/dummy/4.jpg": "2bbded6cfa2f25bbaa221d9b9631c279",
"assets/assets/images/dummy/avatar-12.jpg": "9b34780e52e098c5af8d93ed2e7d5191",
"assets/assets/images/dummy/avatar-5.jpg": "fb079bfd1100a06f36224bb642f28abf",
"assets/assets/images/dummy/social-5.jpg": "0590933a38c763b2f7ffacfdb2325a2d",
"assets/assets/images/dummy/login4.jpg": "98014387ca4c9a1f7c99ad3a7aa146f1",
"assets/assets/images/dummy/3.jpg": "724abbe8e77e3b1947626c161ac96d75",
"assets/assets/images/dummy/a8.jpg": "a11359bcf5ed3930f76b551808e934c3",
"assets/assets/images/dummy/m8.jpg": "381c07e23648466c813039d1e07a24f0",
"assets/assets/images/dummy/maintenance-1.jpg": "695ee627e3201178f368d2a5fa78f483",
"assets/assets/images/dummy/2.jpg": "393b0a1efe502f0d75f0cbc63f987754",
"assets/assets/images/dummy/l3.jpg": "73543363cfca8fb8307b8b850605990f",
"assets/assets/images/dummy/13.jpg": "f4e7b928c09757f06322f73d825ccc3d",
"assets/assets/images/dummy/l2.jpg": "6789631815c90d52eaaa3ca190a9ab40",
"assets/assets/images/dummy/10.jpg": "72727e2cbd4e95dad31005a6f64ad553",
"assets/assets/images/dummy/8.jpg": "eff7b76a83ed3c5c97af0c853612e35a",
"assets/assets/images/dummy/5.jpg": "29cf385d776d483a34ad047822d5949c",
"assets/assets/images/dummy/m2.jpg": "602b8f28cb6be6b599c7c71c25fecc4d",
"assets/assets/images/dummy/m6.jpg": "0b1494e1fee543a20825beec0e9fc3fa",
"assets/assets/images/dummy/p3.jpg": "e2e0c556cdb1ff168b2fada00c161a97",
"assets/assets/images/dummy/12.jpg": "d046575b8636a0a7e179573a3ae02a1e",
"assets/assets/images/dummy/1.jpg": "6dd9e5b779dbbd9d62d0877fc7b43748",
"assets/assets/images/dummy/h1.jpg": "523e954f6e43a394420318fc4f15f3a9",
"assets/assets/images/dummy/avatar-9.jpg": "f46a5378522a02b5c93224a26f3ebf82",
"assets/assets/images/dummy/h2.jpg": "e603b8880e8e0ea0b8de6f0c2a461b03",
"assets/assets/images/dummy/a1.jpg": "6807a2e9ae0757b7463dcff5d4e78983",
"assets/assets/images/dummy/h6.jpg": "11cb9d90b5e6c92001362656303c8aa4",
"assets/assets/lang/ar.jpg": "9143f6bb9f70a7082b2d49a2fa2b0339",
"assets/assets/lang/en.jpg": "6dd96569bff0a5c5ada7d99222b9815d",
"assets/assets/lang/hi.json": "f0fa2ecabbbb1d5ccf26d17f241268be",
"assets/assets/lang/es.jpg": "25d67fb418ce2623d770679b2fd4f575",
"assets/assets/lang/fr.json": "d162208d847ec1ad2fce096e245bb6ee",
"assets/assets/lang/en.json": "879b874b4cb97bc8c2b99c9abc91b753",
"assets/assets/lang/ar.json": "3df835eeed7b1ff68b79c9df9929015f",
"assets/assets/lang/fr.jpg": "ed28420a8f74b0631c24659a40511c2d",
"assets/assets/lang/hi.jpg": "806b19b66156a2bfcb232d4f6518747a",
"assets/assets/lang/es.json": "a80281efdce9f2b83f082964a55c3839",
"assets/assets/datas/world_map.json": "991a3a9fc41238af03cc0b72190a6483",
"assets/assets/datas/shopping_product.json": "57b1e46b38ace696f358b0583124b1a9",
"assets/assets/datas/products_data.json": "07f9d4572714b975b6bab9dfef075bf6",
"assets/assets/datas/nft_dashboard_data.json": "7572fdf64ceb424da746b60813216915",
"assets/assets/datas/australia.json": "10a51ae9206cf1c4b840d9de7bb4d502",
"assets/assets/datas/europe_map.json": "a60417bd4a4634670a81aeffc7992a7d",
"assets/assets/datas/project_list.json": "386b39d632b10e90dfc9b2ef1ea85c34",
"assets/assets/datas/opportunities_data.json": "27efdf4927f594cc3edb9378e7a095cd",
"assets/assets/datas/chat_data.json": "f4321cef245fbce8625b91e4074839d4",
"assets/assets/datas/contacts_data.json": "2cf5781fccc75f3f290e42a1a74b8a38",
"assets/assets/datas/discovery_data.json": "3ef310a14e1fb429b46e899cb4a038bc",
"assets/assets/datas/customers_data.json": "9d9dbd2227111612c9f1275d7a7d6abe",
"assets/assets/datas/dashboard.json": "f50327cda4602ffceb403a7fa366646f",
"assets/assets/datas/drag_drop_data.json": "e3c135aa08bf83ac44ecedd26a2b5f40",
"assets/assets/datas/shopping_cart.json": "b2ddf0d7a97cc579e464900ba67bed2f",
"assets/assets/icon/librarian-svgrepo-com.svg": "4ae80025e59bcafa75d33dfa5c1edf2b",
"assets/assets/icon/worker-svgrepo-com.svg": "7fa5c09d0cd4c923c16b672f0e2587ce",
"assets/assets/icon/fitness-svgrepo-com.svg": "fe6910429a2ac6d0c688489ec60f14b0",
"assets/assets/icon/ophthalmology-svgrepo-com.svg": "8e8c0fce4bb3c7710dfc9a5bab35a27d",
"assets/fonts/MaterialIcons-Regular.otf": "a4937a39ff490b39d2e323b208bdebf8",
"assets/NOTICES": "e99c3f4f132e34759c4572e0526ec68d",
"assets/packages/feather_icons/fonts/feather.ttf": "0d0d92d310cc68e53796bf15c36838c2",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/lucide_icons/assets/lucide.ttf": "03f254a55085ec6fe9a7ae1861fda9fd",
"assets/packages/quill_html_editor/assets/delete_table.png": "37e148071ce0a306a27f296369e52f40",
"assets/packages/quill_html_editor/assets/scripts/quill_2.0.0_4_min.js": "3f4b931496920ee12125e575f1c15dfa",
"assets/packages/quill_html_editor/assets/delete_column.png": "62358bf5aa9ac7f18e2411e4a0c63f14",
"assets/packages/quill_html_editor/assets/insert_column_right.png": "fb27c4e3cc557089f79dd1f0cc937d62",
"assets/packages/quill_html_editor/assets/insert_column_left.png": "114e6cca4b2f60a5eaebe4e574f2c36d",
"assets/packages/quill_html_editor/assets/camera_roll_icon.png": "962f1d57cab7451d4b92b236b1993bd5",
"assets/packages/quill_html_editor/assets/delete_row.png": "3a56332918794e49ffca20016948553d",
"assets/packages/quill_html_editor/assets/h1_dark.png": "aa135c261ba758a3990d4594d982104d",
"assets/packages/quill_html_editor/assets/h2_dark.png": "037de75dfed94244b78e7493c6425586",
"assets/packages/quill_html_editor/assets/insert_row_below.png": "cea46607b37038f71c0fec22341b80e4",
"assets/packages/quill_html_editor/assets/edit_table.png": "6a51397f56e90d98ae0b46a2e359676f",
"assets/packages/quill_html_editor/assets/insert_table.png": "c8f041a07bc6b8e4010ccf93ba4c291d",
"assets/packages/quill_html_editor/assets/insert_row_above.png": "80ae3856d5f7415d9957d9a1699ec782",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "efc6c90b58d765987f922c95c2031dd2",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "0db203e8632f03baae0184700f3bda48",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "01bb14ae3f14c73ee03eed84f480ded9",
"assets/packages/timezone/data/latest_all.tzf": "871b8008607c14f36bae2388a95fdc8c",
"assets/AssetManifest.json": "ba014f197a7a40b435a7e317449b7ece",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"main.dart.js": "aedbdd13001fabbe7b7bf1b719420c39",
"index.html": "02456951744cab98e62d0eb8e3dfabee",
"/": "02456951744cab98e62d0eb8e3dfabee",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15",
"canvaskit/canvaskit.js": "bbf39143dfd758d8d847453b120c8ebb",
"canvaskit/chromium/canvaskit.js": "96ae916cd2d1b7320fff853ee22aebb0",
"canvaskit/chromium/canvaskit.wasm": "be0e3b33510f5b7b0cc76cc4d3e50048",
"canvaskit/skwasm.wasm": "1a074e8452fe5e0d02b112e22cdcf455",
"canvaskit/canvaskit.wasm": "42df12e09ecc0d5a4a34a69d7ee44314"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
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
