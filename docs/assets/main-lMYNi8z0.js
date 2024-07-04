/**
 * @license Apache-2.0
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))e(r);new MutationObserver(r=>{for(const n of r)if(n.type==="childList")for(const s of n.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&e(s)}).observe(document,{childList:!0,subtree:!0});function t(r){const n={};return r.integrity&&(n.integrity=r.integrity),r.referrerPolicy&&(n.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?n.credentials="include":r.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function e(r){if(r.ep)return;r.ep=!0;const n=t(r);fetch(r.href,n)}})();const Z="modulepreload",ee=function(a){return"/"+a},R={},te=function(o,t,e){let r=Promise.resolve();if(t&&t.length>0){document.getElementsByTagName("link");const n=document.querySelector("meta[property=csp-nonce]"),s=n?.nonce||n?.getAttribute("nonce");r=Promise.all(t.map(u=>{if(u=ee(u),u in R)return;R[u]=!0;const g=u.endsWith(".css"),c=g?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${u}"]${c}`))return;const i=document.createElement("link");if(i.rel=g?"stylesheet":Z,g||(i.as="script",i.crossOrigin=""),i.href=u,s&&i.setAttribute("nonce",s),document.head.appendChild(i),g)return new Promise((l,p)=>{i.addEventListener("load",l),i.addEventListener("error",()=>p(new Error(`Unable to preload CSS for ${u}`)))})}))}return r.then(()=>o()).catch(n=>{const s=new Event("vite:preloadError",{cancelable:!0});if(s.payload=n,window.dispatchEvent(s),!s.defaultPrevented)throw n})},re={"Absolute Orientation Sensor":{regEx:/new\s+AbsoluteOrientationSensor\s*\(/g,where:"JavaScript",supported:(async()=>"AbsoluteOrientationSensor"in self)(),featureDetection:"(async () => 'AbsoluteOrientationSensor' in self)()",documentation:"https://developer.chrome.com/articles/generic-sensor/",blinkFeatureID:1900,chromeStatusID:5698781827825664},Accelerometer:{regEx:/new\s+Accelerometer\s*\(/g,where:"JavaScript",supported:(async()=>"Accelerometer"in self)(),featureDetection:"(async () => 'Accelerometer' in self)()",documentation:"https://developer.chrome.com/articles/generic-sensor/",blinkFeatureID:1899,chromeStatusID:5698781827825664},"Add to Home Screen":{regEx:/["']beforeinstallprompt["']|\.onbeforeinstallprompt/g,where:"JavaScript",supported:(async()=>"BeforeInstallPromptEvent"in self)(),featureDetection:"(async () => 'BeforeInstallPromptEvent' in self)()",documentation:"https://developer.mozilla.org/en-US/docs/Web/API/BeforeInstallPromptEvent",blinkFeatureID:1436,chromeStatusID:6560913322672128},"Ambient Light Sensor":{regEx:/new\s+AmbientLightSensor\s*\(\)/g,where:"JavaScript",supported:(async()=>"AmbientLightSensor"in self)(),featureDetection:"(async () => 'AmbientLightSensor' in self)()",documentation:"https://developer.chrome.com/articles/generic-sensor/",blinkFeatureID:1901,chromeStatusID:5298357018820608},"Async Clipboard":{regEx:/navigator\.clipboard\.writeText\s*\(/g,where:"JavaScript",supported:(async()=>"clipboard"in navigator&&"writeText"in navigator.clipboard)(),featureDetection:"(async () => 'clipboard' in navigator && 'writeText' in navigator.clipboard)()",documentation:"https://web.dev/async-clipboard/",blinkFeatureID:2372,chromeStatusID:5861289330999296},"Async Clipboard (Images)":{regEx:/navigator\.clipboard\.write\s*\(/g,where:"JavaScript",supported:(async()=>"clipboard"in navigator&&"write"in navigator.clipboard)(),featureDetection:"(async () => 'clipboard' in navigator && 'write' in navigator.clipboard)()",documentation:"https://web.dev/async-clipboard/",blinkFeatureID:2370,chromeStatusID:5074658793619456},"Background Fetch":{regEx:/\.backgroundFetch\.fetch\s*\(["']/g,where:"JavaScript",supported:(async()=>"BackgroundFetchManager"in self)(),featureDetection:"(async () => 'BackgroundFetchManager' in self)()",documentation:"https://developer.mozilla.org/en-US/docs/Web/API/Background_Fetch_API",blinkFeatureID:2549,chromeStatusID:5712608971718656},"Background Sync":{regEx:/\.sync\.register\s*\(["']/g,where:"JavaScript",supported:(async()=>"serviceWorker"in navigator&&"sync"in(await navigator.serviceWorker?.ready||self.registration))(),featureDetection:"(async () => 'serviceWorker' in navigator && 'sync' in (await navigator.serviceWorker?.ready || self.registration))()",documentation:"https://developer.mozilla.org/en-US/docs/Web/API/Background_Synchronization_API",blinkFeatureID:745,chromeStatusID:6170807885627392},Badging:{regEx:/navigator\.setAppBadge\s*\(/g,where:"JavaScript",supported:(async()=>"setAppBadge"in navigator)(),featureDetection:"(async () => 'setAppBadge' in navigator)()",documentation:"https://developer.chrome.com/articles/badging-api/",blinkFeatureID:2726,chromeStatusID:6068482055602176},"Cache Storage":{regEx:/caches\.open\s*\(/g,where:"JavaScript",supported:(async()=>"serviceWorker"in navigator&&"caches"in self)(),featureDetection:"(async () => 'serviceWorker' in navigator && 'caches' in self)()",documentation:"https://developer.mozilla.org/en-US/docs/Web/API/CacheStorage",blinkFeatureID:3022,chromeStatusID:6461631328419840},"Compression Streams":{regEx:/new\s+CompressionStream\s*\(/g,where:"JavaScript",supported:(async()=>"CompressionStream"in self)(),featureDetection:"(async () => 'CompressionStream' in self)()",documentation:"https://developer.chrome.com/blog/compression-streams-api/",blinkFeatureID:3060,chromeStatusID:5855937971617792},"Compute Pressure":{regEx:/new\s+ComputePressureObserver\s*\(/g,where:"JavaScript",supported:(async()=>"ComputePressureObserver"in self)(),featureDetection:"(async () => 'ComputePressureObserver' in self)()",documentation:"https://developer.chrome.com/docs/web-platform/compute-pressure/",blinkFeatureID:3899,chromeStatusID:5597608644968448},"Contact Picker":{regEx:/navigator\.contacts\.select\s*\(/g,where:"JavaScript",supported:(async()=>"contacts"in navigator)(),featureDetection:"(async () => 'contacts' in navigator)()",documentation:"https://developer.chrome.com/articles/contact-picker/",blinkFeatureID:2993,chromeStatusID:6511327140904960},"Content Index":{regEx:/index\.getAll\s*\(/g,where:"JavaScript",supported:(async()=>"serviceWorker"in navigator&&"index"in(await navigator.serviceWorker?.ready||self.registration))(),featureDetection:"(async () => 'serviceWorker' in navigator && 'index' in (await navigator.serviceWorker?.ready || self.registration))()",documentation:"https://developer.chrome.com/articles/content-indexing-api/",blinkFeatureID:2985,chromeStatusID:5658416729030656},"Credential Management":{regEx:/navigator\.credentials\.get\s*\(/g,where:"JavaScript",supported:(async()=>"credentials"in navigator)(),featureDetection:"(async () => 'credentials' in navigator)()",documentation:"https://developers.google.com/web/updates/2016/04/credential-management-api",blinkFeatureID:960,chromeStatusID:5026422640869376},"Device Memory":{regEx:/navigator\.deviceMemory/g,where:"JavaScript",supported:(async()=>"deviceMemory"in navigator)(),featureDetection:"(async () => 'deviceMemory' in navigator)()",documentation:"https://developer.mozilla.org/en-US/docs/Web/API/Device_Memory_API",blinkFeatureID:2121,chromeStatusID:5119701235531776},"Device Posture":{regEx:/navigator\.devicePosture/g,where:"JavaScript",supported:(async()=>"devicePosture"in navigator)(),featureDetection:"(async () => 'devicePosture' in navigator)()",documentation:"https://github.com/w3c/device-posture/blob/gh-pages/README.md",blinkFeatureID:void 0,chromeStatusID:5185813744975872},"Digital Goods":{regEx:/getDigitalGoodsService\s*\(/g,where:"JavaScript",supported:(async()=>"getDigitalGoodsService"in self)(),featureDetection:"(async () => 'getDigitalGoodsService' in self)()",documentation:"https://developer.chrome.com/docs/android/trusted-web-activity/receive-payments-play-billing/",blinkFeatureID:3397,chromeStatusID:5339955595313152},EyeDropper:{regEx:/new\s+EyeDropper\s*\(\)/g,where:"JavaScript",supported:(async()=>"EyeDropper"in self)(),featureDetection:"(async () => 'EyeDropper' in self)()",documentation:"https://developer.chrome.com/articles/eyedropper/",blinkFeatureID:void 0,chromeStatusID:6304275594477568},"File Handling":{regEx:/"file_handlers"/g,where:"Web App Manifest",supported:(async()=>"launchQueue"in self&&"files"in LaunchParams.prototype)(),featureDetection:"(async () => 'launchQueue' in self && 'files' in LaunchParams.prototype)()",documentation:"https://developer.chrome.com/articles/file-handling/",blinkFeatureID:3875,chromeStatusID:5721776357113856},"File System Observer":{regEx:/new\s+FileSystemObserver\s*\(/g,where:"JavaScript",supported:(async()=>"FileSystemObserver"in self)(),featureDetection:"(async () => 'FileSystemObserver' in self)()",documentation:"https://github.com/whatwg/fs/blob/main/proposals/FileSystemObserver.md",blinkFeatureID:void 0,chromeStatusID:4622243656630272},"File System Access":{regEx:/showOpenFilePicker\s*\(|showSaveFilePicker\s*\(|showDirectoryPicker\s*\(/g,where:"JavaScript",supported:(async()=>"showOpenFilePicker"in self)(),featureDetection:"(async () => 'showOpenFilePicker' in self)()",documentation:"https://developer.chrome.com/articles/file-system-access/",blinkFeatureID:3340,chromeStatusID:6284708426022912},Gamepad:{regEx:/navigator\.getGamepads\s*\(/g,where:"JavaScript",supported:(async()=>"getGamepads"in navigator)(),featureDetection:"(async () => 'getGamepads' in navigator)()",documentation:"https://web.dev/gamepad/",blinkFeatureID:1916,chromeStatusID:5118776383111168},getInstalledRelatedApps:{regEx:/navigator\.getInstalledRelatedApps\s*\(/g,where:"JavaScript",supported:(async()=>"getInstalledRelatedApps"in navigator)(),featureDetection:"(async () => 'getInstalledRelatedApps' in navigator)()",documentation:"https://web.dev/get-installed-related-apps/",blinkFeatureID:1870,chromeStatusID:5695378309513216},"Gravity Sensor":{regEx:/new\s+GravitySensor\s*\(/g,where:"JavaScript",supported:(async()=>"GravitySensor"in self)(),featureDetection:"(async () => 'GravitySensor' in self)()",documentation:"https://developer.chrome.com/articles/generic-sensor/",blinkFeatureID:3795,chromeStatusID:5384099747332096},Gyroscope:{regEx:/new\s+Gyroscope\s*\(/g,where:"JavaScript",supported:(async()=>"Gyroscope"in self)(),featureDetection:"(async () => 'Gyroscope' in self)()",documentation:"https://developer.chrome.com/articles/generic-sensor/",blinkFeatureID:1906,chromeStatusID:5698781827825664},"Handwriting Recognition":{regEx:/navigator\.queryHandwritingRecognizerSupport\s*\(/g,where:"JavaScript",supported:(async()=>"queryHandwritingRecognizerSupport"in navigator)(),featureDetection:"(async () => 'queryHandwritingRecognizerSupport' in navigator)()",documentation:"https://developer.chrome.com/docs/web-platform/handwriting-recognition/",blinkFeatureID:3893,chromeStatusID:5263213807534080},HapticsDevice:{regEx:/\.haptics\.play\s*\(/g,where:"JavaScript",supported:(async()=>"HapticsDevice"in self)(),featureDetection:"(async () => 'HapticsDevice' in self)()",documentation:"https://github.com/MicrosoftEdge/MSEdgeExplainers/blob/main/HapticsDevice/explainer.md",blinkFeatureID:void 0,chromeStatusID:5720648543371264},"Idle Detection":{regEx:/new\s+IdleDetector\s*\(/g,where:"JavaScript",supported:(async()=>"IdleDetector"in self)(),featureDetection:"(async () => 'IdleDetector' in self)()",documentation:"https://developer.chrome.com/articles/idle-detection/",blinkFeatureID:2834,chromeStatusID:4590256452009984},Ink:{regEx:/navigator\.ink\.requestPresenter\s*\(/g,where:"JavaScript",supported:(async()=>"ink"in navigator)(),featureDetection:"(async () => 'ink' in navigator)()",documentation:"https://blogs.windows.com/msedgedev/2021/08/18/enhancing-inking-on-the-web/",blinkFeatureID:void 0,chromeStatusID:5961434129235968},"Insertable streams for MediaStreamTrack":{regEx:/MediaStreamTrackProcessor\s*\(/g,where:"JavaScript",supported:(async()=>"MediaStreamTrackProcessor"in self&&"MediaStreamTrackGenerator"in self)(),featureDetection:"(async () => 'MediaStreamTrackProcessor' in self && 'MediaStreamTrackGenerator' in self)()",documentation:"https://developer.chrome.com/articles/mediastreamtrack-insertable-media-processing/",blinkFeatureID:3729,chromeStatusID:5499415634640896},"Launch Handler":{regEx:/"launch_handler"/g,where:"Web App Manifest",supported:(async()=>"launchQueue"in self&&"targetURL"in LaunchParams.prototype)(),featureDetection:"(async () => 'launchQueue' in self && 'targetURL' in LaunchParams.prototype)()",documentation:"https://developer.chrome.com/docs/web-platform/launch-handler/",blinkFeatureID:void 0,chromeStatusID:5722383233056768},"Linear Acceleration Sensor":{regEx:/new\s+LinearAccelerationSensor\s*\(/g,where:"JavaScript",supported:(async()=>"LinearAccelerationSensor"in self)(),featureDetection:"(async () => 'LinearAccelerationSensor' in self)()",documentation:"https://developer.chrome.com/articles/generic-sensor/",blinkFeatureID:2051,chromeStatusID:5698781827825664},"Local Font Access":{regEx:/queryLocalFonts\s*\(/g,where:"JavaScript",supported:(async()=>"queryLocalFonts"in self)(),featureDetection:"(async () => 'queryLocalFonts' in self)()",documentation:"https://developer.chrome.com/articles/local-fonts/",blinkFeatureID:4211,chromeStatusID:6234451761692672},Magnetometer:{regEx:/new\s+Magnetometer\s*\(/g,where:"JavaScript",supported:(async()=>"Magnetometer"in self)(),featureDetection:"(async () => 'Magnetometer' in self)()",documentation:"https://developer.chrome.com/articles/generic-sensor/",blinkFeatureID:1907,chromeStatusID:5698781827825664},"Media Capabilities":{regEx:/navigator\.mediaCapabilities\.decodingInfo\s*\(/g,where:"JavaScript",supported:(async()=>"mediaCapabilities"in navigator)(),featureDetection:"(async () => 'mediaCapabilities' in navigator)()",documentation:"https://developer.mozilla.org/en-US/docs/Web/API/Media_Capabilities_API",blinkFeatureID:2239,chromeStatusID:5869632707624960},"Media Session":{regEx:/navigator\.mediaSession\.setActionHandler|navigator\.mediaSession\.metadata/g,where:"JavaScript",supported:(async()=>"mediaSession"in navigator)(),featureDetection:"(async () => 'mediaSession' in navigator)()",documentation:"https://developer.mozilla.org/en-US/docs/Web/API/Media_Session_API",blinkFeatureID:1792,chromeStatusID:5639924124483584},"Window Management":{regEx:/getScreenDetails\s*\(\)/g,where:"JavaScript",supported:(async()=>"getScreenDetails"in self)(),featureDetection:"(async () => 'getScreenDetails' in self)()",documentation:"https://developer.chrome.com/articles/window-management/",blinkFeatureID:3388,chromeStatusID:5252960583942144},"Navigation Preload":{regEx:/\.navigationPreload\.enable\s*\(\)/g,where:"JavaScript",supported:(async()=>"serviceWorker"in navigator&&"navigationPreload"in(await navigator.serviceWorker?.ready||self.registration))(),featureDetection:"(async () => 'serviceWorker' in navigator && 'navigationPreload' in (await navigator.serviceWorker?.ready || self.registration))()",documentation:"https://developer.mozilla.org/en-US/docs/Web/API/NavigationPreloadManager",blinkFeatureID:1803,chromeStatusID:5734842339688448},"Origin Private File System":{regEx:/navigator\.storage\.getDirectory\s*\(\)/g,where:"JavaScript",supported:(async()=>"StorageManager"in self&&"getDirectory"in StorageManager.prototype)(),featureDetection:"(async () => 'StorageManager' in self && 'getDirectory' in StorageManager.prototype)()",documentation:"https://web.dev/origin-private-file-system/",blinkFeatureID:3428,chromeStatusID:5702777582911488},"Payment Handler":{regEx:/\.paymentManager\.instruments\.set\s*\(/g,where:"JavaScript",supported:(async()=>"PaymentInstruments"in self)(),featureDetection:"(async () => 'PaymentInstruments' in self)()",documentation:"https://web.dev/registering-a-web-based-payment-app/",blinkFeatureID:2397,chromeStatusID:5160285237149696},"Payment Request":{regEx:/new\s+PaymentRequest\s*\(/g,where:"JavaScript",supported:(async()=>"PaymentRequest"in self)(),featureDetection:"(async () => 'PaymentRequest' in self)()",documentation:"https://developer.mozilla.org/en-US/docs/Web/API/Payment_Request_API",blinkFeatureID:2894,chromeStatusID:5639348045217792},"Periodic Background Sync":{regEx:/periodicSync\.register\s*\(/g,where:"JavaScript",supported:(async()=>"PeriodicSyncManager"in self)(),featureDetection:"(async () => 'PeriodicSyncManager' in self)()",documentation:"https://developer.chrome.com/articles/periodic-background-sync/",blinkFeatureID:2931,chromeStatusID:5689383275462656},"Persistent Storage":{regEx:/navigator\.storage\.persist\s*\(\)/g,where:"JavaScript",supported:(async()=>"storage"in navigator&&"persist"in navigator.storage)(),featureDetection:"(async () => 'storage' in navigator && 'persist' in navigator.storage)()",documentation:"https://developer.mozilla.org/en-US/docs/Web/API/StorageManager/persist",blinkFeatureID:1369,chromeStatusID:5715811364765696},"Storage Buckets":{regEx:/navigator\.storageBuckets\.open\s*\(/g,where:"JavaScript",supported:(async()=>"storageBuckets"in navigator)(),featureDetection:"(async () => 'storageBuckets' in navigator)()",documentation:"https://developer.chrome.com/blog/storage-buckets/",blinkFeatureID:4378,chromeStatusID:5739224579964928},"Pointer Lock (unadjustedMovement)":{regEx:/unadjustedMovement\s*\:\s*/g,where:"JavaScript",supported:(async()=>"HTMLParagraphElement"in self?await(async()=>{try{return!!await document.createElement("p").requestPointerLock({unadjustedMovement:!0})}catch{return"requestPointerLock"in HTMLParagraphElement.prototype}})():void 0)(),featureDetection:`(async () => 'HTMLParagraphElement' in self ? await (async () => { try { return !!await document.createElement("p").requestPointerLock({ unadjustedMovement: true }) } catch { return 'requestPointerLock' in HTMLParagraphElement.prototype } })() : undefined)()`,documentation:"https://web.dev/disable-mouse-acceleration/",blinkFeatureID:3027,chromeStatusID:5723553087356928},"Protocol Handlers":{regEx:/"protocol_handlers"/g,where:"Web App Manifest",supported:(async()=>{})(),featureDetection:"(async () => undefined)()",documentation:"https://developer.chrome.com/articles/url-protocol-handler/",blinkFeatureID:3884,chromeStatusID:5151703944921088},Push:{regEx:/\.pushManager\.subscribe\s*\(/g,where:"JavaScript",supported:(async()=>"serviceWorker"in navigator&&"pushManager"in(await navigator.serviceWorker?.ready||self.registration))(),featureDetection:"(async () => 'serviceWorker' in navigator && 'pushManager' in (await navigator.serviceWorker?.ready || self.registration))()",documentation:"https://developer.mozilla.org/en-US/docs/Web/API/Push_API",blinkFeatureID:769,chromeStatusID:5416033485586432},"Relative Orientation Sensor":{regEx:/new\s+RelativeOrientationSensor\s*\(/g,where:"JavaScript",supported:(async()=>"RelativeOrientationSensor"in self)(),featureDetection:"(async () => 'RelativeOrientationSensor' in self)()",documentation:"https://developer.chrome.com/articles/generic-sensor/",blinkFeatureID:2019,chromeStatusID:5698781827825664},"Screen Wake Lock":{regEx:/navigator\.wakeLock\.request\s*\(/g,where:"JavaScript",supported:(async()=>"wakeLock"in navigator)(),featureDetection:"(async () => 'wakeLock' in navigator)()",documentation:"https://developer.chrome.com/articles/wake-lock/",blinkFeatureID:3005,chromeStatusID:4636879949398016},"Service Worker":{regEx:/navigator\.serviceWorker\.register\s*\(/g,where:"JavaScript",supported:(async()=>"serviceWorker"in navigator)(),featureDetection:"(async () => 'serviceWorker' in navigator)()",documentation:"https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API",blinkFeatureID:990,chromeStatusID:6561526227927040},"Shape Detection (Barcodes)":{regEx:/new\s+BarcodeDetector\s*\(/g,where:"JavaScript",supported:(async()=>"BarcodeDetector"in self)(),featureDetection:"(async () => 'BarcodeDetector' in self)()",documentation:"https://developer.chrome.com/articles/shape-detection/",blinkFeatureID:3711,chromeStatusID:4757990523535360},"Shape Detection (Faces)":{regEx:/new\s+FaceDetector\s*\(/g,where:"JavaScript",supported:(async()=>"FaceDetector"in self)(),featureDetection:"(async () => 'FaceDetector' in self)()",documentation:"https://developer.chrome.com/articles/shape-detection/",blinkFeatureID:3712,chromeStatusID:5678216012365824},"Shape Detection (Texts)":{regEx:/new\s+TextDetector\s*\(/g,where:"JavaScript",supported:(async()=>"TextDetector"in self)(),featureDetection:"(async () => 'TextDetector' in self)()",documentation:"https://developer.chrome.com/articles/shape-detection/",blinkFeatureID:3713,chromeStatusID:5644087665360896},Shortcuts:{regEx:/"shortcuts"/g,where:"Web App Manifest",supported:(async()=>{})(),featureDetection:"(async () => undefined)()",documentation:"https://web.dev/app-shortcuts/",blinkFeatureID:void 0,chromeStatusID:5706099464339456},"Storage Estimation":{regEx:/navigator\.storage\.estimate\s*\(\)/g,where:"JavaScript",supported:(async()=>"storage"in navigator&&"estimate"in navigator.storage)(),featureDetection:"(async () => 'storage' in navigator && 'estimate' in navigator.storage)()",documentation:"https://developer.mozilla.org/en-US/docs/Web/API/StorageManager/estimate",blinkFeatureID:1371,chromeStatusID:5630353511284736},"Tabbed Application Mode":{regEx:/"tabbed"/g,where:"Web App Manifest",supported:(async()=>{})(),featureDetection:"(async () => undefined)()",documentation:"https://web.dev/tabbed-application-mode/",blinkFeatureID:void 0,chromeStatusID:5128143454076928},VirtualKeyboard:{regEx:/navigator\.virtualKeyboard/g,where:"JavaScript",supported:(async()=>"virtualKeyboard"in navigator)(),featureDetection:"(async () => 'virtualKeyboard' in navigator)()",documentation:"https://github.com/MicrosoftEdge/MSEdgeExplainers/blob/main/VirtualKeyboardAPI/explainer.md",blinkFeatureID:void 0,chromeStatusID:5717448231747584},"Web App Link Handling":{regEx:/"handle_links"/g,where:"Web App Manifest",supported:(async()=>{})(),featureDetection:"(async () => undefined)()",documentation:"https://github.com/WICG/pwa-url-handler/blob/main/handle_links/explainer.md",blinkFeatureID:void 0,chromeStatusID:5740751225880576},"Web Audio":{regEx:/new\s+AudioContext\s*\(/g,where:"JavaScript",supported:(async()=>"AudioContext"in self)(),featureDetection:"(async () => 'AudioContext' in self)()",documentation:"https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API",blinkFeatureID:1698,chromeStatusID:6261718720184320},"Web Share":{regEx:/navigator\.share\s*\(/g,where:"JavaScript",supported:(async()=>"share"in navigator)(),featureDetection:"(async () => 'share' in navigator)()",documentation:"https://web.dev/web-share/",blinkFeatureID:1501,chromeStatusID:5668769141620736},"Web Share (Files)":{regEx:/navigator\.canShare\s*\(/g,where:"JavaScript",supported:(async()=>"canShare"in navigator)(),featureDetection:"(async () => 'canShare' in navigator)()",documentation:"https://web.dev/web-share/",blinkFeatureID:2737,chromeStatusID:4777349178458112},"Web Share Target":{regEx:/"share_target"/g,where:"Web App Manifest",supported:(async()=>{})(),featureDetection:"(async () => undefined)()",documentation:"https://developer.chrome.com/articles/web-share-target/",blinkFeatureID:void 0,chromeStatusID:5662315307335680},"Web Share Target (Files)":{regEx:/"enctype"\s*\:\s*"multipart\/form\-data"/g,where:"Web App Manifest",supported:(async()=>{})(),featureDetection:"(async () => undefined)()",documentation:"https://developer.chrome.com/articles/web-share-target/",blinkFeatureID:void 0,chromeStatusID:6124071381106688},"Web Bluetooth":{regEx:/navigator\.bluetooth\.requestDevice\s*\(/g,where:"JavaScript",supported:(async()=>"bluetooth"in navigator)(),featureDetection:"(async () => 'bluetooth' in navigator)()",documentation:"https://developer.chrome.com/articles/bluetooth/",blinkFeatureID:1670,chromeStatusID:5264933985976320},WebCodecs:{regEx:/new\s+MediaStreamTrackProcessor\s*\(/g,where:"JavaScript",supported:(async()=>"MediaStreamTrackProcessor"in self)(),featureDetection:"(async () => 'MediaStreamTrackProcessor' in self)()",documentation:"https://developer.chrome.com/articles/webcodecs/",blinkFeatureID:3728,chromeStatusID:5669293909868544},WebGPU:{regEx:/navigator\.gpu\.requestAdapter\s*\(/g,where:"JavaScript",supported:(async()=>"gpu"in navigator)(),featureDetection:"(async () => 'gpu' in navigator)()",documentation:"https://developer.chrome.com/docs/web-platform/webgpu/",blinkFeatureID:3888,chromeStatusID:6213121689518080},WebHID:{regEx:/navigator\.hid\.requestDevice\s*\(/g,where:"JavaScript",supported:(async()=>"hid"in navigator)(),featureDetection:"(async () => 'hid' in navigator)()",documentation:"https://developer.chrome.com/articles/hid/",blinkFeatureID:2866,chromeStatusID:5172464636133376},"Web MIDI":{regEx:/navigator\.requestMIDIAccess\s*\(/g,where:"JavaScript",supported:(async()=>"requestMIDIAccess"in navigator)(),featureDetection:"(async () => 'requestMIDIAccess' in navigator)()",documentation:"https://developer.mozilla.org/en-US/docs/Web/API/Web_MIDI_API",blinkFeatureID:2029,chromeStatusID:4923613069180928},"Web NFC":{regEx:/new\s+NDEFReader\s*\(/g,where:"JavaScript",supported:(async()=>"NDEFReader"in self)(),featureDetection:"(async () => 'NDEFReader' in self)()",documentation:"https://developer.chrome.com/articles/nfc/",blinkFeatureID:3094,chromeStatusID:6261030015467520},WebOTP:{regEx:/transport\s*\:\s*\[["']sms["']\]/g,where:"JavaScript",supported:(async()=>"OTPCredential"in self)(),featureDetection:"(async () => 'OTPCredential' in self)()",documentation:"https://developer.chrome.com/articles/web-otp/",blinkFeatureID:2880,chromeStatusID:5873577578463232},"Web Serial":{regEx:/navigator\.serial\.requestPort\s*\(/g,where:"JavaScript",supported:(async()=>"serial"in navigator)(),featureDetection:"(async () => 'serial' in navigator)()",documentation:"https://developer.chrome.com/articles/serial/",blinkFeatureID:2546,chromeStatusID:6577673212002304},WebSocketStream:{regEx:/new\s+WebSocketStream\s*\(/g,where:"JavaScript",supported:(async()=>"WebSocketStream"in self)(),featureDetection:"(async () => 'WebSocketStream' in self)()",documentation:"https://developer.chrome.com/articles/websocketstream/",blinkFeatureID:3018,chromeStatusID:5189728691290112},WebTransport:{regEx:/new\s+WebTransport\s*\(/g,where:"JavaScript",supported:(async()=>"WebTransport"in self)(),featureDetection:"(async () => 'WebTransport' in self)()",documentation:"https://developer.chrome.com/articles/webtransport/",blinkFeatureID:3472,chromeStatusID:4854144902889472},WebUSB:{regEx:/navigator\.usb\.requestDevice\s*\(/g,where:"JavaScript",supported:(async()=>"usb"in navigator)(),featureDetection:"(async () => 'usb' in navigator)()",documentation:"https://developer.chrome.com/articles/usb/",blinkFeatureID:1520,chromeStatusID:5651917954875392},"Window Controls Overlay":{regEx:/"window\-controls\-overlay"/g,where:"Web App Manifest",supported:(async()=>"windowControlsOverlay"in navigator)(),featureDetection:"(async () => 'windowControlsOverlay' in navigator)()",documentation:"https://web.dev/window-controls-overlay/",blinkFeatureID:3902,chromeStatusID:5741247866077184}};var ae=function(a){var o={};function t(e){if(o[e])return o[e].exports;var r=o[e]={i:e,l:!1,exports:{}};return a[e].call(r.exports,r,r.exports,t),r.l=!0,r.exports}return t.m=a,t.c=o,t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:n})},t.r=function(e){typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,r){if(1&r&&(e=t(e)),8&r||4&r&&typeof e=="object"&&e&&e.__esModule)return e;var n=Object.create(null);if(t.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&r&&typeof e!="string")for(var s in e)t.d(n,s,function(u){return e[u]}.bind(null,s));return n},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},t.p="",t(t.s=1)}([function(a,o,t){var e=t(2),r=t(3),n=t(4);a.exports=function(s){return e(s)||r(s)||n()}},function(a,o,t){t.r(o),t.d(o,"sparkline",function(){return g});var e=t(0),r=t.n(e);function n(c,i,l,p){return parseFloat((i-p*i/c+l).toFixed(2))}function s(c){return c.value}function u(c,i){var l=document.createElementNS("http://www.w3.org/2000/svg",c);for(var p in i)l.setAttribute(p,i[p]);return l}function g(c,i,l){var p;if(p=c,r()(p.querySelectorAll("*")).forEach(function(d){return p.removeChild(d)}),!(i.length<=1)){l=l||{},typeof i[0]=="number"&&(i=i.map(function(d){return{value:d}}));var A=l.onmousemove,O=l.onmouseout,N="interactive"in l?l.interactive:!!A,w=l.spotRadius||2,S=2*w,G=l.cursorWidth||2,M=parseFloat(c.attributes["stroke-width"].value),j=l.fetch||s,k=i.map(function(d){return j(d)}),z=parseFloat(c.attributes.width.value)-2*S,x=parseFloat(c.attributes.height.value),_=x-2*M-S,T=Math.max.apply(Math,r()(k)),v=-1e3,q=k.length-1,$=z/q,D=[],V=n(T,_,M+w,k[0]),W="M".concat(S," ").concat(V);k.forEach(function(d,f){var h=f*$+S,y=n(T,_,M+w,d);D.push(Object.assign({},i[f],{index:f,x:h,y})),W+=" L ".concat(h," ").concat(y)});var K=u("path",{class:"sparkline--line",d:W,fill:"none"}),Q=u("path",{class:"sparkline--fill",d:"".concat(W," V ").concat(x," L ").concat(S," ").concat(x," Z"),stroke:"none"});if(c.appendChild(Q),c.appendChild(K),N){var I=u("line",{class:"sparkline--cursor",x1:v,x2:v,y1:0,y2:x,"stroke-width":G}),E=u("circle",{class:"sparkline--spot",cx:v,cy:v,r:w});c.appendChild(I),c.appendChild(E);var J=u("rect",{width:c.attributes.width.value,height:c.attributes.height.value,style:"fill: transparent; stroke: transparent",class:"sparkline--interaction-layer"});c.appendChild(J),J.addEventListener("mouseout",function(d){I.setAttribute("x1",v),I.setAttribute("x2",v),E.setAttribute("cx",v),O&&O(d)}),J.addEventListener("mousemove",function(d){var f=d.offsetX,h=D.find(function(X){return X.x>=f});h||(h=D[q]);var y,F=D[D.indexOf(h)-1],L=(y=F?F.x+(h.x-F.x)/2<=f?h:F:h).x,Y=y.y;E.setAttribute("cx",L),E.setAttribute("cy",Y),I.setAttribute("x1",L),I.setAttribute("x2",L),A&&A(d,y)})}}}o.default=g},function(a,o){a.exports=function(t){if(Array.isArray(t)){for(var e=0,r=new Array(t.length);e<t.length;e++)r[e]=t[e];return r}}},function(a,o){a.exports=function(t){if(Symbol.iterator in Object(t)||Object.prototype.toString.call(t)==="[object Arguments]")return Array.from(t)}},function(a,o){a.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}}]);const ne="https://chromestatus.com/data/timeline/featurepopularity?bucket_id=",oe="https://chromestatus.com/metrics/feature/timeline/popularity/",H="No data",U=document.querySelector("tbody"),m=document.querySelector("meter"),P=document.querySelector(".meter"),B=document.querySelector("label"),ie=document.querySelector("code"),se=document.querySelector("template");let b=0,C=0;const ce=(a,o)=>{const e=a.target.closest("svg").nextElementSibling,r=new Date(o.date).toLocaleDateString(void 0,{year:"numeric",month:"short",day:"numeric"});e.hidden=!1,e.textContent=`On ${r} on ${o.value.toFixed(6)}% of pages`,e.style.top=`${a.offsetY}px`,e.style.left=`${a.offsetX+20}px`},ue=a=>{const t=a.target.closest("svg").nextElementSibling;t.hidden=!0},le=async(a,o)=>{let t=await fetch(ne+o).then(e=>e.json());if(t=t.map(e=>({date:e.date,value:e.day_percentage*100})),t.filter(e=>e.value!==0).length===0){const e=a.parentNode.parentNode;a.parentNode.remove(),e.textContent=H;return}ae.sparkline(a,t,{onmousemove:ce,onmouseout:ue}),a.setAttribute("width","100%"),a.setAttribute("height","100%"),a.style.display="block"};window.addEventListener("load",async()=>{"serviceWorker"in navigator&&await navigator.serviceWorker.register("./sw.js");let a=await Promise.all(Object.entries(re).map(t=>new Promise(async e=>{t[1].supported=await t[1].supported,t[1].supported&&C++,t[1].supported!==void 0&&b++,e(t)})));a=a.sort((t,e)=>!t[1].supported&&e[1].supported?1:t[1].supported&&!e[1].supported?-1:0),a=[!0,!1,void 0].map(t=>a.filter(e=>e[1].supported===t).sort((e,r)=>(e=e[0].toLowerCase(),r=r[0].toLowerCase(),e>r?1:e<r?-1:0))).flat();for(const[t,e]of a){const r=document.createElement("tr");U.append(r);const n=document.createElement("td"),s=document.createElement("td"),u=document.createElement("td");r.append(n),r.append(s),r.append(u);const g=document.createElement("a");if(g.textContent=t,g.href=e.documentation,n.append(g),s.classList.add("icon"),s.textContent=e.supported?"✅ Yes":e.supported===void 0?"🤷 Unknown":"🚫 No",e.blinkFeatureID){const c=se.content.cloneNode(!0),i=c.querySelector("svg");i.style.display="none";const l=c.querySelector("span"),p=document.createElement("a");p.href=`${oe}${e.blinkFeatureID}`,u.append(p),p.append(i),p.append(l),le(i,e.blinkFeatureID)}else u.textContent=H}U.parentNode.hidden=!1;const o=`${Math.floor(C/b*100)}%`;m.max=b,m.low=Math.floor(.2*b),m.high=Math.floor(.8*b),m.optimum=Math.floor(.9*b),m.value=C,P.querySelector("span").style.width=o,m.value<m.low?P.classList.add("red"):m.value<=m.low&&m.value<=m.high?P.classList.add("orange"):P.classList.add("green"),B.textContent=o,B.parentNode.hidden=!1,document.querySelector("[hidden].legend").hidden=!1,ie.textContent=navigator.userAgent,te(()=>import("./share-D5g2DLjW.js"),[])});
