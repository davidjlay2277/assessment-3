console.log("hello world");

const button1 = document.querySelector("#color");
const button2 = document.querySelector("#place");
const button3 = document.querySelector("#ritual");

function faveColor(event) {
  alert("My favorite color is #00008B");
}
function favePlace(event) {
  alert("My favorite place is DevMt");
}
function faveRitual(event) {
  alert("My favorite ritual is coding in my dreams");
}

button1.addEventListener("click", faveColor);
button2.addEventListener("click", favePlace);
button3.addEventListener("click", faveRitual);
