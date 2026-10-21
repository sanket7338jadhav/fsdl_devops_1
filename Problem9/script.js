const list = document.getElementById("list");
let draggedItem = null;

// Drag start
list.addEventListener("dragstart", (e) => {
  draggedItem = e.target;
  e.target.classList.add("dragging");
});

// Drag end
list.addEventListener("dragend", (e) => {
  e.target.classList.remove("dragging");
});

// Drag over
list.addEventListener("dragover", (e) => {
  e.preventDefault(); // allow drop

  const afterElement = getDragAfterElement(list, e.clientY);
  const currentItem = document.querySelector(".dragging");

  if (afterElement == null) {
    list.appendChild(currentItem);
  } else {
    list.insertBefore(currentItem, afterElement);
  }
});

// Function to get position
function getDragAfterElement(container, y) {
  const elements = [...container.querySelectorAll("li:not(.dragging)")];

  return elements.reduce(
    (closest, child) => {
      const box = child.getBoundingClientRect();
      const offset = y - box.top - box.height / 2;

      if (offset < 0 && offset > closest.offset) {
        return { offset: offset, element: child };
      } else {
        return closest;
      }
    },
    { offset: Number.NEGATIVE_INFINITY },
  ).element;
}
