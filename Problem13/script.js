const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");
const emptyMsg = document.getElementById("emptyMsg");

// Add Task
function addTask() {
  let taskText = taskInput.value.trim();

  if (taskText === "") return;

  let li = document.createElement("li");

  li.innerHTML = `
        <span>${taskText}</span>
        <button class="delete-btn" onclick="deleteTask(this)">X</button>
    `;

  taskList.appendChild(li);

  taskInput.value = "";
  updateEmptyMsg();
}

// Delete Task
function deleteTask(btn) {
  btn.parentElement.remove();
  updateEmptyMsg();
}

// Update empty message
function updateEmptyMsg() {
  emptyMsg.style.display = taskList.children.length === 0 ? "block" : "none";
}

// Initial state
updateEmptyMsg();


