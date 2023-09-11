/**
 * @license Apache-2.0
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))e(r);new MutationObserver(r=>{for(const n of r)if(n.type==="childList")for(const s of n.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&e(s)}).observe(document,{childList:!0,subtree:!0});function t(r){const n={};return r.integrity&&(n.integrity=r.integrity),r.referrerPolicy&&(n.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?n.credentials="include":r.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function e(r){if(r.ep)return;r.ep=!0;const n=t(r);fetch(r.href,n)}})();const Z="modulepreload",ee=function(a){return"/"+a},R={},te=function(o,t,e){if(!t||t.length===0)return o();const r=document.getElementsByTagName("link");return Promise.all(t.map(n=>{if(n=ee(n),n in R)return;R[n]=!0;const s=n.endsWith(".css"),u=s?'[rel="stylesheet"]':"";if(!!e)for(let c=r.length-1;c>=0;c--){const l=r[c];if(l.href===n&&(!s||l.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${n}"]${u}`))return;const i=document.createElement("link");if(i.rel=s?"stylesheet":Z,s||(i.as="script",i.crossOrigin=""),i.href=n,document.head.appendChild(i),s)return new Promise((c,l)=>{i.addEventListener("load",c),i.addEventListener("error",()=>l(new Error(`Unable to preload CSS for ${n}`)))})})).then(()=>o()).catch(n=>{const s=new Event("vite:preloadError",{cancelable:!0});if(s.payload=n,window.dispatchEvent(s),!s.defaultPrevented)throw n})},re={"Absolute Orientation Sensor":{regEx:/new\s+AbsoluteOrientationSensor\s*\(/g,where:"JavaScript",supported:(async()=>"AbsoluteOrientationSensor"in self)(),featureDetection:"(async () => 'AbsoluteOrientationSensor' in self)()",documentation:"https://developer.chrome.com/articles/generic-sensor/",blinkFeatureID:1900},Accelerometer:{regEx:/new\s+Accelerometer\s*\(/g,where:"JavaScript",supported:(async()=>"Accelerometer"in self)(),featureDetection:"(async () => 'Accelerometer' in self)()",documentation:"https://developer.chrome.com/articles/generic-sensor/",blinkFeatureID:1899},"Add to Home Screen":{regEx:/["']beforeinstallprompt["']|\.onbeforeinstallprompt/g,where:"JavaScript",supported:(async()=>"BeforeInstallPromptEvent"in self)(),featureDetection:"(async () => 'BeforeInstallPromptEvent' in self)()",documentation:"https://developer.mozilla.org/en-US/docs/Web/API/BeforeInstallPromptEvent",blinkFeatureID:1436},"Ambient Light Sensor":{regEx:/new\s+AmbientLightSensor\s*\(\)/g,where:"JavaScript",supported:(async()=>"AmbientLightSensor"in self)(),featureDetection:"(async () => 'AmbientLightSensor' in self)()",documentation:"https://developer.chrome.com/articles/generic-sensor/",blinkFeatureID:1901},"Async Clipboard":{regEx:/navigator\.clipboard\.writeText\s*\(/g,where:"JavaScript",supported:(async()=>"clipboard"in navigator&&"writeText"in navigator.clipboard)(),featureDetection:"(async () => 'clipboard' in navigator && 'writeText' in navigator.clipboard)()",documentation:"https://web.dev/async-clipboard/",blinkFeatureID:2372},"Async Clipboard (Images)":{regEx:/navigator\.clipboard\.write\s*\(/g,where:"JavaScript",supported:(async()=>"clipboard"in navigator&&"write"in navigator.clipboard)(),featureDetection:"(async () => 'clipboard' in navigator && 'write' in navigator.clipboard)()",documentation:"https://web.dev/async-clipboard/",blinkFeatureID:2370},"Background Fetch":{regEx:/\.backgroundFetch\.fetch\s*\(["']/g,where:"JavaScript",supported:(async()=>"BackgroundFetchManager"in self)(),featureDetection:"(async () => 'BackgroundFetchManager' in self)()",documentation:"https://developer.mozilla.org/en-US/docs/Web/API/Background_Fetch_API",blinkFeatureID:2549},"Background Sync":{regEx:/\.sync\.register\s*\(["']/g,where:"JavaScript",supported:(async()=>"serviceWorker"in navigator&&"sync"in(await navigator.serviceWorker?.ready||self.registration))(),featureDetection:"(async () => 'serviceWorker' in navigator && 'sync' in (await navigator.serviceWorker?.ready || self.registration))()",documentation:"https://developer.mozilla.org/en-US/docs/Web/API/Background_Synchronization_API",blinkFeatureID:745},Badging:{regEx:/navigator\.setAppBadge\s*\(/g,where:"JavaScript",supported:(async()=>"setAppBadge"in navigator)(),featureDetection:"(async () => 'setAppBadge' in navigator)()",documentation:"https://developer.chrome.com/articles/badging-api/",blinkFeatureID:2726},"Cache Storage":{regEx:/caches\.open\s*\(/g,where:"JavaScript",supported:(async()=>"serviceWorker"in navigator&&"caches"in self)(),featureDetection:"(async () => 'serviceWorker' in navigator && 'caches' in self)()",documentation:"https://developer.mozilla.org/en-US/docs/Web/API/CacheStorage",blinkFeatureID:3022},"Compression Streams":{regEx:/new\s+CompressionStream\s*\(/g,where:"JavaScript",supported:(async()=>"CompressionStream"in self)(),featureDetection:"(async () => 'CompressionStream' in self)()",documentation:"https://wicg.github.io/compression/",blinkFeatureID:3060},"Compute Pressure":{regEx:/new\s+ComputePressureObserver\s*\(/g,where:"JavaScript",supported:(async()=>"ComputePressureObserver"in self)(),featureDetection:"(async () => 'ComputePressureObserver' in self)()",documentation:"https://developer.chrome.com/docs/web-platform/compute-pressure/",blinkFeatureID:3899},"Contact Picker":{regEx:/navigator\.contacts\.select\s*\(/g,where:"JavaScript",supported:(async()=>"contacts"in navigator)(),featureDetection:"(async () => 'contacts' in navigator)()",documentation:"https://developer.chrome.com/articles/contact-picker/",blinkFeatureID:2993},"Content Index":{regEx:/index\.getAll\s*\(/g,where:"JavaScript",supported:(async()=>"serviceWorker"in navigator&&"index"in(await navigator.serviceWorker?.ready||self.registration))(),featureDetection:"(async () => 'serviceWorker' in navigator && 'index' in (await navigator.serviceWorker?.ready || self.registration))()",documentation:"https://developer.chrome.com/articles/content-indexing-api/",blinkFeatureID:2985},"Credential Management":{regEx:/navigator\.credentials\.get\s*\(/g,where:"JavaScript",supported:(async()=>"credentials"in navigator)(),featureDetection:"(async () => 'credentials' in navigator)()",documentation:"https://developers.google.com/web/updates/2016/04/credential-management-api",blinkFeatureID:960},"Device Memory":{regEx:/navigator\.deviceMemory/g,where:"JavaScript",supported:(async()=>"deviceMemory"in navigator)(),featureDetection:"(async () => 'deviceMemory' in navigator)()",documentation:"https://developer.mozilla.org/en-US/docs/Web/API/Device_Memory_API",blinkFeatureID:2121},"Device Posture":{regEx:/navigator\.devicePosture/g,where:"JavaScript",supported:(async()=>"devicePosture"in navigator)(),featureDetection:"(async () => 'devicePosture' in navigator)()",documentation:"https://github.com/w3c/device-posture/blob/gh-pages/README.md",blinkFeatureID:void 0},"Digital Goods":{regEx:/getDigitalGoodsService\s*\(/g,where:"JavaScript",supported:(async()=>"getDigitalGoodsService"in self)(),featureDetection:"(async () => 'getDigitalGoodsService' in self)()",documentation:"https://developer.chrome.com/docs/android/trusted-web-activity/receive-payments-play-billing/",blinkFeatureID:3397},EyeDropper:{regEx:/new\s+EyeDropper\s*\(\)/g,where:"JavaScript",supported:(async()=>"EyeDropper"in self)(),featureDetection:"(async () => 'EyeDropper' in self)()",documentation:"https://developer.chrome.com/articles/eyedropper/",blinkFeatureID:void 0},"File Handling":{regEx:/"file_handlers"/g,where:"Web App Manifest",supported:(async()=>"launchQueue"in self&&"files"in LaunchParams.prototype)(),featureDetection:"(async () => 'launchQueue' in self && 'files' in LaunchParams.prototype)()",documentation:"https://developer.chrome.com/articles/file-handling/",blinkFeatureID:3875},"File System Access":{regEx:/showOpenFilePicker\s*\(|showSaveFilePicker\s*\(|showDirectoryPicker\s*\(/g,where:"JavaScript",supported:(async()=>"showOpenFilePicker"in self)(),featureDetection:"(async () => 'showOpenFilePicker' in self)()",documentation:"https://developer.chrome.com/articles/file-system-access/",blinkFeatureID:3340},"Origin Private File System":{regEx:/navigator\.storage\.getDirectory\s*\(\)/g,where:"JavaScript",supported:(async()=>"getDirectory"in StorageManager.prototype)(),featureDetection:"(async () => 'getDirectory' in StorageManager.prototype)()",documentation:"https://developer.chrome.com/articles/file-system-access/#accessing-the-origin-private-file-system",blinkFeatureID:3428},Gamepad:{regEx:/navigator\.getGamepads\s*\(/g,where:"JavaScript",supported:(async()=>"getGamepads"in navigator)(),featureDetection:"(async () => 'getGamepads' in navigator)()",documentation:"https://web.dev/gamepad/",blinkFeatureID:1916},getInstalledRelatedApps:{regEx:/navigator\.getInstalledRelatedApps\s*\(/g,where:"JavaScript",supported:(async()=>"getInstalledRelatedApps"in navigator)(),featureDetection:"(async () => 'getInstalledRelatedApps' in navigator)()",documentation:"https://web.dev/get-installed-related-apps/",blinkFeatureID:1870},"Gravity Sensor":{regEx:/new\s+GravitySensor\s*\(/g,where:"JavaScript",supported:(async()=>"GravitySensor"in self)(),featureDetection:"(async () => 'GravitySensor' in self)()",documentation:"https://developer.chrome.com/articles/generic-sensor/",blinkFeatureID:3795},Gyroscope:{regEx:/new\s+Gyroscope\s*\(/g,where:"JavaScript",supported:(async()=>"Gyroscope"in self)(),featureDetection:"(async () => 'Gyroscope' in self)()",documentation:"https://developer.chrome.com/articles/generic-sensor/",blinkFeatureID:1906},"Handwriting Recognition":{regEx:/navigator\.queryHandwritingRecognizerSupport\s*\(/g,where:"JavaScript",supported:(async()=>"queryHandwritingRecognizerSupport"in navigator)(),featureDetection:"(async () => 'queryHandwritingRecognizerSupport' in navigator)()",documentation:"https://developer.chrome.com/docs/web-platform/handwriting-recognition/",blinkFeatureID:3893},HapticsDevice:{regEx:/\.haptics\.play\s*\(/g,where:"JavaScript",supported:(async()=>"HapticsDevice"in self)(),featureDetection:"(async () => 'HapticsDevice' in self)()",documentation:"https://github.com/MicrosoftEdge/MSEdgeExplainers/blob/main/HapticsDevice/explainer.md",blinkFeatureID:void 0},"Idle Detection":{regEx:/new\s+IdleDetector\s*\(/g,where:"JavaScript",supported:(async()=>"IdleDetector"in self)(),featureDetection:"(async () => 'IdleDetector' in self)()",documentation:"https://developer.chrome.com/articles/idle-detection/",blinkFeatureID:2834},Ink:{regEx:/navigator\.ink\.requestPresenter\s*\(/g,where:"JavaScript",supported:(async()=>"ink"in navigator)(),featureDetection:"(async () => 'ink' in navigator)()",documentation:"https://blogs.windows.com/msedgedev/2021/08/18/enhancing-inking-on-the-web/",blinkFeatureID:void 0},"Insertable streams for MediaStreamTrack":{regEx:/MediaStreamTrackProcessor\s*\(/g,where:"JavaScript",supported:(async()=>"MediaStreamTrackProcessor"in self&&"MediaStreamTrackGenerator"in self)(),featureDetection:"(async () => 'MediaStreamTrackProcessor' in self && 'MediaStreamTrackGenerator' in self)()",documentation:"https://developer.chrome.com/articles/mediastreamtrack-insertable-media-processing/",blinkFeatureID:3729},"Launch Handler":{regEx:/"launch_handler"/g,where:"Web App Manifest",supported:(async()=>"launchQueue"in self&&"targetURL"in LaunchParams.prototype)(),featureDetection:"(async () => 'launchQueue' in self && 'targetURL' in LaunchParams.prototype)()",documentation:"https://developer.chrome.com/docs/web-platform/launch-handler/",blinkFeatureID:void 0},"Linear Acceleration Sensor":{regEx:/new\s+LinearAccelerationSensor\s*\(/g,where:"JavaScript",supported:(async()=>"LinearAccelerationSensor"in self)(),featureDetection:"(async () => 'LinearAccelerationSensor' in self)()",documentation:"https://developer.chrome.com/articles/generic-sensor/",blinkFeatureID:2051},"Local Font Access":{regEx:/queryLocalFonts\s*\(/g,where:"JavaScript",supported:(async()=>"queryLocalFonts"in self)(),featureDetection:"(async () => 'queryLocalFonts' in self)()",documentation:"https://developer.chrome.com/articles/local-fonts/",blinkFeatureID:4211},Magnetometer:{regEx:/new\s+Magnetometer\s*\(/g,where:"JavaScript",supported:(async()=>"Magnetometer"in self)(),featureDetection:"(async () => 'Magnetometer' in self)()",documentation:"https://developer.chrome.com/articles/generic-sensor/",blinkFeatureID:1907},"Media Capabilities":{regEx:/navigator\.mediaCapabilities\.decodingInfo\s*\(/g,where:"JavaScript",supported:(async()=>"mediaCapabilities"in navigator)(),featureDetection:"(async () => 'mediaCapabilities' in navigator)()",documentation:"https://developer.mozilla.org/en-US/docs/Web/API/Media_Capabilities_API",blinkFeatureID:2239},"Media Session":{regEx:/navigator\.mediaSession\.setActionHandler|navigator\.mediaSession\.metadata/g,where:"JavaScript",supported:(async()=>"mediaSession"in navigator)(),featureDetection:"(async () => 'mediaSession' in navigator)()",documentation:"https://developer.mozilla.org/en-US/docs/Web/API/Media_Session_API",blinkFeatureID:1792},"Multi-Screen Window Placement":{regEx:/getScreenDetails\s*\(\)/g,where:"JavaScript",supported:(async()=>"getScreenDetails"in self)(),featureDetection:"(async () => 'getScreenDetails' in self)()",documentation:"https://developer.chrome.com/articles/multi-screen-window-placement/",blinkFeatureID:3388},"Navigation Preload":{regEx:/\.navigationPreload\.enable\s*\(\)/g,where:"JavaScript",supported:(async()=>"serviceWorker"in navigator&&"navigationPreload"in(await navigator.serviceWorker?.ready||self.registration))(),featureDetection:"(async () => 'serviceWorker' in navigator && 'navigationPreload' in (await navigator.serviceWorker?.ready || self.registration))()",documentation:"https://developer.mozilla.org/en-US/docs/Web/API/NavigationPreloadManager",blinkFeatureID:1803},"Payment Handler":{regEx:/\.paymentManager\.instruments\.set\s*\(/g,where:"JavaScript",supported:(async()=>"PaymentInstruments"in self)(),featureDetection:"(async () => 'PaymentInstruments' in self)()",documentation:"https://web.dev/registering-a-web-based-payment-app/",blinkFeatureID:2397},"Payment Request":{regEx:/new\s+PaymentRequest\s*\(/g,where:"JavaScript",supported:(async()=>"PaymentRequest"in self)(),featureDetection:"(async () => 'PaymentRequest' in self)()",documentation:"https://developer.mozilla.org/en-US/docs/Web/API/Payment_Request_API",blinkFeatureID:2894},"Periodic Background Sync":{regEx:/periodicSync\.register\s*\(/g,where:"JavaScript",supported:(async()=>"PeriodicSyncManager"in self)(),featureDetection:"(async () => 'PeriodicSyncManager' in self)()",documentation:"https://developer.chrome.com/articles/periodic-background-sync/",blinkFeatureID:2931},"Persistent Storage":{regEx:/navigator\.storage\.persist\s*\(\)/g,where:"JavaScript",supported:(async()=>"storage"in navigator&&"persist"in navigator.storage)(),featureDetection:"(async () => 'storage' in navigator && 'persist' in navigator.storage)()",documentation:"https://developer.mozilla.org/en-US/docs/Web/API/StorageManager/persist",blinkFeatureID:1369},"Pointer Lock (unadjustedMovement)":{regEx:/unadjustedMovement\s*\:\s*/g,where:"JavaScript",supported:(async()=>"HTMLParagraphElement"in self?await(async()=>{try{return!!await document.createElement("p").requestPointerLock({unadjustedMovement:!0})}catch{return"requestPointerLock"in HTMLParagraphElement.prototype}})():void 0)(),featureDetection:`(async () => 'HTMLParagraphElement' in self ? await (async () => { try { return !!await document.createElement("p").requestPointerLock({ unadjustedMovement: true }) } catch { return 'requestPointerLock' in HTMLParagraphElement.prototype } })() : undefined)()`,documentation:"https://web.dev/disable-mouse-acceleration/",blinkFeatureID:3027},"Protocol Handlers":{regEx:/"protocol_handlers"/g,where:"Web App Manifest",supported:(async()=>{})(),featureDetection:"(async () => undefined)()",documentation:"https://developer.chrome.com/articles/url-protocol-handler/",blinkFeatureID:3884},Push:{regEx:/\.pushManager\.subscribe\s*\(/g,where:"JavaScript",supported:(async()=>"serviceWorker"in navigator&&"pushManager"in(await navigator.serviceWorker?.ready||self.registration))(),featureDetection:"(async () => 'serviceWorker' in navigator && 'pushManager' in (await navigator.serviceWorker?.ready || self.registration))()",documentation:"https://developer.mozilla.org/en-US/docs/Web/API/Push_API",blinkFeatureID:769},"Relative Orientation Sensor":{regEx:/new\s+RelativeOrientationSensor\s*\(/g,where:"JavaScript",supported:(async()=>"RelativeOrientationSensor"in self)(),featureDetection:"(async () => 'RelativeOrientationSensor' in self)()",documentation:"https://developer.chrome.com/articles/generic-sensor/",blinkFeatureID:2019},"Screen Wake Lock":{regEx:/navigator\.wakeLock\.request\s*\(/g,where:"JavaScript",supported:(async()=>"wakeLock"in navigator)(),featureDetection:"(async () => 'wakeLock' in navigator)()",documentation:"https://developer.chrome.com/articles/wake-lock/",blinkFeatureID:3005},"Service Worker":{regEx:/navigator\.serviceWorker\.register\s*\(/g,where:"JavaScript",supported:(async()=>"serviceWorker"in navigator)(),featureDetection:"(async () => 'serviceWorker' in navigator)()",documentation:"https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API",blinkFeatureID:990},"Shape Detection (Barcodes)":{regEx:/new\s+BarcodeDetector\s*\(/g,where:"JavaScript",supported:(async()=>"BarcodeDetector"in self)(),featureDetection:"(async () => 'BarcodeDetector' in self)()",documentation:"https://developer.chrome.com/articles/shape-detection/",blinkFeatureID:3711},"Shape Detection (Faces)":{regEx:/new\s+FaceDetector\s*\(/g,where:"JavaScript",supported:(async()=>"FaceDetector"in self)(),featureDetection:"(async () => 'FaceDetector' in self)()",documentation:"https://developer.chrome.com/articles/shape-detection/",blinkFeatureID:3712},"Shape Detection (Texts)":{regEx:/new\s+TextDetector\s*\(/g,where:"JavaScript",supported:(async()=>"TextDetector"in self)(),featureDetection:"(async () => 'TextDetector' in self)()",documentation:"https://developer.chrome.com/articles/shape-detection/",blinkFeatureID:3713},Shortcuts:{regEx:/"shortcuts"/g,where:"Web App Manifest",supported:(async()=>{})(),featureDetection:"(async () => undefined)()",documentation:"https://web.dev/app-shortcuts/",blinkFeatureID:void 0},"Storage Estimation":{regEx:/navigator\.storage\.estimate\s*\(\)/g,where:"JavaScript",supported:(async()=>"storage"in navigator&&"estimate"in navigator.storage)(),featureDetection:"(async () => 'storage' in navigator && 'estimate' in navigator.storage)()",documentation:"https://developer.mozilla.org/en-US/docs/Web/API/StorageManager/estimate",blinkFeatureID:1371},"Tabbed Application Mode":{regEx:/"tabbed"/g,where:"Web App Manifest",supported:(async()=>{})(),featureDetection:"(async () => undefined)()",documentation:"https://web.dev/tabbed-application-mode/",blinkFeatureID:void 0},VirtualKeyboard:{regEx:/navigator\.virtualKeyboard/g,where:"JavaScript",supported:(async()=>"virtualKeyboard"in navigator)(),featureDetection:"(async () => 'virtualKeyboard' in navigator)()",documentation:"https://github.com/MicrosoftEdge/MSEdgeExplainers/blob/main/VirtualKeyboardAPI/explainer.md",blinkFeatureID:void 0},"Web App Link Handling":{regEx:/"handle_links"/g,where:"Web App Manifest",supported:(async()=>{})(),featureDetection:"(async () => undefined)()",documentation:"https://github.com/WICG/pwa-url-handler/blob/main/handle_links/explainer.md",blinkFeatureID:void 0},"Web Audio":{regEx:/new\s+AudioContext\s*\(/g,where:"JavaScript",supported:(async()=>"AudioContext"in self)(),featureDetection:"(async () => 'AudioContext' in self)()",documentation:"https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API",blinkFeatureID:1698},"Web Share":{regEx:/navigator\.share\s*\(/g,where:"JavaScript",supported:(async()=>"share"in navigator)(),featureDetection:"(async () => 'share' in navigator)()",documentation:"https://web.dev/web-share/",blinkFeatureID:1501},"Web Share (Files)":{regEx:/navigator\.canShare\s*\(/g,where:"JavaScript",supported:(async()=>"canShare"in navigator)(),featureDetection:"(async () => 'canShare' in navigator)()",documentation:"https://web.dev/web-share/",blinkFeatureID:2737},"Web Share Target":{regEx:/"share_target"/g,where:"Web App Manifest",supported:(async()=>{})(),featureDetection:"(async () => undefined)()",documentation:"https://developer.chrome.com/articles/web-share-target/",blinkFeatureID:void 0},"Web Share Target (Files)":{regEx:/"enctype"\s*\:\s*"multipart\/form\-data"/g,where:"Web App Manifest",supported:(async()=>{})(),featureDetection:"(async () => undefined)()",documentation:"https://developer.chrome.com/articles/web-share-target/",blinkFeatureID:void 0},"Web Bluetooth":{regEx:/navigator\.bluetooth\.requestDevice\s*\(/g,where:"JavaScript",supported:(async()=>"bluetooth"in navigator)(),featureDetection:"(async () => 'bluetooth' in navigator)()",documentation:"https://developer.chrome.com/articles/bluetooth/",blinkFeatureID:1670},WebCodecs:{regEx:/new\s+MediaStreamTrackProcessor\s*\(/g,where:"JavaScript",supported:(async()=>"MediaStreamTrackProcessor"in self)(),featureDetection:"(async () => 'MediaStreamTrackProcessor' in self)()",documentation:"https://developer.chrome.com/articles/webcodecs/",blinkFeatureID:3728},WebGPU:{regEx:/navigator\.gpu\.requestAdapter\s*\(/g,where:"JavaScript",supported:(async()=>"gpu"in navigator)(),featureDetection:"(async () => 'gpu' in navigator)()",documentation:"https://developer.chrome.com/docs/web-platform/webgpu/",blinkFeatureID:3888},WebHID:{regEx:/navigator\.hid\.requestDevice\s*\(/g,where:"JavaScript",supported:(async()=>"hid"in navigator)(),featureDetection:"(async () => 'hid' in navigator)()",documentation:"https://developer.chrome.com/articles/hid/",blinkFeatureID:2866},"Web MIDI":{regEx:/navigator\.requestMIDIAccess\s*\(/g,where:"JavaScript",supported:(async()=>"requestMIDIAccess"in navigator)(),featureDetection:"(async () => 'requestMIDIAccess' in navigator)()",documentation:"https://developer.mozilla.org/en-US/docs/Web/API/Web_MIDI_API",blinkFeatureID:2029},"Web NFC":{regEx:/new\s+NDEFReader\s*\(/g,where:"JavaScript",supported:(async()=>"NDEFReader"in self)(),featureDetection:"(async () => 'NDEFReader' in self)()",documentation:"https://web.dev/nfc/",blinkFeatureID:3094},WebOTP:{regEx:/transport\s*\:\s*\[["']sms["']\]/g,where:"JavaScript",supported:(async()=>"OTPCredential"in self)(),featureDetection:"(async () => 'OTPCredential' in self)()",documentation:"https://web.dev/web-otp/",blinkFeatureID:2880},"Web Serial":{regEx:/navigator\.serial\.requestPort\s*\(/g,where:"JavaScript",supported:(async()=>"serial"in navigator)(),featureDetection:"(async () => 'serial' in navigator)()",documentation:"https://developer.chrome.com/articles/serial/",blinkFeatureID:2546},WebSocketStream:{regEx:/new\s+WebSocketStream\s*\(/g,where:"JavaScript",supported:(async()=>"WebSocketStream"in self)(),featureDetection:"(async () => 'WebSocketStream' in self)()",documentation:"https://developer.chrome.com/articles/websocketstream/",blinkFeatureID:3018},WebTransport:{regEx:/new\s+WebTransport\s*\(/g,where:"JavaScript",supported:(async()=>"WebTransport"in self)(),featureDetection:"(async () => 'WebTransport' in self)()",documentation:"https://web.dev/webtransport/",blinkFeatureID:3472},WebUSB:{regEx:/navigator\.usb\.requestDevice\s*\(/g,where:"JavaScript",supported:(async()=>"usb"in navigator)(),featureDetection:"(async () => 'usb' in navigator)()",documentation:"https://developer.chrome.com/articles/usb/",blinkFeatureID:1520},"Window Controls Overlay":{regEx:/"window\-controls\-overlay"/g,where:"Web App Manifest",supported:(async()=>"windowControlsOverlay"in navigator)(),featureDetection:"(async () => 'windowControlsOverlay' in navigator)()",documentation:"https://web.dev/window-controls-overlay/",blinkFeatureID:3902}};var ne=function(a){var o={};function t(e){if(o[e])return o[e].exports;var r=o[e]={i:e,l:!1,exports:{}};return a[e].call(r.exports,r,r.exports,t),r.l=!0,r.exports}return t.m=a,t.c=o,t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:n})},t.r=function(e){typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,r){if(1&r&&(e=t(e)),8&r||4&r&&typeof e=="object"&&e&&e.__esModule)return e;var n=Object.create(null);if(t.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&r&&typeof e!="string")for(var s in e)t.d(n,s,function(u){return e[u]}.bind(null,s));return n},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},t.p="",t(t.s=1)}([function(a,o,t){var e=t(2),r=t(3),n=t(4);a.exports=function(s){return e(s)||r(s)||n()}},function(a,o,t){t.r(o),t.d(o,"sparkline",function(){return v});var e=t(0),r=t.n(e);function n(i,c,l,d){return parseFloat((c-d*c/i+l).toFixed(2))}function s(i){return i.value}function u(i,c){var l=document.createElementNS("http://www.w3.org/2000/svg",i);for(var d in c)l.setAttribute(d,c[d]);return l}function v(i,c,l){var d;if(d=i,r()(d.querySelectorAll("*")).forEach(function(p){return d.removeChild(p)}),!(c.length<=1)){l=l||{},typeof c[0]=="number"&&(c=c.map(function(p){return{value:p}}));var A=l.onmousemove,_=l.onmouseout,G="interactive"in l?l.interactive:!!A,k=l.spotRadius||2,w=2*k,N=l.cursorWidth||2,W=parseFloat(i.attributes["stroke-width"].value),j=l.fetch||s,I=c.map(function(p){return j(p)}),z=parseFloat(i.attributes.width.value)-2*w,x=parseFloat(i.attributes.height.value),O=x-2*W-w,T=Math.max.apply(Math,r()(I)),h=-1e3,q=I.length-1,$=z/q,D=[],V=n(T,O,W+k,I[0]),M="M".concat(w," ").concat(V);I.forEach(function(p,f){var m=f*$+w,y=n(T,O,W+k,p);D.push(Object.assign({},c[f],{index:f,x:m,y})),M+=" L ".concat(m," ").concat(y)});var K=u("path",{class:"sparkline--line",d:M,fill:"none"}),Q=u("path",{class:"sparkline--fill",d:"".concat(M," V ").concat(x," L ").concat(w," ").concat(x," Z"),stroke:"none"});if(i.appendChild(Q),i.appendChild(K),G){var S=u("line",{class:"sparkline--cursor",x1:h,x2:h,y1:0,y2:x,"stroke-width":N}),E=u("circle",{class:"sparkline--spot",cx:h,cy:h,r:k});i.appendChild(S),i.appendChild(E);var J=u("rect",{width:i.attributes.width.value,height:i.attributes.height.value,style:"fill: transparent; stroke: transparent",class:"sparkline--interaction-layer"});i.appendChild(J),J.addEventListener("mouseout",function(p){S.setAttribute("x1",h),S.setAttribute("x2",h),E.setAttribute("cx",h),_&&_(p)}),J.addEventListener("mousemove",function(p){var f=p.offsetX,m=D.find(function(X){return X.x>=f});m||(m=D[q]);var y,P=D[D.indexOf(m)-1],L=(y=P?P.x+(m.x-P.x)/2<=f?m:P:m).x,Y=y.y;E.setAttribute("cx",L),E.setAttribute("cy",Y),S.setAttribute("x1",L),S.setAttribute("x2",L),A&&A(p,y)})}}}o.default=v},function(a,o){a.exports=function(t){if(Array.isArray(t)){for(var e=0,r=new Array(t.length);e<t.length;e++)r[e]=t[e];return r}}},function(a,o){a.exports=function(t){if(Symbol.iterator in Object(t)||Object.prototype.toString.call(t)==="[object Arguments]")return Array.from(t)}},function(a,o){a.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}}]);const ae="https://chromestatus.com/data/timeline/featurepopularity?bucket_id=",oe="https://chromestatus.com/metrics/feature/timeline/popularity/",H="No data",U=document.querySelector("tbody"),g=document.querySelector("meter"),F=document.querySelector(".meter"),B=document.querySelector("label"),ie=document.querySelector("code"),se=document.querySelector("template");let b=0,C=0;const ce=(a,o)=>{const e=a.target.closest("svg").nextElementSibling,r=new Date(o.date).toLocaleDateString(void 0,{year:"numeric",month:"short",day:"numeric"});e.hidden=!1,e.textContent=`On ${r} on ${o.value.toFixed(6)}% of pages`,e.style.top=`${a.offsetY}px`,e.style.left=`${a.offsetX+20}px`},le=a=>{const t=a.target.closest("svg").nextElementSibling;t.hidden=!0},ue=async(a,o)=>{let t=await fetch(ae+o).then(e=>e.json());if(t=t.map(e=>({date:e.date,value:e.day_percentage*100})),t.filter(e=>e.value!==0).length===0){const e=a.parentNode.parentNode;a.parentNode.remove(),e.textContent=H;return}ne.sparkline(a,t,{onmousemove:ce,onmouseout:le}),a.setAttribute("width","100%"),a.setAttribute("height","100%"),a.style.display="block"};window.addEventListener("load",async()=>{"serviceWorker"in navigator&&await navigator.serviceWorker.register("./sw.js");let a=await Promise.all(Object.entries(re).map(t=>new Promise(async e=>{t[1].supported=await t[1].supported,t[1].supported&&C++,t[1].supported!==void 0&&b++,e(t)})));a=a.sort((t,e)=>!t[1].supported&&e[1].supported?1:t[1].supported&&!e[1].supported?-1:0),a=[!0,!1,void 0].map(t=>a.filter(e=>e[1].supported===t).sort((e,r)=>(e=e[0].toLowerCase(),r=r[0].toLowerCase(),e>r?1:e<r?-1:0))).flat();for(const[t,e]of a){const r=document.createElement("tr");U.append(r);const n=document.createElement("td"),s=document.createElement("td"),u=document.createElement("td");r.append(n),r.append(s),r.append(u);const v=document.createElement("a");if(v.textContent=t,v.href=e.documentation,n.append(v),s.classList.add("icon"),s.textContent=e.supported?"✅ Yes":e.supported===void 0?"🤷 Unknown":"🚫 No",e.blinkFeatureID){const i=se.content.cloneNode(!0),c=i.querySelector("svg");c.style.display="none";const l=i.querySelector("span"),d=document.createElement("a");d.href=`${oe}${e.blinkFeatureID}`,u.append(d),d.append(c),d.append(l),ue(c,e.blinkFeatureID)}else u.textContent=H}U.parentNode.hidden=!1;const o=`${Math.floor(C/b*100)}%`;g.max=b,g.low=Math.floor(.2*b),g.high=Math.floor(.8*b),g.optimum=Math.floor(.9*b),g.value=C,F.querySelector("span").style.width=o,g.value<g.low?F.classList.add("red"):g.value<=g.low&&g.value<=g.high?F.classList.add("orange"):F.classList.add("green"),B.textContent=o,B.parentNode.hidden=!1,document.querySelector("[hidden].legend").hidden=!1,ie.textContent=navigator.userAgent,te(()=>import("./share-b2801a0d.js"),[])});
