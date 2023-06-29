import axios from "axios";
const currentCityInput = document.querySelector("#currentcity");
const currentDataBtn = document.querySelector("#currentdata");

const getCityName = () => {
  currentDataBtn.addEventListener("click", () => {
    const cityValue = currentCityInput.value;
    return cityValue;
  });
};

getCityName();

const getCurrentData = async (apikey) => {
  try {
    const city = getCityName();
    const response = await axios.get(
      `https://api.weatherapi.com/v1/current.json?key=${apikey}&q=${city}&aqi=no`
    );

    console.log(response);
  } catch (err) {
    console.log(err.response.data);
  }
};

currentDataBtn.addEventListener("click", getCurrentData);
