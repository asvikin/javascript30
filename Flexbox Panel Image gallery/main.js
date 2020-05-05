const panels = document.querySelectorAll(".panel");
panels.forEach(element => {
  element.addEventListener("click", toggleopen);
});
panels.forEach(element => {
  element.addEventListener("transitionend", togg);
});
function toggleopen() {
  this.classList.toggle("open");
}
function togg() {
  this.classList.toggle("open-active");
}
