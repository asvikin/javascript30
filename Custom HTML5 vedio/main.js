const player = document.querySelector(".player");
const video = player.querySelector(".viewer");
const progress = player.querySelector(".progress");
const progressBar = player.querySelector(".progress__filled");
const toggle = player.querySelector(".toggle");
const skipButtons = player.querySelectorAll("[data-skip]");
const ranges = player.querySelectorAll(".player__slider");
const fullScreen = player.querySelector(".Fbutton");
let change = false;
let drag = false;
function togglePlay() {
  if (video.paused) {
    video.play();
  } else video.pause();
}
function updateButton() {
  this.paused ? (toggle.innerText = "Play") : (toggle.innerText = "Pause");
}
function skip() {
  video.currentTime += parseFloat(this.dataset.skip);
}
function handle() {
  if (change) {
    video[this.name] = this.value;
  }
}
function handleProgress() {
  const percent = (video.currentTime / video.duration) * 100;
  progressBar.style.flexBasis = `${percent}%`;
}
function surb(e) {
  if (drag) {
    console.log("dss");
    const surbTime = (e.offsetX / progress.offsetWidth) * video.duration;
    video.currentTime = surbTime;
  }
}
video.addEventListener("click", togglePlay);
video.addEventListener("timeupdate", handleProgress);
video.addEventListener("play", updateButton);
video.addEventListener("pause", updateButton);
toggle.addEventListener("click", togglePlay);
skipButtons.forEach(e => e.addEventListener("click", skip));
ranges.forEach(e => e.addEventListener("change", handle));
ranges.forEach(e => e.addEventListener("mousemove", handle));
ranges.forEach(e => e.addEventListener("mouseup", e => (change = false)));
ranges.forEach(e => e.addEventListener("mousedown", e => (change = true)));
progress.addEventListener("mousemove", surb);
progress.addEventListener("mouseup", () => (drag = false));
progress.addEventListener("mousedown", () => (drag = true));
fullScreen.addEventListener("click", e => {
  if (video.webkitRequestFullscreen) video.webkitRequestFullscreen();
});
