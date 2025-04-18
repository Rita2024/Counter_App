// COUNTER APP
// This is a simple counter app that allows the user to increase, decrease, or reset a counter value.

const decreasebtn = document.getElementById("decreasebtn");
const resetbtn = document.getElementById("resetbtn");
const increasebtn = document.getElementById("increasebtn");
const countlabel = document.getElementById("countlabel");

let count = 0;

decreasebtn.onclick = function() {
  count--; // Shorthand for count = count - 1
  countlabel.textContent = count;
}

increasebtn.onclick = function() {
  count++; // Shorthand for count = count + 1
  countlabel.textContent = count;
}

resetbtn.onclick = function() {
  count = 0;
  countlabel.textContent = count;
}