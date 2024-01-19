import getWeather from "./loadJSON"
import "./style/main.css"
import "./style/switch.css"
import "./icons"

getWeather("sydney")

const submitBtn = document.querySelector("button")
submitBtn.addEventListener("click", (event) => {
    event.preventDefault
    const locationInput = document.querySelector("#location-input")
    getWeather(locationInput.value)
})







