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

/* barberek-slider 

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
      slidesPerView: 4,
    },
  },
  
});
*/

function showElementA() {
  document.getElementById("elementA").style.display = "block";
  document.getElementById("elementB").style.display = "none";
  document.getElementById("barber_btn").style.backgroundColor = "#6c88a5a6";
  document.getElementById("senior_btn").style.backgroundColor = "#F1EFEF";
}


function showElementB() {
  document.getElementById("elementA").style.display = "none";
  document.getElementById("elementB").style.display = "block";
  document.getElementById("barber_btn").style.backgroundColor = "#F1EFEF";
  document.getElementById("senior_btn").style.backgroundColor = "#6c88a5a6";
}