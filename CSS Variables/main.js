const inputs = document.querySelectorAll(".controls input");
inputs.forEach(input => {
  input.addEventListener("change", handle);
  input.addEventListener("mousemove", handle);
});
function handle() {
  const suffx = this.dataset.sizing || "";
  document.documentElement.style.setProperty(
    `--${this.name}`,
    `${this.value}${suffx}`
  );
}
