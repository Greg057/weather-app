import "./style/main.css"
import "./style/switch.css"
import loadUI from "./UI"


const API_KEY = "9bcb86768064488583e135233241801"
const submitBtn = document.querySelector("button")


async function getWeather(location) {
    try {
        const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${location}`, {mode: 'cors'});
        const objWeather = await toJSON(response)
        loadUI(objWeather)
    } catch(err) {
        console.log(err)
    }
}

async function toJSON (response) {
    const weatherData = await response.json(); 
    const objWeather = {}
    objWeather.country = weatherData.location.country
    objWeather.city = weatherData.location.name
    objWeather.localTime = weatherData.location.localtime
    objWeather.tempC = weatherData.current.temp_c
    objWeather.tempF = weatherData.current.temp_f
    objWeather.feelsLikeC = weatherData.current.feelslike_c
    objWeather.feelsLikeF = weatherData.current.feelslike_f
    objWeather.humidity = weatherData.current.humidity
    objWeather.windMph = weatherData.current.wind_mph
    objWeather.windKph = weatherData.current.wind_kph
    objWeather.icon = weatherData.current.condition.text
    return objWeather
}

submitBtn.addEventListener("click", (event) => {
    event.preventDefault
    const locationInput = document.querySelector("#location-input")
    getWeather(locationInput.value)
})




