const todoInput = document.querySelector(".todo-input");
const todoAdd = document.querySelector(".todo-add");
const todoList = document.querySelector(".todo-list");

todoAdd.addEventListener("click", addTodo);
todoList.addEventListener("click", checkTodo);

function addTodo(e) {
  if (todoInput.value === "") {
    alert("add something");
  } else {
    const newTodo = document.createElement;
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
    const todoLi = document.createElement("li");
    todoLi.classList.add("todo-item");
    todoLi.innerText = todoInput.value;
    todoDiv.appendChild(todoLi);
    const completedButton = document.createElement("button");
    completedButton.classList.add("todo-completed");
    completedButton.innerHTML = `<i class="fas fa-check"></i>`;
    todoDiv.appendChild(completedButton);
    const removedButton = document.createElement("button");
    removedButton.innerHTML = `<i class="fas fa-trash"></i>`;
    removedButton.classList.add("todo-removed");
    todoDiv.appendChild(removedButton);
    todoList.appendChild(todoDiv);
    todoInput.value = "";
  }
  e.preventDefault();
}

function checkTodo(e) {
  const item = e.target;
  if (item.classList[0] === "todo-removed") {
    const todo = item.parentElement;
    todo.classList.add("fall");
    todo.addEventListener("transitionend", () => {
      todo.remove();
    });
  }

  if (item.classList[0] === "todo-completed") {
    const todo = item.parentElement;
    todo.classList.toggle("completed");
  }
}
