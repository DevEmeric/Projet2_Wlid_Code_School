"use strict";var precacheConfig=[["/lyon-0918-js-potter-fighter/index.html","3f614707c318e69dd7e035f20a654b68"],["/lyon-0918-js-potter-fighter/static/css/main.df97d911.css","aad7b05167e9287e5c01fcb882e621b0"],["/lyon-0918-js-potter-fighter/static/js/main.353d1b2d.js","890b8fc1d789bf7aa396586994d271c8"],["/lyon-0918-js-potter-fighter/static/media/HARRYP__.181ef9a7.TTF","181ef9a7aee45c119e68f294e8426a3a"],["/lyon-0918-js-potter-fighter/static/media/Impact.f65d87d4.gif","f65d87d4e60dfbdca211dd49df25a5ff"],["/lyon-0918-js-potter-fighter/static/media/Quidditch-min.83be700c.jpg","83be700c8f6f8b2b93db420e5b383cf1"],["/lyon-0918-js-potter-fighter/static/media/ScreamAndDie.b42c4c44.wav","b42c4c444f96aa0c8133e5a60cd53cb9"],["/lyon-0918-js-potter-fighter/static/media/attackSound.dc388a5a.wav","dc388a5a75f105aae676b225f516c0a2"],["/lyon-0918-js-potter-fighter/static/media/backgroundCastle.f69c832b.jpg","f69c832b6ca2fc7737812f16872ee86c"],["/lyon-0918-js-potter-fighter/static/media/backgroundCastleBasement.b66b654c.jpg","b66b654cf140d22987fe9811fd7cb2d1"],["/lyon-0918-js-potter-fighter/static/media/backgroundCastleDoor.e3ef824c.jpg","e3ef824c5ace32810f48cb56c667c0ca"],["/lyon-0918-js-potter-fighter/static/media/backgroundCastleFire.6e4afb53.jpg","6e4afb539dfde3e06f51277e7319b657"],["/lyon-0918-js-potter-fighter/static/media/backgroundCastleIndoor.6daf573c.jpg","6daf573c9c061fd13995ea8bb5217319"],["/lyon-0918-js-potter-fighter/static/media/backgroundCastleNight.42c973d6.jpg","42c973d66a905073941895c46a2ab11a"],["/lyon-0918-js-potter-fighter/static/media/backgroundCastleStairs.40cb1bbf.jpg","40cb1bbf1ea76e3ab029c8cdf4e93197"],["/lyon-0918-js-potter-fighter/static/media/backgroundForestLightning.15b47dbe.jpg","15b47dbe649afa856a4db20000175f11"],["/lyon-0918-js-potter-fighter/static/media/backgroundQuidditch.3a81cdf3.jpg","3a81cdf35c5909c4fc120f5f63a37f98"],["/lyon-0918-js-potter-fighter/static/media/backgroundQuidditchFight.83be700c.jpg","83be700c8f6f8b2b93db420e5b383cf1"],["/lyon-0918-js-potter-fighter/static/media/backgroundQuidditchStadium.b006e68c.jpg","b006e68ca3eb429f5209669b0f342d76"],["/lyon-0918-js-potter-fighter/static/media/backgroundTrain.e785c39c.jpg","e785c39ce8ecafde6ac54b115b7640c2"],["/lyon-0918-js-potter-fighter/static/media/defenseSound.911cb887.mp3","911cb8872ac398e09c6edc1095348c07"],["/lyon-0918-js-potter-fighter/static/media/energyShield.8d307945.png","8d30794553158d89734d740445d4b9dc"],["/lyon-0918-js-potter-fighter/static/media/fireGoblet.92e54be7.png","92e54be78c3d63172299fc517c9f6f4a"],["/lyon-0918-js-potter-fighter/static/media/gryffindor.00878cd3.png","00878cd3f4ba91d02475df30e4920718"],["/lyon-0918-js-potter-fighter/static/media/hufflepuff.da05ed0b.png","da05ed0ba246645de82c2471c5a18ddc"],["/lyon-0918-js-potter-fighter/static/media/lightning-death.a997750f.png","a997750f79013531887ac73bea5ce37c"],["/lyon-0918-js-potter-fighter/static/media/logochoice.ab9ea530.png","ab9ea530c20a62af15e4d8d727fefca6"],["/lyon-0918-js-potter-fighter/static/media/normalShieldWhite.a6a95fad.png","a6a95fade46537ea3daa86bdb1c9e4be"],["/lyon-0918-js-potter-fighter/static/media/podium.5bd55761.png","5bd5576153a0127df28db07be1af22ad"],["/lyon-0918-js-potter-fighter/static/media/ravenclaw.4ec5ddf9.png","4ec5ddf93b9204267d71a7dce1aec124"],["/lyon-0918-js-potter-fighter/static/media/salle.3a81cdf3.jpg","3a81cdf35c5909c4fc120f5f63a37f98"],["/lyon-0918-js-potter-fighter/static/media/silouhette.4316aa02.png","4316aa02ae3118a653b9b4037b587309"],["/lyon-0918-js-potter-fighter/static/media/silouhetteGryffindor.6be90420.png","6be9042070d2022a97471189a4e85376"],["/lyon-0918-js-potter-fighter/static/media/silouhetteHufflepuff.2b7f92ba.png","2b7f92ba165a21e62416764569083c03"],["/lyon-0918-js-potter-fighter/static/media/silouhetteRavenclaw.f3c32ae5.png","f3c32ae544a327088c792c96c8643653"],["/lyon-0918-js-potter-fighter/static/media/silouhetteSlytherin.b11709f7.png","b11709f798d7a5880b1c05ac12609556"],["/lyon-0918-js-potter-fighter/static/media/slytherin.44b21481.png","44b214812de2149f99cbe3a229644def"],["/lyon-0918-js-potter-fighter/static/media/trash.fd8b42e2.svg","fd8b42e2d7936ca62fe16b6384c1b571"],["/lyon-0918-js-potter-fighter/static/media/volumeOff.9415b281.png","9415b28154e55c402a9d30e9cf3e6782"],["/lyon-0918-js-potter-fighter/static/media/volumeOn.fc813e68.png","fc813e680f322b890f3635d8482ca87b"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,a,r){var n=new URL(e);return r&&n.pathname.match(r)||(n.search+=(n.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),n.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return a.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],r=new URL(t,self.location),n=createCacheKey(r,hashParamName,a,/\.\w{8}\./);return[r.toString(),n]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(r){return setOfCachedUrls(r).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return r.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,a=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),r="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,r),e=urlsToCacheKeys.has(a));var n="/lyon-0918-js-potter-fighter/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(a=new URL(n,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});