import { getWeatherData } from "./weather-api.js";

function initUI(city) {
  handleValue(city);
}

function getInputData(callback) {
  const searchForm = document.getElementById("searchForm");
  const searchBox = document.getElementById("searchBox");

  searchForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const searchBoxValue = searchBox.value;
    searchBox.value = "";

    callback(searchBoxValue);
  });
}

getInputData(handleValue);

function handleValue(value) {
  getWeatherData(value).then((data) => {
    updateUIInfo(data, "c");
    updateBackground(data);
  });
}

function updateUIInfo(city, unit) {
  const name = document.getElementById("cityName");
  const country = document.getElementById("countryName");
  const weatherCondition = document.getElementById("weatherCondition");
  const temperature = document.getElementById("temperatureValue");
  const feelslike = document.getElementById("feelsLikeValue");
  const humidity = document.getElementById("humidityValue");
  const windSpeed = document.getElementById("windSpeedValue");

  name.textContent = city.name;
  country.textContent = city.country;
  weatherCondition.textContent = city.condition;

  if (unit === "c") {
    temperature.textContent = city.temp_c;
    feelslike.textContent = city.feelslike_c;
  } else {
    temperature.textContent = city.temp_f;
    feelslike.textContent = city.feelslike_f;
  }

  humidity.textContent = city.humidity;
  windSpeed.textContent = city.windSpeed;

  handleChangeUnit(city);
}

function updateBackground(city) {
  const weatherCondition = city.condition;
  const body = document.querySelector("body");

  switch (weatherCondition) {
    case "Clear":
      resetBackground();
      body.classList.add("bg-clearSky");
      break;
    case "Partly cloudy":
      resetBackground();
      body.classList.add("bg-partlyCloud");
      break;
    case "Cloudy":
      resetBackground();
      body.classList.add("bg-cloudy");
      break;
    case weatherCondition.includes("rain"):
      resetBackground();
      body.classList.add("bg-rainy");
      break;
    case weatherCondition.includes("thunder"):
      resetBackground();
      body.classList.add("bg-thunderstorm");
      break;
    case "Snow":
      resetBackground();
      body.classList.add("bg-snowy");
      break;
    default:
      resetBackground();
      body.classList.add("bg-clearSky");
      break;
  }
}

function handleChangeUnit(city) {
  const tempUnitButtons = document.querySelectorAll(".temp-unit");

  tempUnitButtons.forEach((button) => changeUnit(button, city));
}

function changeUnit(button, city) {
  const temperatureUnits = document.querySelectorAll(".temperatureUnit");
  const tempUnitButtons = document.querySelectorAll(".temp-unit");

  button.addEventListener("click", () => {
    temperatureUnits.forEach((unit) => {
      unit.textContent = button.textContent;

      const processedUnit = button.textContent.replace(/°/g, "").toLowerCase();
      updateUIInfo(city, processedUnit);

      removeBorder(tempUnitButtons);
      button.classList.add("border");
    });
  });
}

function removeBorder(tempUnitButtons) {
  tempUnitButtons.forEach((button) => {
    button.classList.remove("border");
  });
}

function resetBackground() {
  const body = document.querySelector("body");

  body.classList.remove(
    "bg-clearSky",
    "bg-partlyCloud",
    "bg-cloudy",
    "bg-rainy",
    "bg-thunderstorm",
    "bg-snowy"
  );
}

export { initUI };
