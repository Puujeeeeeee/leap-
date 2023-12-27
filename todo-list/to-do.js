function drag(event) {
  event.dataTransfer.setData("text", event.target.id);
}

function allowDrop(event) {
  event.preventDefault();
}

function drop(event) {
  event.preventDefault();
  const boxId = event.dataTransfer.getData("text");
  event.target.appendChild(document.getElementById(boxId));
}

function show() {
  document.getElementsByClassName("modalContainer")[0].classList.add("show");
}

document.getElementsByClassName("modalContainer")[0];
window.onclick = function (event) {
  if (event.target == modalContainer) {
    modalContainer.classList.remove("show");
  }
};
// Your existing JavaScript code
// Add drag-and-drop related functions

let dragged;

function allowDrop(event) {
  event.preventDefault();
}

function drag(event) {
  dragged = event.target;
  event.dataTransfer.setData("text/plain", null);
}

function drop(event) {
  event.preventDefault();
  const target = event.target;

  // Check if the drop target is a valid card container
  if (target.classList.contains("cards")) {
    target.appendChild(dragged);
  }

  // Remove the 'drag-active' class from all elements
  document
    .querySelectorAll(".board, .cards")
    .forEach((el) => el.classList.remove("drag-active"));
}

function showModal(boardId) {
  // Show modal and set appropriate data
  const modal = document.getElementById("modalContainer");
  const backdrop = document.getElementById("backdrop");
  modal.style.display = "flex";
  backdrop.style.display = "block";

  // Set additional data for the task form
  const form = document.getElementById("taskForm");
  form.reset(); // Reset the form
  form.dataset.boardId = boardId;
}

function hideModal() {
  // Hide modal and backdrop
  const modal = document.getElementById("modalContainer");
  const backdrop = document.getElementById("backdrop");
  modal.style.display = "none";
  backdrop.style.display = "none";
}

function addTodo() {
  // Your existing code to add a task
  // ...
  // After adding the task, hide the modal
  hideModal();
}

// Add any additional JavaScript functions or improvements as needed
