let btn = document.getElementById("add-todo");
btn.addEventListener("click", getTodo);
let ulTag = document.getElementById("todo-holder");
let arr = [];

function getTodo() {
  let value = document.getElementById("todo-input").value;
  arr.push(value);
  let liItem = document.createElement("li");
  liItem.innerText = value;
  ulTag.append(liItem);
  localStorage.setItem("ul", JSON.stringify(arr));
  document.getElementById("todo-input").value = "";
}

for (let el of JSON.parse(localStorage.getItem("ul"))) {
  let liItem = document.createElement("li");
  liItem.innerText = el;
  ulTag.append(liItem);
}
