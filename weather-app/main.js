import axios from "axios";
const currentCityInput = document.querySelector("#currentcity");
const forecastCityInput = document.querySelector(".left__input");
const showForecastButton = document.querySelector(".left__button");
const currentDataBtn = document.querySelector("#currentdata");
const currentWeatherContainer = document.querySelector(".weather");
const forecastCityText = document.querySelector(".el-city");
const forecastContainer = document.querySelector(".forcasts");
const reloadForecastDetails = document.querySelector(".el-reload");
const loader = document.querySelector(".loader");
const apikey = "Get Your Own Bro!😒😎";
const baseUrl = "https://api.weatherapi.com/v1/";

const showLoader = () => {
  loader.style.display = "flex";
  setTimeout(() => {
    loader.style.display = "none";
  }, 2000);
};

const showCurrentData = async () => {
  try {
    const city = currentCityInput.value;
    const response = await axios.get(
      `${baseUrl}current.json?key=${apikey}&q=${city || "Allahabad"}&aqi=no`
    );

    const data = response.data;

    const weatherCard = `
    <div class="weather-card">
        <div class="city-details">
        <span class="el-cityname">${data.location.name}, ${
      data.location.country
    }</span>
        <span class="el-time">${data.location.localtime.split(" ")[1]}</span>
        </div>
        <div class="temp-details">
        <img
            src="https:${data.current.condition.icon}"
            alt="Weather Icon"
            class="el-icon"
        />
        <span class="el-condition">${data.current.condition.text}</span>
        <span class="el-temp">${data.current.temp_c} C</span>
        </div>
        <div class="other-details">
        <span class="el-wind"
            >Wind Speed<span class="el-speed value">${
              data.current.wind_kph
            } KPH</span>
        </span>
        <span class="el-wind"
            >Humidity<span class="el-humidity value">${
              data.current.humidity
            }</span></span
        >
        <span class="el-wind"
            >Clouds<span class="el-cloud value">${
              data.current.cloud
            } %</span></span
        >
        </div>
    </div>
    `;
    currentWeatherContainer.innerHTML = weatherCard;
  } catch (err) {
    alert(`Sorry ${err.response.data.error.message} By API.`);
  }
};

showCurrentData();

currentDataBtn.addEventListener("click", () => {
  showLoader();
  showCurrentData();
});

const showForecastDetails = async () => {
  try {
    const forecastCity = forecastCityInput.value;
    const forecastUrl = `${baseUrl}forecast.json?key=${apikey}&q=${
      forecastCity || "Allahabad"
    }&days=3&aqi=no&alerts=no`;
    const response = await axios.get(forecastUrl);
    const data = response.data;

    forecastCityText.textContent = `City: ${data.location.name}`;

    const forecastData = data.forecast.forecastday;
    const forecastHtmlCard = forecastData
      .map((value) => {
        return `
            <div class="forcasts__list">
            <div class="forcast__date">
                <span class="el-date">${value.date}</span>
                <div class="tempbox">
                <span class="el-curr-temp el-max">Max Temp: ${value.day.maxtemp_c} C</span>
                <span class="el-curr-temp el-min">Min Temp: ${value.day.mintemp_c} C</span>
                </div>
            </div>
            <div class="forcast__condition">
                <img
                src="https:${value.day.condition.icon}"
                alt="Weather Conditino Image"
                class="el-image"
                />
                <span class="el-name">${value.day.condition.text}</span>
            </div>
            <div class="about__day">
                <span class="el-sunrise"
                ><img class="sun" src="/sunrise.png" alt="" />${value.astro.sunrise}</span
                >
                <span class="el-sunset"
                ><img class="sun" src="/sunset.png" alt="" />${value.astro.sunset}</span
                >
            </div>
            </div>
      `;
      })
      .join("");

    forecastContainer.innerHTML = forecastHtmlCard;
  } catch (err) {
    alert(`Sorry ${err.response.data.error.message} By API.`);
  }
};

showForecastDetails();

showForecastButton.addEventListener("click", () => {
  showLoader();
  showForecastDetails();
});
reloadForecastDetails.addEventListener("click", () => {
  showLoader();
  showForecastDetails();
});
