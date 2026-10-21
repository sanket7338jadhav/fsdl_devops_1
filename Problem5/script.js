const toggleBtn = document.getElementById("toggleBtn");

// Load saved theme
window.onload = function () {
  let savedTheme = localStorage.getItem("theme");

  if (savedTheme === "dark") {
    document.body.classList.add("dark");
    toggleBtn.textContent = "Switch to Light Mode";
  }
};

// Toggle Theme
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    localStorage.setItem("theme", "dark");
    toggleBtn.textContent = "Switch to Light Mode";
  } else {
    localStorage.setItem("theme", "light");
    toggleBtn.textContent = "Switch to Dark Mode";
  }
});
