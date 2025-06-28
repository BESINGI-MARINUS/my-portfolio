'use strict';

// ELEMENTS
const toggleInput = document.getElementById('toggle-input');
const sideNav = document.querySelector('.side__items');

toggleInput.addEventListener('change', function (e) {
  sideNav.classList.toggle('hide-nav');
  sideNav.style.transition = 'transform .3s';
});
