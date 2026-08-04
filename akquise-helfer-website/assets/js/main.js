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

  /* --- Formular-Attrappen: kein Versand, klarer Hinweis --- */
  document.querySelectorAll('form[data-demo-form]').forEach(function (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var msg = form.querySelector('[data-demo-message]');
      if (msg) {
        msg.hidden = false;
        msg.focus({ preventScroll: false });
      }
    });
  });

  /* --- Google Maps erst nach Klick laden (DSGVO: kein Auto-Request an Google) --- */
  document.querySelectorAll('[data-map-consent]').forEach(function (box) {
    var btn = box.querySelector('button');
    var target = document.getElementById(box.getAttribute('data-map-target') || '');
    if (!btn || !target) return;

    btn.addEventListener('click', function () {
      box.hidden = true;
      target.hidden = false;
      var active = target.querySelector('[data-src][aria-pressed="true"]') || target.querySelector('[data-src]');
      if (active) loadMap(target, active);
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

  /* --- Jahreszahl im Footer --- */
  document.querySelectorAll('[data-year]').forEach(function (el) {
    el.textContent = String(new Date().getFullYear());
  });
})();
