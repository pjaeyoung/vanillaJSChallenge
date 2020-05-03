const clock = document.querySelector(".clock h1")

function convertTimeFormatFrom(oldValue) {
  return oldValue < 10 ? `0${oldValue}` : oldValue
}

function setTime() {
  const now = new Date()
  const hours = convertTimeFormatFrom(now.getHours())
  const minutes = convertTimeFormatFrom(now.getMinutes())
  clock.innerText = `${hours}:${minutes}`
}

function showClock() {
  setTime()
  setInterval(setTime, 1000)
}

showClock()
