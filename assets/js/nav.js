/* nav.js — v CLD345710
   Mobile nav overlay + desktop floating bar injected here.
   Update this file to update navigation on all pages. */
(function () {
  'use strict';

  /* ── Base path from URL depth ── */
  var segs = location.pathname.split('/').filter(Boolean);
  var B    = segs.length ? '../'.repeat(segs.length) : '';
  var page = segs[0] || '';

  var isHome      = page === '';
  var isPortfolio = page === 'projects';
  var isServices  = ['sites', 'digital-products', 'communications-design', 'multimedia-phygital', 'outsource-multimedia', 'outstaff-ai', 'ai-video'].indexOf(page) >= 0;
  var isContacts  = page === 'contact-us';

  /* ── Build mobile overlay HTML ── */
  function navLink(href, label, active) {
    return '<a href="' + B + href + '" class="nav-mob__link' + (active ? ' nav-mob__link--active' : '') + '">' + label + '</a>';
  }

  var overlay = document.createElement('div');
  overlay.className = 'nav-mob-overlay';
  overlay.setAttribute('aria-hidden', 'true');
  overlay.innerHTML = [
    '<nav class="nav-mob__list">',
      navLink('index.html', 'Главная',    isHome),
      navLink('projects/',  'Портфолио',  isPortfolio),

      /* Services accordion */
      '<div class="nav-mob__services">',
        '<button class="nav-mob__services-trigger" aria-expanded="false">',
          'Услуги',
          '<img class="nav-mob__arrow" src="', B, 'assets/images/67105d51be89304a2b3da27f_arrow-dropdown.svg" alt="" loading="lazy"/>',
        '</button>',
        '<div class="nav-mob__sub" hidden>',
          '<a class="nav-mob__sub-link" href="', B, 'sites/">Сайты</a>',
          '<a class="nav-mob__sub-link" href="', B, 'digital-products/">Цифровые продукты</a>',
          '<a class="nav-mob__sub-link" href="', B, 'communications-design/">Дизайн коммуникаций</a>',
          '<a class="nav-mob__sub-link" href="', B, 'multimedia-phygital/">Multimedia &amp; Phygital</a>',
          '<a class="nav-mob__sub-link" href="', B, 'outsource-multimedia/">Аутсорс мультимедиа</a>',
          '<a class="nav-mob__sub-link" href="', B, 'outstaff-ai/">Аутстафф AI-дизайнеров</a>',
          '<a class="nav-mob__sub-link" href="', B, 'ai-video/">AI-ролики для OLV&nbsp;+ DOOH</a>',
        '</div>',
      '</div>',

      navLink('contact-us/', 'Контакты', isContacts),
      '<a href="', B, 'contact-us/" class="nav-mob__cta">Обсудить проект</a>',
    '</nav>'
  ].join('');

  document.body.appendChild(overlay);

  /* ── Replace hamburger content with burger + × ── */
  var btn = document.querySelector('.mobile-menu-btn');
  if (btn) {
    btn.innerHTML =
      '<span class="nav-burger" aria-hidden="true"><i></i><i></i><i></i></span>' +
      '<span class="nav-close"  aria-hidden="true">✕</span>';
    btn.setAttribute('aria-label', 'Открыть меню');
    btn.setAttribute('aria-expanded', 'false');
  }

  /* ── Toggle open / close ── */
  var menuOpen = false;

  function openMenu() {
    menuOpen = true;
    overlay.classList.add('is-open');
    overlay.setAttribute('aria-hidden', 'false');
    if (btn) { btn.classList.add('is-open'); btn.setAttribute('aria-expanded', 'true'); }
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    menuOpen = false;
    overlay.classList.remove('is-open');
    overlay.setAttribute('aria-hidden', 'true');
    if (btn) { btn.classList.remove('is-open'); btn.setAttribute('aria-expanded', 'false'); }
    document.body.style.overflow = '';
  }

  if (btn) {
    btn.addEventListener('click', function (e) {
      e.stopPropagation();
      menuOpen ? closeMenu() : openMenu();
    });
  }

  /* Close when any nav link is tapped */
  overlay.querySelectorAll('a').forEach(function (a) {
    a.addEventListener('click', closeMenu);
  });

  /* ── Services accordion ── */
  var svcBtn   = overlay.querySelector('.nav-mob__services-trigger');
  var svcSub   = overlay.querySelector('.nav-mob__sub');
  var svcArrow = overlay.querySelector('.nav-mob__arrow');

  if (svcBtn && svcSub) {
    svcBtn.addEventListener('click', function () {
      var open = svcBtn.getAttribute('aria-expanded') !== 'true';
      svcBtn.setAttribute('aria-expanded', String(open));
      svcSub.hidden = !open;
      if (svcArrow) svcArrow.style.transform = open ? '' : 'rotate(180deg)';
    });
  }

  /* ── Scroll-hide header ── */
  var header  = document.querySelector('.header-new');
  var lastY   = window.scrollY;
  var ticking = false;

  if (header) {
    window.addEventListener('scroll', function () {
      if (!ticking) {
        requestAnimationFrame(function () {
          var y = window.scrollY;
          if (y > lastY && y > 80 && !menuOpen) {
            header.classList.add('header--hidden');
          } else {
            header.classList.remove('header--hidden');
          }
          lastY   = y;
          ticking = false;
        });
        ticking = true;
      }
    }, { passive: true });
  }

  /* ── Desktop floating bottom bar (≥992px) ── */
  var PINKMAN_SVG = '<svg viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21.8368 4.41815H7.18411L0 47H14.5816L16.0042 38.637L36.703 43.8639C43.0335 45.4668 48.0126 42.3306 49.1507 35.222C51.5691 20.0292 49.5063 4 33.9289 4C29.1632 4 23.4017 7.13614 20.4143 12.0146L21.8368 4.41815ZM36.2051 29.9951L21.3389 26.2318C22.3348 21.9806 26.9582 16.6143 32.862 17.799C37.272 18.705 37.4143 25.5348 36.2051 29.9951Z" fill="currentColor"/></svg>';

  var bar = document.createElement('div');
  bar.className = 'pk-bar';
  bar.innerHTML =
    '<a class="pk-bar__logo" href="' + B + 'index.html">' + PINKMAN_SVG + '</a>' +
    '<nav class="pk-bar__links">' +
      '<a class="pk-bar__link' + (isHome      ? ' pk-bar__link--active' : '') + '" href="' + B + 'index.html">Главная</a>' +
      '<a class="pk-bar__link' + (isPortfolio ? ' pk-bar__link--active' : '') + '" href="' + B + 'projects/">Портфолио</a>' +
      '<div class="pk-bar__item">' +
        '<span class="pk-bar__link' + (isServices ? ' pk-bar__link--active' : '') + '">Услуги</span>' +
        '<div class="pk-bar__dropdown">' +
          '<a class="pk-bar__drop-link' + (page === 'sites'                  ? ' pk-bar__drop-link--active' : '') + '" href="' + B + 'sites/">Сайты</a>' +
          '<a class="pk-bar__drop-link' + (page === 'digital-products'       ? ' pk-bar__drop-link--active' : '') + '" href="' + B + 'digital-products/">Цифровые продукты</a>' +
          '<a class="pk-bar__drop-link' + (page === 'communications-design'  ? ' pk-bar__drop-link--active' : '') + '" href="' + B + 'communications-design/">Дизайн коммуникаций</a>' +
          '<a class="pk-bar__drop-link' + (page === 'multimedia-phygital'    ? ' pk-bar__drop-link--active' : '') + '" href="' + B + 'multimedia-phygital/">Multimedia\u00a0&\u00a0Phygital</a>' +
          '<a class="pk-bar__drop-link' + (page === 'outsource-multimedia'   ? ' pk-bar__drop-link--active' : '') + '" href="' + B + 'outsource-multimedia/">Аутсорс мультимедиа</a>' +
          '<a class="pk-bar__drop-link' + (page === 'outstaff-ai'            ? ' pk-bar__drop-link--active' : '') + '" href="' + B + 'outstaff-ai/">Аутстафф AI-дизайнеров</a>' +
          '<a class="pk-bar__drop-link' + (page === 'ai-video'               ? ' pk-bar__drop-link--active' : '') + '" href="' + B + 'ai-video/">AI\u2011ролики для OLV\u00a0+\u00a0DOOH</a>' +
        '</div>' +
      '</div>' +
      '<a class="pk-bar__link' + (isContacts ? ' pk-bar__link--active' : '') + '" href="' + B + 'contact-us/">Контакты</a>' +
    '</nav>' +
    '<a class="pk-bar__cta" href="' + B + 'contact-us/">Обсудить проект</a>';

  document.body.appendChild(bar);

  /* ── Contact CTA — injected as its own section before the footer <section> ── */
  if (!document.querySelector('.contacts-card')) {
    var footerTop = document.querySelector('.footer-top');
    if (footerTop) {
      var cta = document.createElement('div');
      cta.className = 'contacts-main-section';
      /* Wrap in .main-container so the layout system handles all horizontal spacing */
      cta.innerHTML =
        '<div class="main-container">' +
          '<div class="contacts-card">' +
            '<p class="contacts-intro">Обсудим проект?</p>' +
            '<p class="contacts-role">Аккаунт-директор Юрий Григоренко&nbsp;— расскажет про состав команды, сроки и&nbsp;стоимость под ваш проект.</p>' +
            '<div class="contacts-links">' +
              '<a class="contacts-link-btn" href="tel:+79153110332">+7&nbsp;915&nbsp;311&nbsp;03&nbsp;32</a>' +
              '<a class="contacts-link-btn contacts-link-btn--light" href="mailto:grig@pinkman.ru">grig@pinkman.ru</a>' +
            '</div>' +
          '</div>' +
        '</div>';
      /* Insert before the <section> that wraps the footer, not inside .main-container */
      var footerSection = footerTop.closest('section') || footerTop.parentNode.parentNode;
      footerSection.parentNode.insertBefore(cta, footerSection);
    }
  }

})();
