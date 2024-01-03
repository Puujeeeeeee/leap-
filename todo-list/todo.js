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
const addTodo = () => {
  const titleInputValue = document.getElementById("title-input").value;
  const descriptionInputValue =
    document.getElementById("description-input").value;
  const statusInputValue = document.getElementById("status-input").value;
  const priorityInputValue = document.getElementById("priority-input").value;
  console.log(Math.random());
  const inputObj = {
    id: Math.random().toString(),
    title: titleInputValue,
    Description: descriptionInputValue,
    Status: statusInputValue,
    Priority: priorityInputValue,
  };
  boxArray.push(inputObj);
  addTodo();
  document.getElementById;
};
