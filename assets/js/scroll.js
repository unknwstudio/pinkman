/* scroll.js — v CLD345705
   Scroll-in animation engine for pinkman.ru
   Auto-tags structural elements with .anim, then triggers via IntersectionObserver.
   CSS for .anim / .anim.in lives in components.css. */
(function () {
  'use strict';

  /* ── Elements to animate on scroll ── */
  var SELECTORS = [
    '.service-point',
    '.case-card-wrapper',
    '.text-h1-wrapper',
    '.text-big-wrapper',
    '.text-h2-wrapper',
    '.list-item-wrapper',
    '.contacts-card',
  ];

  /* Add .anim to ALL matching elements.
     IntersectionObserver handles both page-load entrance animation
     (fires immediately for visible elements) and scroll animation
     (fires when elements enter the viewport while scrolling). */
  SELECTORS.forEach(function (sel) {
    document.querySelectorAll(sel).forEach(function (el) {
      el.classList.add('anim');
    });
  });

  /* ── Stagger cards within each grid ── */
  document.querySelectorAll('.service-grid').forEach(function (grid) {
    grid.querySelectorAll('.service-point, .case-card-wrapper').forEach(function (card, i) {
      if (i > 0) card.dataset.d = String(Math.min(i, 4));
    });
  });

  /* ── Trigger via IntersectionObserver ── */
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) {
        e.target.classList.add('in');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.08 });

  document.querySelectorAll('.anim').forEach(function (el) {
    io.observe(el);
  });

})();
