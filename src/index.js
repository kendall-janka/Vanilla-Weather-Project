let apiKey = "4900o839bet5aaf3e9a5c07fb3d6686a";
let apiUrl =
  "https://api.shecodes.io/weather/v1/current?query=Lisbon&key=4900o839bet5aaf3e9a5c07fb3d6686a&units=imperial";
console.log(apiUrl);
axios.get(apiUrl).then(displayTemperature);

function displayTemperature(response) {
  console.log(response.data.temperature.current);
  let temperatureElement = document.querySelector("#currentTemperature");
  temperatureElement.innerHTML = Math.round(response.data.temperature.current);
}
