let apiKey = "4900o839bet5aaf3e9a5c07fb3d6686a";
let apiUrl =
  "https://api.shecodes.io/weather/v1/current?query=${New York}&key=4900o839bet5aaf3e9a5c07fb3d6686a&units=imperial";
console.log(apiUrl);
axios.get(apiUrl).then(displayTemperature);

function displayTemperature(response) {
  console.log(response.data.temperature.current);

  let temperatureElement = document.querySelector("#currentTemperature");
  temperatureElement.innerHTML = Math.round(response.data.temperature.current);

  let cityElement = document.querySelector("#city");
  cityElement.innerHTML = response.data.city;

  let currentConditionsElement = document.querySelector("#currentConditions");
  currentConditionsElement.innerHTML = response.data.condition.description;

  let humidityElement = document.querySelector("#humidity");
  humidityElement.innerHTML = response.data.temperature.humidity;

  let windSpeedElement = document.querySelector("#windSpeed");
  windSpeedElement.innerHTML = Math.round(response.data.wind.speed);
  console.log(response.data.wind.speed);

  //let currentIconElement = document.querySelector("#currentIcon");
  //currentIconElement.innerHTML = response.data.condition.icon_url;
}
