// Select inputs
const nameInput = document.getElementById("name");
const roleInput = document.getElementById("role");
const bioInput = document.getElementById("bio");
const imageInput = document.getElementById("image");

// Select preview elements
const previewName = document.getElementById("previewName");
const previewRole = document.getElementById("previewRole");
const previewBio = document.getElementById("previewBio");
const profileImg = document.getElementById("profileImg");

// Event listeners (real-time update)
nameInput.addEventListener("input", () => {
  previewName.textContent = nameInput.value || "Your Name";
});

roleInput.addEventListener("input", () => {
  previewRole.textContent = roleInput.value || "Your Role";
});

bioInput.addEventListener("input", () => {
  previewBio.textContent = bioInput.value || "Your bio will appear here...";
});

imageInput.addEventListener("input", () => {
  profileImg.src = imageInput.value || "https://via.placeholder.com/150";
});
