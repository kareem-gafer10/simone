let nav = document.querySelector("nav");
let menuList = document.querySelector("nav ul");
let humburger = document.querySelector(".humburger");
let navLinks = document.querySelectorAll("nav  a");
let scrollToTop = document.getElementById("scrollToTop");

// scroll to top
window.onscroll = function () {
  if (this.scrollY >= 500) {
    scrollToTop.classList.add("show");
  } else {
    scrollToTop.classList.remove("show");
  }
};
scrollToTop.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

//  toggle icon menu
humburger.addEventListener("click", () => {
  menuList.classList.toggle("menu-open");
  humburger.classList.toggle("hamburger-open");
});

menuList.addEventListener("click", () => {
  menuList.classList.remove("menu-open");
  humburger.classList.remove("hamburger-open");
});

//  change color when i scroll in bavbar
window.addEventListener("scroll", () => {
  window.scrollY > 150
    ? (nav.style.backgroundColor = "#000")
    : (nav.style.backgroundColor = "transparent");
});

//  active links in navbar
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.forEach((link) => link.classList.remove("active"));
    link.classList.add("active");
  });
});

//  carousel
$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 20,
  responsiveClass: true,
  responsive: {
    0: {
      items: 1,

      loop: true,
    },

    1000: {
      items: 2,
      loop: true,
    },
  },
});
