const form = document.querySelector("form");
const button = document.getElementById("submit-btn");

button.addEventListener("click", function (event) {
  event.preventDefault();
  alert("Form Submitted Successfully");
  form.reset();
});
