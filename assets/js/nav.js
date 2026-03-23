/* nav.js — dropdown hover + mobile menu + sticky button */
(function () {
  'use strict';

  /* ── Mobile hamburger toggle ─────────────────────────────────────── */
  var menuBtn = document.querySelector('.mobile-menu-btn');
  var navMenu = document.querySelector('.nav-menu');

  if (menuBtn && navMenu) {
    menuBtn.addEventListener('click', function () {
      var isOpen = menuBtn.classList.toggle('w--open');
      navMenu.classList.toggle('w--open', isOpen);
    });

    /* Close menu on outside click */
    document.addEventListener('click', function (e) {
      if (navMenu.classList.contains('w--open') &&
          !navMenu.contains(e.target) &&
          !menuBtn.contains(e.target)) {
        menuBtn.classList.remove('w--open');
        navMenu.classList.remove('w--open');
      }
    });
  }

  /* ── Mobile accordion dropdowns ──────────────────────────────────── */
  document.querySelectorAll('.header-dropdown-wrapper.hide-desktop .dropdown-trigger')
    .forEach(function (trigger) {
      trigger.addEventListener('click', function () {
        var wrapper = trigger.closest('.header-dropdown-wrapper');
        var list    = wrapper && wrapper.querySelector('.header-dropdown');
        var arrow   = wrapper && wrapper.querySelector('.dropdown-arrow-image');
        if (!list) return;
        var open = list.classList.toggle('w--open');
        if (arrow) arrow.style.transform = open ? 'rotate(180deg)' : '';
      });
    });

  /* ── Sticky "Обсудить проект" — hide near footer ─────────────────── */
  var stickyBtn = document.querySelector('.sticky-discuss');
  if (stickyBtn) {
    var footer = document.querySelector('.footer-top');
    var ticking = false;
    function checkScroll() {
      if (!footer) return;
      var footerTop = footer.getBoundingClientRect().top;
      var nearFooter = footerTop < window.innerHeight + 40;
      stickyBtn.classList.toggle('is-hidden', nearFooter);
      ticking = false;
    }
    window.addEventListener('scroll', function () {
      if (!ticking) { requestAnimationFrame(checkScroll); ticking = true; }
    }, { passive: true });
    checkScroll();
  }

})();
