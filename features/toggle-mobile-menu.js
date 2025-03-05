const toggler = document.getElementById("navbar-toggler");
const menu = document.getElementById("navbar-menu");
const navbar = document.querySelector(".navbar");

function toggleNavbar() {
  navbar.classList.toggle("navbar--active");
}

function handleNavbarClick(event) {
  if (event.target.classList.contains("navbar__link")) {
    toggleNavbar();
  }
}

function addEventListeners() {
  toggler.addEventListener("click", toggleNavbar);
  navbar.addEventListener("click", handleNavbarClick);
}

function init() {
  addEventListeners();
}

init();