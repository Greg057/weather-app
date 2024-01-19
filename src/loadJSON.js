import loadUI from "./UI"

export default async function getWeather(location) {
    try {
        const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=9bcb86768064488583e135233241801&q=${location}`, {mode: 'cors'});
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
    objWeather.iconCode = weatherData.current.condition.code
    objWeather.isDay = weatherData.current.is_day
    return objWeather
}