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

  /* sticky button hide near footer */
  var sticky = document.querySelector('.sticky-discuss');
  var footer = document.querySelector('.footer-top');
  if (sticky && footer) {
    var t = false;
    function chk(){ sticky.classList.toggle('is-hidden', footer.getBoundingClientRect().top < window.innerHeight + 40); t = false; }
    window.addEventListener('scroll', function(){ if(!t){ requestAnimationFrame(chk); t=true; } }, {passive:true});
    chk();
  }
})();
