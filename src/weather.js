//сcurrent date and time

let currentDate = new Date();

let changeDate = document.querySelector("#date-city");
/*let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[currentDate.getDay()];
let hours = currentDate.getHours();
if (hours < 10) {
  hours = `0${hours}`;
}
let minutes = currentDate.getMinutes();
if (minutes < 10) {
  minutes = `0${minutes}`;
}*/

let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
let month = months[currentDate.getMonth()];

let today = currentDate.getDate();
if (today < 10) {
  today = `0${today}`;
}

function todayDate() {
  changeDate.innerHTML = `${month}, ${today}`;
}
/*function todayDay() {
  changeDay.innerHTML = `${day}`;
}
function todayTime() {
  changeTime.innerHTML = `${hours}:${minutes}`;
}
todayTime();
todayDay();*/
todayDate();

//change the temperature

/*let celsiusCity = document.querySelector("#celcius-link");
let fahrenheitCity = document.querySelector("#fahrenheit-link");
let changeDegreesStr = document.querySelector("#change-degrees");

function changeToFahrenheit(event) {
  event.preventDefault();

  //remove tha active class from the celcium to fahrenheit link
  celsiusCity.classList.remove("active");
  fahrenheitCity.classList.add("active");
  let celsiusToFahrenheit = Math.round((temperatureCurrent * 9) / 5 + 32);
  changeDegreesStr.innerHTML = `${celsiusToFahrenheit}`;
}
function changeToCelsius(event) {
  event.preventDefault();

  celsiusCity.classList.add("active");
  fahrenheitCity.classList.remove("active");
  let fahrenheitToCelsius = Math.round(temperatureCurrent);
  changeDegreesStr.innerHTML = `${fahrenheitToCelsius}`;
}
fahrenheitCity.addEventListener("click", changeToFahrenheit);
celsiusCity.addEventListener("click", changeToCelsius);*/

//array with days of the week

function formatWeekday(timestamp) {
  let date = new Date(timestamp * 1000);

  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  let day = days[date.getDay()];

  return `${day}`;
}

//copy forecast block

function displayForecast(response) {
  let forecast = response.data.daily;

  let forecastElement = document.querySelector("#forecast");
  let forecastHTML = `<div class="row">`;

  forecast.forEach(function (forecastDay, index) {
    if (index < 6) {
      forecastHTML =
        forecastHTML +
        `
          <div class="col-2 forecast-unit">
            <div class="future-date">${formatWeekday(forecastDay.dt)}
            </div> <img
              src="http://openweathermap.org/img/wn/${
                forecastDay.weather[0].icon
              }@2x.png"
              class="forecast-icon"
              id="forecast-icon"
              width="42"
            />
            <div class="future-temperature" id="forecast">
              <span class="future-temperature-min">${Math.round(
                forecastDay.temp.min
              )}°C</span> /
              <span class="future-temperature-max">${Math.round(
                forecastDay.temp.max
              )}°C</span><br />

              <i class="fa-solid fa-wind"></i> ${Math.round(
                forecastDay.wind_speed
              )} km/h <br />
              <i class="fa-solid fa-umbrella"></i> ${forecastDay.humidity}%
          </div></div>`;
    }
  });
  forecastHTML = forecastHTML + `</div>`;
  forecastElement.innerHTML = forecastHTML;
}

//current time

function formatHours(timestamp) {
  let date = new Date(timestamp);
  let hours = date.getHours();
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  if (hours < 10) {
    hours = `0${hours}`;
  }
  return `${hours}:${minutes}`;
}

function formatDay(timestamp) {
  let date = new Date(timestamp);

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

  return `${day}`;
}

//change forecast

function changeForecastCity(response) {
  let changeCity = document.querySelector("#current-city");
  temperatureCurrent = Math.round(response.data.main.temp);
  let weatherShoot = document.querySelector("#change-degrees");
  weatherShoot.innerHTML = `${temperatureCurrent}`;
  changeCity.innerHTML = `${response.data.name}`;
  let skyDescription = document.querySelector("#sky-description");
  skyDescription.innerHTML = `${response.data.weather[0].description}`;
  let humidity = document.querySelector("#humidity");
  humidity.innerHTML = `${response.data.main.humidity}`;
  let windSpeed = document.querySelector("#wind-speed");
  windSpeed.innerHTML = Math.round(response.data.wind.speed);
  let hourElement = document.querySelector("#current-time");
  hourElement.innerHTML = formatHours(response.data.dt * 1000);
  let dayElement = document.querySelector("#current-day");
  dayElement.innerHTML = formatDay(response.data.dt * 1000);
  let iconElement = document.querySelector("#current-icon");
  iconElement.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
  );
  iconElement.setAttribute("alt", `${response.data.weather[0].description}`);

  getCoords(response.data.coord);
  changeAdvice(response.data.weather[0].description);
}

function searchCity(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#inputPassword2");
  let city = `${searchInput.value}`;
  let apiKey = "075f2647bf920b2b68ba9a328b03f57c";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(changeForecastCity);
}
let form = document.querySelector(".form");
form.addEventListener("submit", searchCity);

//receiving coordinats of the city that user search for

function getCoords(coordinats) {
  let apiKey = "075f2647bf920b2b68ba9a328b03f57c";
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${coordinats.lat}&lon=${coordinats.lon}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayForecast);
}

function changeAdvice(response) {
  let advice = document.querySelector(`#advice-text`);
  if (response == `rain` || response == `shower rain`) {
    advice.innerHTML = `Don't forget to bring an umbrella, it's going to rain today☔`;
  } else {
    advice.innerHTML = `
Great weather for walking! Bring sunglasses with you😎`;
  }
}

//button "Current" geolocation

function showTemperature(response) {
  let changeCity = document.querySelector("#current-city");
  temperatureCurrent = Math.round(response.data.main.temp);
  let weatherShoot = document.querySelector("#change-degrees");
  weatherShoot.innerHTML = `${temperatureCurrent}`;
  changeCity.innerHTML = `${response.data.name}`;
  let skyDescription = document.querySelector("#sky-description");
  skyDescription.innerHTML = `${response.data.weather[0].description}`;
  let humidity = document.querySelector("#humidity");
  humidity.innerHTML = `${response.data.main.humidity}`;
  let windSpeed = document.querySelector("#wind-speed");
  windSpeed.innerHTML = Math.round(response.data.wind.speed);
  let hourElement = document.querySelector("#current-time");
  hourElement.innerHTML = formatHours(response.data.dt * 1000);
  let dayElement = document.querySelector("#current-day");
  dayElement.innerHTML = formatDay(response.data.dt * 1000);
  let iconElement = document.querySelector("#current-icon");
  iconElement.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
  );
  iconElement.setAttribute("alt", `${response.data.weather[0].description}`);
  getCoords(response.data.coord);
  changeAdvice(response.data.weather[0].description);
}

function showLocation(position) {
  let latitude = `${position.coords.latitude}`;
  let longitude = `${position.coords.longitude}`;
  let apiKey = "075f2647bf920b2b68ba9a328b03f57c";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showTemperature);
}
function changeGeolocation(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(showLocation);
}

let temperatureCurrent = null;

let currentButton = document.querySelector("#current-button");
currentButton.addEventListener("click", changeGeolocation);

function defaultLocation() {
  navigator.geolocation.getCurrentPosition(showLocation);
}
defaultLocation("Porto");
