let todos = []
const ul_todo = document.querySelector(".todo-list")
const input_todo = document.querySelector(".todo__input")

function saveTodoList() {
  localStorage.setItem("todos", JSON.stringify(todos))
}

function onSubmitTodo(event) {
  event.preventDefault()
  if (input_todo.value !== "") {
    const { id, text } = createTodoItem(Date.now(), input_todo.value)
    todos.push({ id, text })
    saveTodoList()
    input_todo.value = ""
  }
}

function onClickBtnDelete(event) {
  const {
    currentTarget: { parentNode: todo },
  } = event
  ul_todo.removeChild(todo)
  todos = todos.filter((item) => item.id !== todo.id)
  saveTodoList()
}

function createTodoItem(id, value) {
  const todo = document.createElement("li")
  const text = document.createElement("span")
  const icon_check = document.createElement("i")
  const btn_delete = document.createElement("button")
  const icon_delete = document.createElement("i")

  text.innerText = value
  btn_delete.addEventListener("click", onClickBtnDelete)
  icon_check.classList.add("fas")
  icon_check.classList.add("fa-check")
  icon_delete.classList.add("far")
  icon_delete.classList.add("fa-times-circle")
  btn_delete.appendChild(icon_delete)

  todo.appendChild(icon_check)
  todo.appendChild(text)
  todo.appendChild(btn_delete)
  todo.id = id.toString()

  ul_todo.appendChild(todo)
  return { id: todo.id, text: value }
}

function init() {
  const todo_form = document.querySelector(".todo__form")
  todo_form.addEventListener("submit", onSubmitTodo)
  const loadedTodos = localStorage.getItem("todos")
  if (loadedTodos) {
    todos = JSON.parse(loadedTodos)
    todos.forEach((todo) => {
      createTodoItem(todo.id, todo.text)
    })
  }
}

init()
