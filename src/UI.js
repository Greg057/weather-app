import setIcon from "./setIcons"

const toggleUnit = document.querySelector("#unit")
const tempData = document.querySelector(".temp")
const tempUnit = document.querySelector(".temp-unit")
const feelsLikeData = document.querySelector("#feels-like")
const windData = document.querySelector("#wind")

export default function loadUI (objWeather) {
    const locationData = document.querySelector(".location")
    const dateData = document.querySelector(".date")
    const humidityData = document.querySelector("#humidity")

    locationData.textContent = `${objWeather.city}, ${objWeather.country}`
    dateData.textContent = objWeather.localTime
    humidityData.textContent = `${objWeather.humidity}%`
 
    setIcon(objWeather.iconCode, objWeather.isDay)
    changeUnit(objWeather);

    toggleUnit.addEventListener("click", () => changeUnit(objWeather))
}



function changeUnit(objWeather) {
    let unit
    toggleUnit.checked ? unit = "F" : unit = "C"
    if (unit === "C") {
        tempUnit.textContent = "°C"
        tempData.textContent = objWeather.tempC
        feelsLikeData.textContent = `${objWeather.feelsLikeC}°C`
        windData.textContent = `${objWeather.windKph} km/h`
    } else if (unit === "F") {
        tempUnit.textContent = "°F"
        tempData.textContent = objWeather.tempF
        feelsLikeData.textContent = `${objWeather.feelsLikeF}°F`
        windData.textContent = `${objWeather.windMph} mph`
    }
}



