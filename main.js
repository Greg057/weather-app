/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
Object(function webpackMissingModule() { var e = new Error("Cannot find module './style/main.css'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module './style/switch.css'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());




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





/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOztVQUFBO1VBQ0E7Ozs7O1dDREE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7OztBQ055QjtBQUNFOzs7QUFHM0I7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0EsdUZBQXVGLFFBQVEsS0FBSyxTQUFTLElBQUksYUFBYTtBQUM5SDtBQUNBOztBQUVBLDRGQUE0RixRQUFRLEtBQUssU0FBUyxXQUFXLGFBQWE7QUFDMUk7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlIHJlcXVpcmUgc2NvcGVcbnZhciBfX3dlYnBhY2tfcmVxdWlyZV9fID0ge307XG5cbiIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBcIi4vc3R5bGUvbWFpbi5jc3NcIlxuaW1wb3J0IFwiLi9zdHlsZS9zd2l0Y2guY3NzXCJcblxuXG5jb25zdCBBUElfS0VZID0gXCI5YmNiODY3NjgwNjQ0ODg1ODNlMTM1MjMzMjQxODAxXCJcbmNvbnN0IGljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2ljb25cIilcbmNvbnN0IHN1Ym1pdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJidXR0b25cIilcblxuXG5hc3luYyBmdW5jdGlvbiBnZXRXZWF0aGVyKGxvY2F0aW9uKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9hcGkud2VhdGhlcmFwaS5jb20vdjEvY3VycmVudC5qc29uP2tleT0ke0FQSV9LRVl9JnE9JHtsb2NhdGlvbn1gLCB7bW9kZTogJ2NvcnMnfSk7XG4gICAgICAgIGNvbnN0IG9ialdlYXRoZXIgPSBhd2FpdCB0b0pTT04ocmVzcG9uc2UpXG4gICAgICAgIGNvbnNvbGUubG9nKG9ialdlYXRoZXIpXG5cbiAgICAgICAgLyogY29uc3QgcmVzcG9uc2VGID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vYXBpLndlYXRoZXJhcGkuY29tL3YxL2ZvcmVjYXN0Lmpzb24/a2V5PSR7QVBJX0tFWX0mcT0ke2xvY2F0aW9ufSZkYXlzPTVgLCB7bW9kZTogJ2NvcnMnfSk7XG4gICAgICAgIGNvbnN0IGZvcmVjYXN0ID0gYXdhaXQgcmVzcG9uc2VGLmpzb24oKVxuICAgICAgICBjb25zb2xlLmxvZyhmb3JlY2FzdCkgKi9cbiAgICB9IGNhdGNoKGVycikge1xuICAgICAgICBjb25zb2xlLmxvZyhcIkxvY2F0aW9uIG5vdCBmb3VuZFwiKVxuICAgIH1cbiAgICBcbiAgICBcbiAgfVxuXG5hc3luYyBmdW5jdGlvbiB0b0pTT04gKHJlc3BvbnNlKSB7XG4gICAgY29uc3Qgd2VhdGhlckRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7IFxuICAgIGNvbnN0IG9ialdlYXRoZXIgPSB7fVxuICAgIG9ialdlYXRoZXIuY291bnRyeSA9IHdlYXRoZXJEYXRhLmxvY2F0aW9uLmNvdW50cnlcbiAgICBvYmpXZWF0aGVyLmNpdHkgPSB3ZWF0aGVyRGF0YS5sb2NhdGlvbi5uYW1lXG4gICAgb2JqV2VhdGhlci5sb2NhbFRpbWUgPSB3ZWF0aGVyRGF0YS5sb2NhdGlvbi5sb2NhbHRpbWVcbiAgICBvYmpXZWF0aGVyLnRlbXBDID0gd2VhdGhlckRhdGEuY3VycmVudC50ZW1wX2NcbiAgICBvYmpXZWF0aGVyLnRlbXBGID0gd2VhdGhlckRhdGEuY3VycmVudC50ZW1wX2ZcbiAgICBvYmpXZWF0aGVyLmZlZWxzTGlrZUMgPSB3ZWF0aGVyRGF0YS5jdXJyZW50LmZlZWxzbGlrZV9jXG4gICAgb2JqV2VhdGhlci5mZWVsc0xpa2VGID0gd2VhdGhlckRhdGEuY3VycmVudC5mZWVsc2xpa2VfZlxuICAgIG9ialdlYXRoZXIuaHVtaWRpdHkgPSB3ZWF0aGVyRGF0YS5jdXJyZW50Lmh1bWlkaXR5XG4gICAgb2JqV2VhdGhlci53aW5kTXBoID0gd2VhdGhlckRhdGEuY3VycmVudC53aW5kX21waFxuICAgIG9ialdlYXRoZXIud2luZEtwaCA9IHdlYXRoZXJEYXRhLmN1cnJlbnQud2luZF9rcGhcblxuXG4gICAgcmV0dXJuIG9ialdlYXRoZXJcbn1cblxuc3VibWl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZlbnQpID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdFxuICAgIGNvbnN0IGxvY2F0aW9uSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2xvY2F0aW9uLWlucHV0XCIpXG4gICAgZ2V0V2VhdGhlcihsb2NhdGlvbklucHV0LnZhbHVlKVxufSApXG5cblxuXG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==