const addItems = document.querySelector(".add-items");
const plates = document.querySelector(".plates");
let items = JSON.parse(localStorage.getItem('items')) || [];
const btn = Array.from(document.querySelectorAll(".allValue input"));

function addItem(e) {
  e.preventDefault();
  const text = document.querySelector("[name=item]").value;
  const item = {
    text,
    done: false
  };
  this.reset();
  items.push(item);
  populateList(items, plates);
  //localStorage.setItem("items", JSON.stringify(items));
  console.table(items);
}

function populateList(plates = [], plateList) {
  plateList.innerHTML = plates.map((plate, i) => {
    return `
    <li>
    <input type="checkbox" data-index=${i} id="item${i}" ${plate.done?'checked':''}/>
        <label for ="item${i}">${plate.text}</label>
        </li>
    `;
  }).join('');
  localStorage.setItem("items", JSON.stringify(items));
}

function toggleDone(e) {
  if (!e.target.matches('input')) return;
  const index = (e.target).dataset.index;
  items[index].done = !items[index].done;
  populateList(items, plates);
  //localStorage.setItem("items", JSON.stringify(items));
}

function handleButtons(e) {
  switch (this.value) {
    case "Remove ALL":
      items = [];
      break;
    case "Select ALL":
      items.forEach(item => {
        item.done = true;
      })
      break;
    case "unselect ALL":
      items.forEach(item => {
        item.done = false;
      })
      break;
  }
  // localStorage.setItem("items", JSON.stringify(items));
  populateList(items, plates);
}
addItems.addEventListener("submit", addItem);
plates.addEventListener("click", toggleDone);
btn.forEach(b => {
  b.addEventListener("click", handleButtons);
});
populateList(items, plates)