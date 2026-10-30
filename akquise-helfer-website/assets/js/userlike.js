/* Userlike Live-Chat – nur Startseite, erst nach Einwilligung zu funktionalen Cookies */
(function () {
  'use strict';

  var USERLIKE_SRC =
    'https://userlike-cdn-widgets.s3-eu-west-1.amazonaws.com/28a08d13372e4065bc42c0b313d1574201e79c6963cb40688d0b0a39ec83d065.js';
  var loaded = false;

  function hasFunctionalConsent() {
    return window.CookieConsent && window.CookieConsent.hasFunctional();
  }

  function loadUserlike() {
    if (loaded || !hasFunctionalConsent()) return;
    loaded = true;
    var script = document.createElement('script');
    script.async = true;
    script.type = 'text/javascript';
    script.src = USERLIKE_SRC;
    document.body.appendChild(script);
  }

  function onConsentChanged(event) {
    if (event.detail && event.detail.functional) loadUserlike();
  }

  function init() {
    loadUserlike();
    window.addEventListener('cookieConsentChanged', onConsentChanged);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
