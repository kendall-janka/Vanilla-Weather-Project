function displayTemperature(response) {
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

  let dateElement = document.querySelector("#date");
  dateElement.innerHTML = formatDate(response.data.time * 1000);

  let currentIconElement = document.querySelector("#currentIcon");
  currentIconElement.setAttribute(
    "src",
    `http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${response.data.condition.icon}.png`
  );
  currentIconElement.setAttribute("alt", response.data.condition.description);

  fahrenheitTemperature = response.data.temperature.current;
}
function formatDate(timestamp) {
  let date = new Date(timestamp);
  let hours = date.getHours();
  let ampm = "pm";
  if (hours < 12) {
    ampm = "am";
  }
  if (hours < 10) {
    hours = `0${hours}`;
  }
  hours = ((hours + 11) % 12) + 1;

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

  return `${day} ${hours}:${minutes} ${ampm}`;
}

function displayForecast() {
  let forecastElement = document.querySelector("#forecast");
  let forecastHTML = `<div class = "row" id="forecastRow"> <div class = col-1></div>`;
  let days = ["Thu", "Fri", "Sat", "Sun", "Sat"];
  days.forEach(function (day) {
    forecastHTML =
      forecastHTML +
      `
        <div class="col-2 forecastColumn">
                ${day} <br />
                <img
                  id="forecastIcon"
                  alt=""
                  width="36"
                  src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/few-clouds-day.png"
                />
                <br />
                <span id="forecastTemps">
                  <span id="forecastMinTemp">18° 
                  </span>
                    <span id="forecastMaxTemp">28° 
                    </span>
                </span>
          
        </div>
        `;
  });

  forecastHTML = forecastHTML + `</div>`;
  forecastElement.innerHTML = forecastHTML;
}

function handleSubmit(event) {
  event.preventDefault();
  let cityInputElement = document.querySelector("#inputCity");
  search(cityInputElement.value);
}

function search(town) {
  let apiKey = "4900o839bet5aaf3e9a5c07fb3d6686a";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${town}&key=${apiKey}&units=imperial`;

  axios.get(apiUrl).then(displayTemperature);
}

function convertToFahrenheit(event) {
  event.preventDefault();
  fahrLink.classList.add("active");
  celsLink.classList.remove("active");
  let temperatureElement = document.querySelector("#currentTemperature");
  temperatureElement.innerHTML = Math.round(fahrenheitTemperature);
}

function convertToCelsius(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#currentTemperature");
  fahrLink.classList.remove("active");
  celsLink.classList.add("active");
  let celsiusTemperature = Math.round((fahrenheitTemperature - 32) * 0.5556);
  temperatureElement.innerHTML = celsiusTemperature;
}

let form = document.querySelector("#searchForm");
form.addEventListener("submit", handleSubmit);

let fahrenheitTemperature = "null";

let fahrenheitLink = document.querySelector("#fahrLink");
fahrenheitLink.addEventListener("click", convertToFahrenheit);

let celsiusLink = document.querySelector("#celsLink");
celsiusLink.addEventListener("click", convertToCelsius);

displayForecast();

search("New York");
