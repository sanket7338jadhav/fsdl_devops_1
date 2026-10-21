function addSkill() {
  let name = document.getElementById("skillName").value;
  let percent = document.getElementById("skillPercent").value;

  if (name === "" || percent === "") {
    alert("Please enter both fields");
    return;
  }

  if (percent < 0 || percent > 100) {
    alert("Enter percentage between 0 and 100");
    return;
  }

  let container = document.getElementById("skillsContainer");

  // Create skill div
  let skillDiv = document.createElement("div");
  skillDiv.className = "skill";

  skillDiv.innerHTML = `
        <div class="skill-name">${name}</div>
        <div class="bar">
            <div class="progress" style="width:${percent}%">
                ${percent}%
            </div>
        </div>
    `;

  container.appendChild(skillDiv);

  // Clear inputs
  document.getElementById("skillName").value = "";
  document.getElementById("skillPercent").value = "";
}
