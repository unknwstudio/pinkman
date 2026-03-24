/* nav.js — v CLD345702
   Mobile nav overlay is injected here, NOT repeated in HTML.
   Update this file to update the mobile menu on all pages. */
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

  /* ── Contact CTA — injected inside footer, skip if already on page ── */
  if (!document.querySelector('.contacts-card')) {
    var footerTop = document.querySelector('.footer-top');
    if (footerTop) {
      var cta = document.createElement('div');
      cta.className = 'contacts-main-section';
      cta.innerHTML =
        '<div class="contacts-card">' +
          '<p class="contacts-intro">Обсудим проект?</p>' +
          '<p class="contacts-role">Аккаунт-директор Юрий Григоренко&nbsp;— расскажет про состав команды, сроки и&nbsp;стоимость под ваш проект.</p>' +
          '<div class="contacts-links">' +
            '<a class="contacts-link-btn" href="tel:+79153110332">+7&nbsp;915&nbsp;311&nbsp;03&nbsp;32</a>' +
            '<a class="contacts-link-btn contacts-link-btn--light" href="mailto:grig@pinkman.ru">grig@pinkman.ru</a>' +
          '</div>' +
        '</div>';
      /* Prepend inside the footer section's main-container, before footer-top */
      footerTop.parentNode.insertBefore(cta, footerTop);
    }
  }

})();
