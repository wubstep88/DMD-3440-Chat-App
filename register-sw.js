// Register a service worker, this one located in serviceworker.js
// A service worker is a piece of code the browser runs behind the scenes.
if ('serviceWorker' in navigator) {
    console.log('CLIENT: service worker registration in progress.');
    navigator.serviceWorker.register('sw.js').then(function() {
      console.log('CLIENT: service worker registration complete.');
    }, function() {
      console.log('CLIENT: service worker registration failure.');
    });
  } else {
    console.log('CLIENT: service workers are not supported.');
  }