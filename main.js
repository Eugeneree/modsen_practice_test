let openButton = document.querySelector(".bi-list");
let closeButton = document.querySelector(".bi-x");
let hamburgerMenu = document.querySelector(".navbar__menu");

openButton.addEventListener("click", () => {
  openButton.classList.toggle("hide");
  closeButton.classList.toggle("hide");
  hamburgerMenu.classList.toggle("hidden");
});

closeButton.addEventListener("click", () => {
  openButton.classList.toggle("hide");
  closeButton.classList.toggle("hide");
  hamburgerMenu.classList.toggle("hidden");
});
