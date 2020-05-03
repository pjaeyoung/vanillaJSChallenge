const body = document.querySelector("body")

function showBackgroundImage() {
  const randomNum = Math.ceil(Math.random() * 5)
  body.background = `src/bg${randomNum}.jpg`
}

function init() {
  showBackgroundImage()
  setInterval(showBackgroundImage, 5000)
}

init()
