import "./style/main.css"
import "./style/switch.css"


const API_KEY = "9bcb86768064488583e135233241801"
const icon = document.querySelector("#icon")
const submitBtn = document.querySelector("button")


async function getWeather(location) {
    try {
        const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${location}`, {mode: 'cors'});
        const objWeather = await toJSON(response)
        console.log(objWeather)

        /* const responseF = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${location}&days=5`, {mode: 'cors'});
        const forecast = await responseF.json()
        console.log(forecast) */
    } catch(err) {
        console.log("Location not found")
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


    return objWeather
}

submitBtn.addEventListener("click", (event) => {
    event.preventDefault
    const locationInput = document.querySelector("#location-input")
    getWeather(locationInput.value)
} )




