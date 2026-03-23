/* nav.js */
(function () {
  var btn  = document.querySelector('.mobile-menu-btn');
  var menu = document.querySelector('.nav-menu');
  if (!btn || !menu) return;

  function close() { btn.classList.remove('w--open'); menu.classList.remove('w--open'); }
  function toggle(){ btn.classList.contains('w--open') ? close() : (btn.classList.add('w--open'), menu.classList.add('w--open')); }

  btn.addEventListener('click', function(e){ e.stopPropagation(); toggle(); });

  /* close on any link click inside menu */
  menu.querySelectorAll('a').forEach(function(a){ a.addEventListener('click', close); });

  /* mobile Services accordion */
  menu.querySelectorAll('.header-dropdown-wrapper.hide-desktop .dropdown-trigger')
    .forEach(function(trigger){
      trigger.addEventListener('click', function(e){
        e.preventDefault();
        var list  = trigger.closest('.header-dropdown-wrapper').querySelector('.header-dropdown');
        var arrow = trigger.querySelector('.dropdown-arrow-image');
        if (!list) return;
        var open = list.classList.toggle('w--open');
        if (arrow) arrow.style.transform = open ? 'rotate(180deg)' : '';
      });
    });

  /* ── Scroll-hide header ── */
  var header = document.querySelector('.header-new');
  if (header) {
    var lastY   = window.scrollY;
    var ticking = false;
    window.addEventListener('scroll', function () {
      if (!ticking) {
        requestAnimationFrame(function () {
          var y = window.scrollY;
          if (y > lastY && y > 80) {
            /* scrolling down past 80px threshold → hide */
            header.classList.add('header--hidden');
            /* also close menu if open */
            close();
          } else {
            /* scrolling up → reveal */
            header.classList.remove('header--hidden');
          }
          lastY   = y;
          ticking = false;
        });
        ticking = true;
      }
    }, { passive: true });
  }
})();
