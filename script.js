// Change text
document.getElementById("change-text-btn").onclick = function () {
  document.getElementById("dynamic-text").textContent =
    "The text has been changed!";
};

// Change style
document.getElementById("change-style-btn").onclick = function () {
  var box = document.getElementById("box");
  box.style.backgroundColor = "salmon";
  box.style.border = "2px solid black";
  box.style.color = "white";
};

// Add item
document.getElementById("add-item-btn").onclick = function () {
  var newItem = document.createElement("li");
  newItem.textContent =
    "Item " + (document.getElementById("item-list").children.length + 1);
  document.getElementById("item-list").appendChild(newItem);
};

// Remove item
document.getElementById("remove-item-btn").onclick = function () {
  var list = document.getElementById("item-list");
  if (list.children.length > 0) {
    list.removeChild(list.lastElementChild);
  }
};
