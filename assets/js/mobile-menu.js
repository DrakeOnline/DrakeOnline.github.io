document.addEventListener('DOMContentLoaded', function() {
  const hamburgerMenu = document.querySelector('.hamburger-menu');
  const mainNav = document.querySelector('.main-nav');

  hamburgerMenu.addEventListener('click', function() {
    mainNav.classList.toggle('active');
    hamburgerMenu.classList.toggle('active');
  });
});
