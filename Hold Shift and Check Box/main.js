const checkBoxs = document.querySelectorAll(".item input");
checkBoxs.forEach(checkBox => {
  checkBox.addEventListener("click", handleCheck);
});
let lastChecked;

function handleCheck(e) {
  if (e.shiftKey && this.checked && lastChecked) {
    let isInbwt = false;
    checkBoxs.forEach(c => {
      if (c == this || c == lastChecked) {
        isInbwt = !isInbwt;
      }
      if (isInbwt) {
        c.checked = true;
      }
    });
  }
  lastChecked = this;
}
