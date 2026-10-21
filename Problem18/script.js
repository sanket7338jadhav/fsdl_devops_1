const noteInput = document.getElementById("noteInput");
const notesContainer = document.getElementById("notesContainer");
const emptyMsg = document.getElementById("emptyMsg");

// Load notes from localStorage
let notes = JSON.parse(localStorage.getItem("notes")) || [];

// Render notes
function renderNotes() {
  notesContainer.innerHTML = "";

  if (notes.length === 0) {
    emptyMsg.style.display = "block";
    return;
  } else {
    emptyMsg.style.display = "none";
  }

  notes.forEach((note, index) => {
    let div = document.createElement("div");
    div.className = "note";

    div.innerHTML = `
            <span>${note}</span>
            <button class="delete-btn" onclick="deleteNote(${index})">X</button>
        `;

    notesContainer.appendChild(div);
  });
}

// Add note
function addNote() {
  let text = noteInput.value.trim();
  if (text === "") return;

  notes.push(text);
  noteInput.value = "";

  updateStorage();
  renderNotes();
}

// Delete note
function deleteNote(index) {
  notes.splice(index, 1);
  updateStorage();
  renderNotes();
}

// Update localStorage
function updateStorage() {
  localStorage.setItem("notes", JSON.stringify(notes));
}

// Initial load
renderNotes();
