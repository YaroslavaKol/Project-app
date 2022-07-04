/*let weather = {
  paris: {
    temp: 19.7,
    humidity: 80,
  },
  tokyo: {
    temp: 17.3,
    humidity: 50,
  },
  lisbon: {
    temp: 30.2,
    humidity: 20,
  },
  "san francisco": {
    temp: 20.9,
    humidity: 100,
  },
  oslo: {
    temp: -5,
    humidity: 20,
  },
};
//пользователь вводит город и его ввод причесывается, убираются пробелы и все приводится к нижднему регистру

let forecast = prompt("Enter a city");
forecast = forecast.trim();
forecast = forecast.toLowerCase();

//если ввод соответствовал одному из выбранных городов иф, если нет - элс

if (weather[forecast] !== undefined) {
  //переменная округляет температуру в выбранном городе

  let celsiusCity = Math.round(weather[forecast].temp);
  console.log(celsiusCity);

  //переменная переводит цельсий в фарингей и округляет температуру в выбранном городе

  let fahrenheitCity = (weather[forecast].temp * 9) / 5 + 32;
  fahrenheitCity = Math.round(fahrenheitCity);
  console.log(fahrenheitCity);

  alert(
    `It is currently ${celsiusCity}°C (${fahrenheitCity}°F) in ${forecast} with a humidity of ${weather[forecast].humidity}%`
  );
} else {
  alert(
    `Sorry, we don't know the weather for this city, try going to https://www.google.com/search?q=weather+${forecast}`
  );
}
*/
//сcurrent date and time

let currentDate = new Date();
let changeTime = document.querySelector("#current-time");
let changeDay = document.querySelector("#current-day");
let changeDate = document.querySelector("#date-city");
let days = [
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
}

