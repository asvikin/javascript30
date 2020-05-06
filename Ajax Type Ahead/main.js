const endpoint =
  "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";
const cities = [];
fetch(endpoint)
  .then(bolb => bolb.json())
  .then(data => {
    cities.push(...data);
  });
function findMatch(wordToMatch, cities) {
  return cities.filter(place => {
    const regex = RegExp(wordToMatch, "gi");
    return place.city.match(regex) || place.state.match(regex);
  });
}
function displayMatch() {
  const city = findMatch(this.value, cities);
  var currLong, currlat;
  const html = city
    .sort((a, b) => {
      console.log(
        navigator.geolocation.getCurrentPosition(position => {
          let lat = position.coords.latitude;
          let long = position.coords.longitude;
          return { currLat: lat, currLong: long };
        })
      );
      //console.log(currLat, currLong);
    })
    .map(element => {
      const regex = new RegExp(this.value, "gi");
      const cityName = element.city.replace(
        regex,
        `<span class="hl">${this.value}</span>`
      );
      const stateName = element.state.replace(
        regex,
        `<span class="hl">${this.value}</span>`
      );
      return `<li>
        <span class="name">${cityName},${stateName}</span>
        <span class="population">${element.population}</span>
        </li>
      `;
    })
    .join("");
  suggest.innerHTML = html;
}
const serch = document.querySelector(".search");
const suggest = document.querySelector(".suggestions");
serch.addEventListener("change", displayMatch);
serch.addEventListener("keyup", displayMatch);
