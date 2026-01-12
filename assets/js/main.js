import { getWeatherByCity } from "./api.js";
import { renderWeather, renderError } from "./ui.js";

const button = document.getElementById("searchBtn");

button.addEventListener("click", async () => {
  const city = document.getElementById("cityInput").value.trim();

  if (!city) {
    renderError("Digite o nome de uma cidade.");
    return;
  }

  try {
    const weatherData = await getWeatherByCity(city);
    renderWeather(weatherData);
  } catch (error) {
    renderError("Erro ao buscar dados do clima.");
    console.error(error);
  }
});
