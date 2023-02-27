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

  let dateElement = document.querySelector("#date");
  dateElement.innerHTML = formatDate(response.data.time * 1000);

  //let currentIconElement = document.querySelector("#currentIcon");
  //currentIconElement.innerHTML = response.data.condition.icon_url;
}
function formatDate(timestamp) {
  let date = new Date(timestamp);
  let hours = date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  //if (hours>12){
  //hours = ${hours}-12;
  // }

  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[date.getDay()];

  return `${day}${hours}:${minutes}`;
}
