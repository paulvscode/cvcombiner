const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navLink = document.querySelectorAll(".nav-link");
const navLogo = document.querySelector(".nav-logo");

hamburger.addEventListener("click", mobileMenu);

window.addEventListener("scroll", onScrollTrigger);

function onScrollTrigger() {
  if (window.scrollY >= 50) {
    navLogo.classList.add("hidden");
  } else if (window.scrollY === 0 && navLogo.classList.contains("hidden")) {
    navLogo.classList.remove("hidden");
  }
}

function mobileMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
}

navLink.forEach((n) => n.addEventListener("click", closeMenu));

function closeMenu() {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}
