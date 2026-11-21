
const header = document.querySelector(".header");

const openButton = document.querySelector(".open");
const closeButton = document.querySelector(".close");

const navLinks = document.querySelectorAll(".header_nav_links a");

// OUVRIR LE MENU
openButton.addEventListener("click", function () {
  header.classList.add("menu-open");
});

// FERMER LE MENU
closeButton.addEventListener("click", function () {
  header.classList.remove("menu-open");
});

// FERMER APRÈS UN CLIC SUR UN LIEN
navLinks.forEach(function (link) {
  link.addEventListener("click", function () {
    header.classList.remove("menu-open");
  });
});
