const todoInput = document.querySelector("#todo-input");
const todoForm = document.querySelector("#todo-form");
const todoList = document.querySelector("#todo-list");

todoForm.addEventListener("submit", function (event)
 {event.preventDefault 
    ();

  const task = todoInput.value.trim();
    if (task === "") {
        return;
    }
  const taskElement =document.createElement("li");
  taskElement.textContent = task;

  todoList.appendChild(taskElement);
  todoInput.value = "";
});

