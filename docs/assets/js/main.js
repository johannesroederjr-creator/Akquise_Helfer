/* Akquise-Helfer – Basis-Interaktionen (ohne Framework, ohne externe Requests) */
(function () {
  'use strict';

  /* --- Mobile-Navigation --- */
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.getElementById('primary-nav');

  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', String(open));
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && nav.classList.contains('is-open')) {
        nav.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
        toggle.focus();
      }
    });
  }

  /* --- FAQ: nur ein Panel gleichzeitig offen, je Akkordeon-Gruppe --- */
  document.querySelectorAll('[data-accordion="single"]').forEach(function (group) {
    var items = group.querySelectorAll('details');
    items.forEach(function (item) {
      item.addEventListener('toggle', function () {
        if (!item.open) return;
        items.forEach(function (other) {
          if (other !== item) other.open = false;
        });
      });
    });
  });

  /* --- Terminauswahl-Attrappe: Tag/Slot visuell auswählbar --- */
  document.querySelectorAll('[data-demo-select]').forEach(function (group) {
    group.addEventListener('click', function (e) {
      var btn = e.target.closest('button:not([disabled])');
      if (!btn || !group.contains(btn)) return;
      group.querySelectorAll('button[aria-pressed]').forEach(function (b) {
        b.setAttribute('aria-pressed', 'false');
      });
      btn.setAttribute('aria-pressed', 'true');
    });
  });

  function hasFunctionalConsent() {
    return !window.CookieConsent || window.CookieConsent.hasFunctional();
  }

  function showFunctionalNotice(container, onAccept) {
    var existing = container.querySelector('.embed-consent-notice');
    if (existing) return;

    var notice = document.createElement('div');
    notice.className = 'embed-consent-notice';
    notice.innerHTML =
      '<p>Für diesen Inhalt ist Ihre Zustimmung zu funktionalen Cookies erforderlich ' +
      '(Datenübertragung an den Anbieter).</p>' +
      '<button class="btn btn--primary btn--sm" type="button">Funktionale Cookies akzeptieren</button>';
    notice.querySelector('button').addEventListener('click', function () {
      if (window.CookieConsent) window.CookieConsent.acceptFunctional();
      notice.remove();
      if (onAccept) onAccept();
    });
    container.appendChild(notice);
  }

  function activateMap(box, target) {
    box.hidden = true;
    target.hidden = false;
    var active = target.querySelector('[data-src][aria-pressed="true"]') || target.querySelector('[data-src]');
    if (active) loadMap(target, active);
  }

  /* --- Google Maps erst nach Einwilligung und Klick laden --- */
  document.querySelectorAll('[data-map-consent]').forEach(function (box) {
    var btn = box.querySelector('button');
    var target = document.getElementById(box.getAttribute('data-map-target') || '');
    if (!btn || !target) return;

    btn.addEventListener('click', function () {
      if (!hasFunctionalConsent()) {
        showFunctionalNotice(box.closest('[data-map-view]') || box.parentNode, function () {
          activateMap(box, target);
        });
        return;
      }
      activateMap(box, target);
    });
  });

  function loadMap(container, button) {
    var frame = container.querySelector('iframe');
    if (!frame) return;
    frame.src = button.getAttribute('data-src');
    frame.title = 'Karte: Standort ' + (button.textContent || '').trim();
    container.querySelectorAll('[data-src]').forEach(function (b) {
      b.setAttribute('aria-pressed', String(b === button));
    });
  }

  document.querySelectorAll('[data-map-tabs]').forEach(function (tabs) {
    tabs.addEventListener('click', function (e) {
      var btn = e.target.closest('[data-src]');
      if (btn) loadMap(tabs.closest('[data-map-view]') || tabs.parentNode, btn);
    });
  });

  function activateBooking(btn) {
    var panel = btn.closest('[data-booking-view]');
    if (!panel) return;
    var intro = panel.querySelector('[data-booking-intro]');
    var frameWrap = panel.querySelector('[data-booking-frame]');
    var frame = frameWrap && frameWrap.querySelector('iframe');
    var src = frame && frame.getAttribute('data-booking-src');
    if (!frameWrap || !frame || !src) return;
    if (intro) intro.hidden = true;
    frameWrap.hidden = false;
    if (!frame.getAttribute('src')) frame.setAttribute('src', src);
  }

  /* --- Microsoft Bookings: Iframe erst nach Einwilligung und Klick --- */
  document.querySelectorAll('[data-booking-embed]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      if (!hasFunctionalConsent()) {
        var panel = btn.closest('[data-booking-view]');
        showFunctionalNotice(panel || btn.parentNode, function () {
          activateBooking(btn);
        });
        return;
      }
      activateBooking(btn);
    });
  });

  /* --- Jahreszahl im Footer --- */
  document.querySelectorAll('[data-year]').forEach(function (el) {
    el.textContent = String(new Date().getFullYear());
  });
})();
