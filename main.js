const display = document.getElementById("display");

function toDisplay(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = "";
}

function deleteDigit() {
  display.value = display.value.slice(0, -1);
}

function calculateResult() {
  display.value = eval(display.value || "");
}
