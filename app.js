/* hambi-menu -- navbar */ 

const menuIcon = document.querySelector(".hamburger-menu");
const navbar = document.querySelector(".navbar");

menuIcon.addEventListener("click", () => {
  navbar.classList.toggle("change");
  menuIcon.classList.toggle("hambi");
});

document.addEventListener("click", (e) => {
  if (!navbar.contains(e.target) && !menuIcon.contains(e.target)) {
    navbar.classList.remove("change");
    menuIcon.classList.remove("hambi");
  }
});

/* barberek-slider */

const swiper = new Swiper(".slider-wrapper", {
  loop: true,
  grabCursor: true,
  spaceBetween: 30,
  center: true,
  responsiveClass: true,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 60,
      loop: true,
    },
    1070: {
      slidesPerView: 2,
    },
    1400: {
      slidesPerView: 3,
    },
    1700: {
      slidesPerView: 4,
    },
  },
});