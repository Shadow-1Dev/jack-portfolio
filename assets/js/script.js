'use strict';

/**
 *  ────── Add event listener on multiple elements
 */
const addEventOnElements = function (elements, eventType, callback) {
  for (let i = 0, len = elements.length; i < len; i++) {
    elements[i].addEventListener(eventType, callback);
  }
};

/**
 *  ────── Navbar toggle for mobile
 */
const navbar = document.querySelector('[data-navbar]');
const navTogglers = document.querySelectorAll('[data-nav-toggler]');
const overlay = document.querySelector('[data-overlay]');

const toggleNavbar = function () {
  navbar.classList.toggle('active');
  overlay.classList.toggle('active');
  document.body.classList.toggle('nav-active');
};

addEventOnElements(navTogglers, 'click', toggleNavbar);

/**
 *  ────── Header active when window scroll down to 100px
 */
const header = document.querySelector('[data-header]');

window.addEventListener('scroll', function () {
  if (window.scrollY > 100) {
    header.classList.add('active');
  } else {
    header.classList.remove('active');
  }
});

/**
 *  ────── Scroll reveal
 */
const revealElements = document.querySelectorAll('[data-reveal]');
const revealDelayElements = document.querySelectorAll('[data-reveal-delay]');

const reveal = function () {
  for (let i = 0, len = revealElements.length; i < len; i++) {
    if (revealElements[i].getBoundingClientRect().top < window.innerHeight / 1.2) {
      revealElements[i].classList.add('revealed');
    }
  }
};

for (let i = 0, len = revealDelayElements.length; i < len; i++) {
  revealDelayElements[i].style.transitionDelay = revealDelayElements[i].dataset.revealDelay;
}

window.addEventListener('scroll', reveal);
window.addEventListener('load', reveal);

/**
 *  ────── Contact form handler
 *  Opens the user's email app with a prefilled message for this static site.
 */
const contactForm = document.querySelector('[data-contact-form]');

if (contactForm) {
  contactForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const formData = new FormData(contactForm);
    const name = formData.get('name')?.toString().trim() || '';
    const email = formData.get('email_address')?.toString().trim() || '';
    const message = formData.get('message')?.toString().trim() || '';

    const subject = encodeURIComponent(`New project inquiry from ${name}`);
    const body = encodeURIComponent(
      [
        `Name: ${name}`,
        `Email: ${email}`,
        '',
        'Project brief:',
        message,
      ].join('\n')
    );

    window.location.href = `mailto:me5067394@gmail.com?cc=essam.designs101@gmail.com&subject=${subject}&body=${body}`;
  });
}
