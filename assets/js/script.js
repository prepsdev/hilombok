const nav = document.getElementById('floatingNav');
const logo = document.querySelector('.logo');

window.addEventListener('scroll', () => {
  const scrolled = window.scrollY > 40;
  nav.classList.toggle('scrolled', scrolled);
  if (logo) logo.classList.toggle('scrolled', scrolled);
});

var burger = document.getElementById('navBurger');
var navLinks = document.getElementById('navLinks');
if (burger && navLinks) {
  burger.addEventListener('click', function() {
    navLinks.classList.toggle('open');
    var icon = burger.querySelector('i');
    icon.classList.toggle('fa-bars');
    icon.classList.toggle('fa-times');
  });
}
