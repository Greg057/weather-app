export default function loadUI (objWeather, unit = "C") {
    setIcon(objWeather.iconCode, objWeather.isDay)
    const locationData = document.querySelector(".location")
    const dateData = document.querySelector(".date")
    const tempData = document.querySelector(".temp")
    const tempUnit = document.querySelector(".temp-unit")
    const feelsLikeData = document.querySelector("#feels-like")
    const humidityData = document.querySelector("#humidity")
    const windData = document.querySelector("#wind")

    if (unit === "C") {
        
    } else if (unit === "F") {

    }
}

function changeUnit (e) {
    let unit
    if (e.target.checked) {
        unit = "F"
    } else {
        unit = "C"
    }
    loadUI(unit)
}

const unitToggle = document.querySelector("#unit")
unitToggle.addEventListener("click", changeUnit)

