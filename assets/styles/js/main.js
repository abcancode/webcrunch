// Simple toggle for hamburger
const hamburger = document.getElementById("hamburger");
const mobileNav = document.getElementById("mobileNav");

hamburger.addEventListener("click", () => {
  mobileNav.classList.toggle("open");
});

// const backToTop = document.getElementById("back-to-top");

// // Show/hide on scroll
// window.addEventListener("scroll", () => {
//   if (window.scrollY > 300) {
//     backToTop.style.display = "block";
//   } else {
//     backToTop.style.display = "none";
//   }
// });

// // Smooth scroll to top
// backToTop.addEventListener("click", () => {
//   window.scrollTo({
//     top: 0,
//     behavior: "smooth",
//   });
// });
