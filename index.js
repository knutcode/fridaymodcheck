let textEl = document.getElementById("text-el");

let time = new Date();
if (time.getDay() === 5) {
  textEl.textContent = "yes!";
} else {
  textEl.textContent = "no.";
}
