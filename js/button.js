document.querySelector(".servis__button_start").addEventListener("click", function () {
  this.classList.toggle("active");
  document.querySelector(".servis__door-text_start").classList.toggle("open");
});
document.querySelector(".servis__button_mid").addEventListener("click", function () {
  this.classList.toggle("active");
  document.querySelector(".servis__door-text_mid").classList.toggle("open");
});
document.querySelector(".servis__button_end").addEventListener("click", function () {
  this.classList.toggle("active");
  document.querySelector(".servis__door-text_end").classList.toggle("open");
});