document.querySelector(".burger").addEventListener("click", function () {
  this.classList.toggle("active");
  document.querySelector(".menu").classList.toggle("open");
  document.querySelector(".burger__line").classList.toggle("open");
  document.querySelector(".menu__list").classList.toggle("open");
});
