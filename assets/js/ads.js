/* Google AdSense Auto ads loader; the page's head tag initializes the publisher account. */
(function () {
  'use strict';
  var client = 'ca-pub-9937845186486833';
  if (window.__wonderlandAdSenseLoaded) return;
  window.__wonderlandAdSenseLoaded = true;
  if (document.querySelector('script[src*="pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"]')) return;
  var script = document.createElement('script');
  script.async = true;
  script.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=' + client;
  script.crossOrigin = 'anonymous';
  document.head.appendChild(script);
})();
