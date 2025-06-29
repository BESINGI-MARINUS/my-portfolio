'use strict';

// ELEMENTS
const toggleInput = document.getElementById('toggle-input');
const sideNav = document.querySelector('.side__items');

// Hamburger menu
toggleInput.addEventListener('change', function (e) {
  sideNav.classList.toggle('hide-nav');
  sideNav.style.transition = 'transform .3s';
});

// Smooth scrolling
const desktopNav = document.querySelector('.nav__items');

desktopNav.addEventListener('click', function (e) {
  e.preventDefault();
  const id = e.target.getAttribute('href');
  if (!id) return;
  document.querySelector(`${id}`).scrollIntoView({ behavior: 'smooth' });
});

// Sticky Nav
const heroSection = document.querySelector('.section-hero');
const nav = document.querySelector('.nav');
const navHeight = getComputedStyle(nav).height;

const observer = new IntersectionObserver(
  function (entries) {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        nav.classList.add('sticky');
      } else {
        nav.classList.remove('sticky');
      }
    });
  },
  {
    root: null,
    threshold: 0,
    rootMargin: `-${navHeight}`,
  }
);
observer.observe(heroSection);

// Sections Fade-in animation
const sections = document.querySelectorAll('.section');
const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.remove('hide-section');
    });
  },
  {
    root: null,
    threshold: 0.2,
  }
);
sections.forEach((s) => {
  s.classList.add('hide-section');
  sectionObserver.observe(s);
});
