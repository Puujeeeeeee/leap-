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
