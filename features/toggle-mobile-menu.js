document.addEventListener('DOMContentLoaded', () => {
  const toggler = document.getElementById('navbar-toggler');
  const menu = document.getElementById('navbar-menu');
  const navbar = document.querySelector('.navbar');
  const s = document.querySelectorAll('.navbar__link');
  console.log(s);

  s.forEach(el => {
    el.addEventListener('click', () => {
      navbar.classList.toggle('navbar--active');
    });
  });
  toggler.addEventListener('click', () => {
    navbar.classList.toggle('navbar--active');
  });
});
