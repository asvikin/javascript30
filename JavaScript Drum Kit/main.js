window.addEventListener("keydown", e => {
  console.log(e.keyCode);
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
  if (!audio) return;
  audio.play();
  key.classList.add("playing");
});
const keys = document.querySelectorAll(".key");
keys.forEach(key => {
  key.addEventListener("transitionend", e => {
    e.target.classList.remove("playing");
  });
});