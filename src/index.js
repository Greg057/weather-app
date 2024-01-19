import "./style/main.css"
import "./style/switch.css"
import getWeather from "./loadJSON"


getWeather("sydney")



const inputField = document.querySelector("#location-input")
inputField.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        getWeather(inputField.value)
    }
})

const submitBtn = document.querySelector("button")
submitBtn.addEventListener("click", (e) => {
    e.preventDefault
    getWeather(inputField.value)
})








