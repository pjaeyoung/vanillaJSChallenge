function saveCoords(lat, long) {
  localStorage.setItem("coords", JSON.stringify({ lat, long }))
}

async function getWeather(url) {
  try {
    const {
      data: {
        main: { temp },
        name,
      },
    } = await axios.get(url)
    const weather = document.querySelector(".weather__description")
    weather.innerText = `${temp}℃ @ ${name}`
  } catch {
    alert("request weather information failed!")
  }
}

function getUrl(lat, long) {
  const API_KEY = "6d508840205b9d14c87046ef1d77d50e"
  return `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${API_KEY}&units=metric`
}

function handleSuccess({ coords: { latitude, longitude } }) {
  saveCoords(latitude, longitude)
  const url = getUrl(latitude, longitude)
  getWeather(url)
}

function handleError() {
  const weather = document.querySelector(".weather__description")
  weather.innerText = "Weather information is unavailable."
}

function init() {
  const loadedCoords = localStorage.getItem("coords")
  if (loadedCoords) {
    const { lat, long } = JSON.parse(loadedCoords)
    const url = getUrl(lat, long)
    getWeather(url)
  } else {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(handleSuccess, handleError)
    }
  }
}

init()
