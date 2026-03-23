/* filter.js — portfolio chip filtering (replaces Finsweet fs-list) */
(function () {
  'use strict';

  var list    = document.querySelector('.portfolio-list.w-dyn-items');
  var chips   = document.querySelectorAll('.chip-wrapper label.chip-checkbox');
  var allBtn  = document.querySelector('#all-filter');

  if (!list || !chips.length) return;

  /* collect every top-level card item */
  var cards = Array.from(list.querySelectorAll(':scope > .w-dyn-item'));

  /* read categories stored in each card */
  function getCardCategories(card) {
    return Array.from(card.querySelectorAll('p.is__chip, p[fs-list-field="category"]'))
      .map(function (p) { return p.textContent.trim(); });
  }

  /* main filter function */
  function applyFilter(value) {
    cards.forEach(function (card) {
      if (!value) {
        card.style.display = '';          /* show all */
      } else {
        var cats = getCardCategories(card);
        card.style.display = cats.includes(value) ? '' : 'none';
      }
    });
  }

  /* chip click handler */
  chips.forEach(function (label) {
    label.addEventListener('click', function () {
      var input = label.querySelector('input[type="radio"]');
      var value = input ? (input.getAttribute('fs-list-value') || '') : '';

      /* update active state */
      chips.forEach(function (l) { l.classList.remove('is_active'); });
      label.classList.add('is_active');

      applyFilter(value);
    });
  });

  /* make sure "Все проекты" is active on load */
  if (allBtn) allBtn.classList.add('is_active');
})();
