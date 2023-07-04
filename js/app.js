let convertButton = document.querySelector(".convertButton");
let resetButton = document.querySelector(".resetButton");
let changeButton = document.querySelector(".changeButton");
let result = document.querySelector(".result");
let converterInput = document.querySelector("#converter");
let isTempC = true;
convertButton.addEventListener("click", converting);

function converting() {
  if (isTempC) {
    convertCtoF();
  } else {
    convertFtoC();
  }
}
function convertCtoF() {
  let convert = +converterInput.value * 1.8 + 32;
  result.innerHTML = +converterInput.value + "°C" + " is: " + convert + "°F";
  converterInput.value = "";
}
function convertFtoC() {
  let convert = (+input.value - 32) / 1.8;
  result.innerHTML = +converterInput.value + "°C" + " is: " + convert + "°F";
  converterInput.value = "";
}
