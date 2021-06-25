export default {
  'WebBluetooth': {
    regEx: /navigator\.bluetooth\.requestDevice\s*\(/g,
    where: 'JavaScript',
    supported: (async () => 'bluetooth' in navigator)(),
    featureDetection: `(async () => 'bluetooth' in navigator)()`,
  },
  'WebUSB': {
    regEx: /navigator\.usb\.requestDevice\s*\(/g,
    where: 'JavaScript',
    supported: (async () => 'usb' in navigator)(),
    featureDetection: `(async () => 'usb' in navigator)()`,
  },
  'Web Share': {
    regEx: /navigator\.share\s*\(/g,
    where: 'JavaScript',
    supported: (async () => 'share' in navigator)(),
    featureDetection: `(async () => 'share' in navigator)()`,
  },
  'Web Share (Files)': {
    regEx: /navigator\.canShare\s*\(/g,
    where: 'JavaScript',
    supported: (async () => 'canShare' in navigator)(),
    featureDetection: `(async () => 'canShare' in navigator)()`,
  },
  'Async Clipboard': {
    regEx: /navigator\.clipboard\.writeText\s*\(/g,
    where: 'JavaScript',
    supported: (async () =>
      'clipboard' in navigator && 'writeText' in navigator.clipboard)(),
    featureDetection: `(async () => 'clipboard' in navigator && 'writeText' in navigator.clipboard)()`,
  },
  'Async Clipboard (Images)': {
    regEx: /navigator\.clipboard\.write\s*\(/g,
    where: 'JavaScript',
    supported: (async () =>
      'clipboard' in navigator && 'write' in navigator.clipboard)(),
    featureDetection: `(async () => 'clipboard' in navigator && 'write' in navigator.clipboard)()`,
  },
  'Contact Picker': {
    regEx: /navigator\.contacts\.select\s*\(/g,
    where: 'JavaScript',
    supported: (async () => 'contacts' in navigator)(),
    featureDetection: `(async () => 'contacts' in navigator)()`,
  },
  'getInstalledRelatedApps': {
    regEx: /navigator\.getInstalledRelatedApps\s*\(/g,
    where: 'JavaScript',
    supported: (async () => 'getInstalledRelatedApps' in navigator)(),
    featureDetection: `(async () => 'getInstalledRelatedApps' in navigator)()`,
  },
  'Compression Streams': {
    regEx: /new CompressionStream\s*\(/g,
    where: 'JavaScript',
    supported: (async () => 'CompressionStream' in self)(),
    featureDetection: `(async () => 'CompressionStream' in self)()`,
  },
  'Periodic Background Sync': {
    regEx: /periodicSync\.register\s*\(/g,
    where: 'JavaScript',
    supported: (async () =>
      'periodicSync' in
      ((await navigator.serviceWorker?.ready) || self.registration))(),
    featureDetection: `(async () => 'periodicSync' in (await navigator.serviceWorker?.ready || self.registration))()`,
  },
  'Badging': {
    regEx: /navigator\.setAppBadge\s*\(/g,
    where: 'JavaScript',
    supported: (async () => 'setAppBadge' in navigator)(),
    featureDetection: `(async () => 'setAppBadge' in navigator)()`,
  },
  'Shape Detection (Barcodes)': {
    regEx: /new BarcodeDetector\s*\(/g,
    where: 'JavaScript',
    supported: (async () => 'BarcodeDetector' in self)(),
    featureDetection: `(async () => 'BarcodeDetector' in self)()`,
  },
  'Shape Detection (Faces)': {
    regEx: /new FaceDetector\s*\(/g,
    where: 'JavaScript',
    supported: (async () => 'FaceDetector' in self)(),
    featureDetection: `(async () => 'FaceDetector' in self)()`,
  },
  'Shape Detection (Texts)': {
    regEx: /new TextDetector\s*\(/g,
    where: 'JavaScript',
    supported: (async () => 'TextDetector' in self)(),
    featureDetection: `(async () => 'TextDetector' in self)()`,
  },
  'Screen Wake Lock': {
    regEx: /navigator\.wakeLock\.request\s*\(/g,
    where: 'JavaScript',
    supported: (async () => 'wakeLock' in navigator)(),
    featureDetection: `(async () => 'wakeLock' in navigator)()`,
  },
  'Content Index': {
    regEx: /index\.getAll\s*\(/g,
    where: 'JavaScript',
    supported: (async () =>
      'index' in
      ((await navigator.serviceWorker?.ready) || self.registration))(),
    featureDetection: `(async () => 'index' in (await navigator.serviceWorker?.ready || self.registration))()`,
  },
  'Credential Management': {
    regEx: /navigator\.credentials\.get\s*\(/g,
    where: 'JavaScript',
    supported: (async () => 'credentials' in navigator)(),
    featureDetection: `(async () => 'credentials' in navigator)()`,
  },
  'WebOTP': {
    regEx: /transport\s*\:\s*\[["']sms["']\]/g,
    where: 'JavaScript',
    supported: (async () => 'OTPCredential' in self)(),
    featureDetection: `(async () => 'OTPCredential' in self)()`,
  },
  'File System Access': {
    regEx: /showOpenFilePicker\s*\(/g,
    where: 'JavaScript',
    supported: (async () => 'showOpenFilePicker' in self)(),
    featureDetection: `(async () => 'showOpenFilePicker' in self)()`,
  },
  'Pointer Lock (unadjustedMovement)': {
    regEx: /unadjustedMovement\s*\:\s*/g,
    where: 'JavaScript',
    supported: (async () =>
      await (async () => {
        try {
          return !!(await document
            .createElement('p')
            .requestPointerLock({ unadjustedMovement: true }));
        } catch {
          return true;
        }
      })())(),
    featureDetection: `(async () => await (async () => { try { return !!await document.createElement("p").requestPointerLock({ unadjustedMovement: true }) } catch { return true } })())()`,
  },
  'WebHID': {
    regEx: /navigator\.hid\.requestDevice\s*\(/g,
    where: 'JavaScript',
    supported: (async () => 'hid' in navigator)(),
    featureDetection: `(async () => 'hid' in navigator)()`,
  },
  'WebSerial': {
    regEx: /navigator\.serial\.requestPort\s*\(/g,
    where: 'JavaScript',
    supported: (async () => 'serial' in navigator)(),
    featureDetection: `(async () => 'serial' in navigator)()`,
  },
  'WebNFC': {
    regEx: /new NDEFReader\s*\(/g,
    where: 'JavaScript',
    supported: (async () => 'NDEFReader' in self)(),
    featureDetection: `(async () => 'NDEFReader' in self)()`,
  },
  'Run On Login': {
    regEx: /navigator\.runOnOsLogin\.set\s*\(/g,
    where: 'JavaScript',
    supported: (async () => 'runOnOsLogin' in navigator)(),
    featureDetection: `(async () => 'runOnOsLogin' in navigator)()`,
  },
  'WebCodecs': {
    regEx: /new MediaStreamTrackProcessor\s*\(/g,
    where: 'JavaScript',
    supported: (async () => 'MediaStreamTrackProcessor' in self)(),
    featureDetection: `(async () => 'MediaStreamTrackProcessor' in self)()`,
  },
  'Digital Goods': {
    regEx: /getDigitalGoodsService\s*\(/g,
    where: 'JavaScript',
    supported: (async () => 'getDigitalGoodsService' in self)(),
    featureDetection: `(async () => 'getDigitalGoodsService' in self)()`,
  },
  'Idle Detection': {
    regEx: /new IdleDetector\s*\(/g,
    where: 'JavaScript',
    supported: (async () => 'IdleDetector' in self)(),
    featureDetection: `(async () => 'IdleDetector' in self)()`,
  },
  'Storage Foundation': {
    regEx: /storageFoundation\.open\s*\(/g,
    where: 'JavaScript',
    supported: (async () => 'storageFoundation' in self)(),
    featureDetection: `(async () => 'storageFoundation' in self)()`,
  },
  'Handwriting Recognition': {
    regEx: /navigator\.queryHandwritingRecognizerSupport\s*\(/g,
    where: 'JavaScript',
    supported: (async () => 'queryHandwritingRecognizerSupport' in navigator)(),
    featureDetection: `(async () => 'queryHandwritingRecognizerSupport' in navigator)()`,
  },
  'Compute Pressure': {
    regEx: /new ComputePressureObserver\s*\(/g,
    where: 'JavaScript',
    supported: (async () => 'ComputePressureObserver' in self)(),
    featureDetection: `(async () => 'ComputePressureObserver' in self)()`,
  },
  'Accelerometer': {
    regEx: /new Accelerometer\s*\(/g,
    where: 'JavaScript',
    supported: (async () => 'Accelerometer' in self)(),
    featureDetection: `(async () => 'Accelerometer' in self)()`,
  },
  'Gyroscope': {
    regEx: /new Gyroscope\s*\(/g,
    where: 'JavaScript',
    supported: (async () => 'Gyroscope' in self)(),
    featureDetection: `(async () => 'Gyroscope' in self)()`,
  },
  'Absolute Orientation Sensor': {
    regEx: /new AbsoluteOrientationSensor\s*\(/g,
    where: 'JavaScript',
    supported: (async () => 'AbsoluteOrientationSensor' in self)(),
    featureDetection: `(async () => 'AbsoluteOrientationSensor' in self)()`,
  },
  'Relative Orientation Sensor': {
    regEx: /new RelativeOrientationSensor\s*\(/g,
    where: 'JavaScript',
    supported: (async () => 'RelativeOrientationSensor' in self)(),
    featureDetection: `(async () => 'RelativeOrientationSensor' in self)()`,
  },
  'Gravity Sensor': {
    regEx: /new GravitySensor\s*\(/g,
    where: 'JavaScript',
    supported: (async () => 'GravitySensor' in self)(),
    featureDetection: `(async () => 'GravitySensor' in self)()`,
  },
  'Linear Acceleration Sensor': {
    regEx: /new LinearAccelerationSensor\s*\(/g,
    where: 'JavaScript',
    supported: (async () => 'LinearAccelerationSensor' in self)(),
    featureDetection: `(async () => 'LinearAccelerationSensor' in self)()`,
  },
  'Magnetometer': {
    regEx: /new Magnetometer\s*\(/g,
    where: 'JavaScript',
    supported: (async () => 'Magnetometer' in self)(),
    featureDetection: `(async () => 'Magnetometer' in self)()`,
  },
  'Ambient Light Sensor': {
    regEx: /new AmbientLightSensor\s*\(\)/g,
    where: 'JavaScript',
    supported: (async () => 'AmbientLightSensor' in self)(),
    featureDetection: `(async () => 'AmbientLightSensor' in self)()`,
  },
  'File Handling': {
    regEx: /launchQueue\.setConsumer\s*\(/g,
    where: 'JavaScript',
    supported: (async () => 'launchQueue' in self)(),
    featureDetection: `(async () => 'launchQueue' in self)()`,
  },
  'Notification Triggers': {
    regEx: /showTrigger\s*\:\s*new TimestampTrigger\s*\(/g,
    where: 'JavaScript',
    supported: (async () =>
      'Notification' in self && 'showTrigger' in Notification.prototype)(),
    featureDetection: `(async () => 'Notification' in self && 'showTrigger' in Notification.prototype)()`,
  },
  'Local Font Access': {
    regEx: /navigator\.fonts\.query\s*\(\)/g,
    where: 'JavaScript',
    supported: (async () => 'fonts' in navigator)(),
    featureDetection: `(async () => 'fonts' in navigator)()`,
  },
  'Multi-Screen Window Placement': {
    regEx: /getScreens\s*\(\)/g,
    where: 'JavaScript',
    supported: (async () => 'getScreens' in self)(),
    featureDetection: `(async () => 'getScreens' in self)()`,
  },
  'WebSocketStream': {
    regEx: /new WebSocketStream\s*\(/g,
    where: 'JavaScript',
    supported: (async () => 'WebSocketStream' in self)(),
    featureDetection: `(async () => 'WebSocketStream' in self)()`,
  },
  'WebTransport': {
    regEx: /new WebTransport\s*\(/g,
    where: 'JavaScript',
    supported: (async () => 'WebTransport' in self)(),
    featureDetection: `(async () => 'WebTransport' in self)()`,
  },
  'Gamepad': {
    regEx: /navigator\.getGamepads\s*\(/g,
    where: 'JavaScript',
    supported: (async () => 'getGamepads' in navigator)(),
    featureDetection: `(async () => 'getGamepads' in navigator)()`,
  },
  'Window Controls Overlay': {
    regEx: /"window\-controls\-overlay"/g,
    where: 'Web App Manifest',
    supported: (async () => 'windowControlsOverlay' in navigator)(),
    featureDetection: `(async () => 'windowControlsOverlay' in navigator)()`,
  },
  'Web Share Target': {
    regEx: /"share_target"/g,
    where: 'Web App Manifest',
    supported: (async () => undefined)(),
    featureDetection: `(async () => undefined)()`,
  },
  'Web Share Target (Files)': {
    regEx: /"enctype"\s*\:\s*"multipart\/form\-data"/g,
    where: 'Web App Manifest',
    supported: (async () => undefined)(),
    featureDetection: `(async () => undefined)()`,
  },
  'Shortcuts': {
    regEx: /"shortcuts"/g,
    where: 'Web App Manifest',
    supported: (async () => undefined)(),
    featureDetection: `(async () => undefined)()`,
  },
  'Declarative Link Capturing': {
    regEx: /"capture_links"/g,
    where: 'Web App Manifest',
    supported: (async () => undefined)(),
    featureDetection: `(async () => undefined)()`,
  },
  'Tabbed Application Mode': {
    regEx: /"tabbed"/g,
    where: 'Web App Manifest',
    supported: (async () => undefined)(),
    featureDetection: `(async () => undefined)()`,
  },
  'URL Handlers': {
    regEx: /"url_handlers"/g,
    where: 'Web App Manifest',
    supported: (async () => undefined)(),
    featureDetection: `(async () => undefined)()`,
  },
  'Protocol Handlers': {
    regEx: /"protocol_handlers"/g,
    where: 'Web App Manifest',
    supported: (async () => undefined)(),
    featureDetection: `(async () => undefined)()`,
  },
};
