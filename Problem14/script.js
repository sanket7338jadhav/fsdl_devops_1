const input = document.getElementById("inputText");
const result = document.getElementById("result");

// Reverse
function reverseText() {
  let text = input.value;
  result.innerText = text.split("").reverse().join("");
}

// Uppercase
function toUpper() {
  result.innerText = input.value.toUpperCase();
}

// Lowercase
function toLower() {
  result.innerText = input.value.toLowerCase();
}

// Length
function getLength() {
  result.innerText = "Length: " + input.value.length;
}
