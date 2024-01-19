export default function loadUI (objWeather) {
    const weatherIcon = document.querySelector(".weather-icon")
    const locationData = document.querySelector(".location")
    const dateDate = document.querySelector(".date")
    const humidityData = document.querySelector("#humidity")

}


const unitToggle = document.querySelector("#unit")
unitToggle.addEventListener("click", function(e) {
    let unit = "C"
    if (e.target.checked) {
        unit = "F"
    } else {
        unit = "C"
    }
    console.log(unit)
})