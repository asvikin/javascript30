setInterval(() => {
  const date = new Date();
  const hour = date.getHours();
  const min = date.getMinutes();
  const sec = date.getSeconds();
  document.querySelector(".sec").style.transform = `rotate(${(sec / 60) * 360 +
    90}deg)`;
  document.querySelector(".hour").style.transform = `rotate(${(hour / 12) *
    360 +
    90}deg)`;
  document.querySelector(".min").style.transform = `rotate(${(min / 60) * 360 +
    90}deg)`;
}, 1000);
