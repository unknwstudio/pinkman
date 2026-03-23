/* nav.js — dropdown hover + mobile menu (replaces removed Webflow.js nav logic) */
(function () {
  'use strict';

  /* ── Mobile hamburger toggle ────────────────────────────────────────── */
  var menuBtn  = document.querySelector('.mobile-menu-btn');
  var navMenu  = document.querySelector('.nav-menu');

  if (menuBtn && navMenu) {
    menuBtn.addEventListener('click', function () {
      var isOpen = menuBtn.classList.toggle('w--open');
      navMenu.classList.toggle('w--open', isOpen);
      // animate hamburger lines
      var lines = menuBtn.querySelectorAll('.ham-line');
      lines.forEach(function (l) { l.classList.toggle('active', isOpen); });
    });
  }

  /* ── Mobile accordion dropdowns ─────────────────────────────────────── */
  document.querySelectorAll('.header-dropdown-wrapper.hide-desktop .dropdown-trigger')
    .forEach(function (trigger) {
      trigger.addEventListener('click', function () {
        var wrapper  = trigger.closest('.header-dropdown-wrapper');
        var list     = wrapper && wrapper.querySelector('.header-dropdown');
        var arrow    = wrapper && wrapper.querySelector('.dropdown-arrow-image');
        if (!list) return;
        var open = list.classList.toggle('w--open');
        if (arrow) arrow.style.transform = open ? 'rotate(180deg)' : '';
      });
    });
})();
