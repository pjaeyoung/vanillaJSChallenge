function saveName(name) {
  localStorage.setItem("username", name)
}

function showGreeting(name) {
  const greetingMessage = document.querySelector(".greeting__message")
  greetingMessage.innerText = `Hello ${name}!`
  const input = document.querySelector(".greeting__input")
  input.classList.add("hide")
  const todo = document.querySelector(".todo")
  todo.classList.remove("hide")
}

function onSubmitName(event) {
  event.preventDefault()
  const input = document.querySelector(".greeting__input")
  if (input.value !== "") {
    showGreeting(input.value)
    saveName(input.value)
  }
}

function init() {
  const username = localStorage.getItem("username")
  if (username) {
    showGreeting(username)
  } else {
    const form = document.querySelector(".greeting__form")
    form.addEventListener("submit", onSubmitName)
  }
}

init()