let months = [
  "Jan",
  "Feb",
  "March",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
let month = months[currentDate.getMonth()];

let today = currentDate.getDate();
if (today < 10) {
  today = `0${today}`;
}

function todayDate() {
  changeDate.innerHTML = `${month}, ${today}`;
}
function todayDay() {
  changeDay.innerHTML = `${day}`;
}
function todayTime() {
  changeTime.innerHTML = `${hours}:${minutes}`;
}
todayTime();
todayDay();
todayDate();

//change the name of city

/*let searchInput = document.querySelector("#inputPassword2");
let changeCity = document.querySelector("#current-city");
let form = document.querySelector(".form");
function changeForecastCity(event) {
  event.preventDefault();
  changeCity.innerHTML = searchInput.value;
}

form.addEventListener("submit", changeForecastCity);
console.log(searchInput.value);*/

//change the temperature

let celsiusCity = document.querySelector("#celcius-link");
let fahrenheitCity = document.querySelector("#fahrenheit-link");
let changeDegreesStr = document.querySelector("#change-degrees");

function changeToFahrenheit(event) {
  event.preventDefault();
  let changeDegreesNum = changeDegreesStr.innerHTML;
  changeDegreesNum = Number(changeDegreesNum);
  let celsiusToFahrenheit = Math.round((changeDegreesNum * 9) / 5 + 32);
  changeDegreesStr.innerHTML = `${celsiusToFahrenheit}`;
}
function changeToCelsius(event) {
  event.preventDefault();
  let changeDegreesNum = changeDegreesStr.innerHTML;
  changeDegreesNum = Number(changeDegreesNum);
  let fahrenheitToCelsius = Math.round(((changeDegreesNum - 32) * 5) / 9);
  changeDegreesStr.innerHTML = `${fahrenheitToCelsius}`;
}
fahrenheitCity.addEventListener("click", changeToFahrenheit);
celsiusCity.addEventListener("click", changeToCelsius);

// Challenge 1
// 1. Modify the function is Windy and return true if the speed is greater than 5 and false if not
// 2. Call the function and alert ‘It is windy’ if it is windy, Else, alert ‘It is not windy’

/*function isWindy(speed) {
  return speed > 5;
}
let speed = prompt("What speed?");
if (isWindy(speed)) {
  alert("It is windy");
} else {
  alert("It is not windy");
}

// Challenge 2
// 1. Add unit parameter to isWindy
// 2. if greater than 5 and unit is metric, return true, else return false
// 3. Test both scenarios
// isWindy(2, 'imperial') should return false
// isWindy(20, 'metric') should return true

let speed2 = prompt("What is the speed?");
let unit = prompt("Is the unit imperial or metric?");
function isWindy2(speed2, unit) {
  if (speed2 > 5 && unit === "metric") {
    return true;
  } else {
    return false;
  }
}
if (isWindy2(speed2, unit)) {
  alert("It is windy");
} else {
  alert("It is not windy");
}


let nameInput = document.querySelector("input[type=username]");
let emailInput = document.querySelector("input[type=email]");
function showUpEverything() {
  alert(`Your name is ${nameInput.value}`);
  alert(`Your email is ${emailInput.value}`);
}
let signUpButton = document.querySelector("form > input[type=submit]");
signUpButton.addEventListener("click", showUpEverything());




//1
let hooray = document.querySelector("#special-button");
function message() {
  alert("Hooray!");
}
hooray.addEventListener("click", message);
//2
let signButton = document.querySelector("input[type=submit]");
let passwordValue = document.querySelector("#password-input");
function checkPassword() {
  alert(`Check if your password is correct: ${passwordValue.value}`);
}
signButton.addEventListener("click", checkPassword);
//3
let nameInput = document.querySelector("#username-input");
let emailInput = document.querySelector("#email-input");
function showUpEverything(event) {
  event.preventDefault();
  alert(`Your name is ${nameInput.value}`);
  alert(`Your email is ${emailInput.value}`);
}
let signUpButton = document.querySelector(
  "form#signup-form input[type=submit]"
);
signUpButton.addEventListener("click", alert("hi"));*/
//let apiKey = "075f2647bf920b2b68ba9a328b03f57c";
/*let apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?q=Sydney&units=metric&appid=075f2647bf920b2b68ba9a328b03f57c";

function showWeather(response) {
  console.log(response.data.weather);
  console.log(response.data.main.temp);
  let temperatureCurrent = Math.round(response.data.main.temp);
  let weatherShoot = document.querySelector("h1");
  weatherShoot.innerHTML = `It is ${temperatureCurrent} degrees in Sydney`;
}
axios.get(apiUrl).then(showWeather);*/

//
//1
/*function showTemperature(response) {
  console.log(response);
  console.log(response.data.main.temp);
  let temperatureCurrent = Math.round(response.data.main.temp);
  let weatherShoot = document.querySelector("h1");
  weatherShoot.innerHTML = `It is ${temperatureCurrent}`;
}
function showLocation(position) {
  console.log(position);
  let latitude = `${position.coords.latitude}`;
  let longitude = `${position.coords.longitude}`;
  console.log(latitude);
  console.log(longitude);
  let apiKey = "075f2647bf920b2b68ba9a328b03f57c";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showTemperature);
}

navigator.geolocation.getCurrentPosition(showLocation);*/

//change forecast
function searchCity(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#inputPassword2");
  let city = `${searchInput.value}`;
  let apiKey = "075f2647bf920b2b68ba9a328b03f57c";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(changeForecastCity);
}

function changeForecastCity(response) {
  let changeCity = document.querySelector("#current-city");
  let temperatureCurrent = Math.round(response.data.main.temp);
  let weatherShoot = document.querySelector("#change-degrees");
  weatherShoot.innerHTML = `${temperatureCurrent}`;
  changeCity.innerHTML = `${response.data.name}`;
  let skyDescription = document.querySelector("#ski-description");
  skyDescription.innerHTML = `${response.data.weather[0].description}`;
  let humidity = document.querySelector("#humidity");
  humidity.innerHTML = `${response.data.main.humidity}`;
  let windSpeed = document.querySelector("#wind-speed");
  windSpeed.innerHTML = Math.round(response.data.wind.speed);
}

let form = document.querySelector(".form");
form.addEventListener("submit", searchCity);

//button "Current" geolocation

function showTemperature(response) {
  let changeCity = document.querySelector("#current-city");
  let temperatureCurrent = Math.round(response.data.main.temp);
  let weatherShoot = document.querySelector("#change-degrees");
  weatherShoot.innerHTML = `${temperatureCurrent}`;
  changeCity.innerHTML = `${response.data.name}`;
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

let currentButton = document.querySelector("#current-button");
currentButton.addEventListener("click", changeGeolocation);
