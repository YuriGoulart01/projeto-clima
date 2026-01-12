import { getWeatherByCity } from "./api.js";
import { renderWeather, renderError } from "./ui.js";

const input = document.getElementById("cityInput");
const button = document.getElementById("searchBtn");
const themeToggle = document.getElementById("themeToggle");

button.onclick = search;
themeToggle.onclick = toggleTheme;

function toggleTheme() {
  const theme =
    document.documentElement.getAttribute("data-theme") === "dark"
      ? "light"
      : "dark";

  document.documentElement.setAttribute("data-theme", theme);
}

async function search() {
  try {
    const city = input.value.trim();
    if (!city) return;

    const data = await getWeatherByCity(city);
    renderWeather(data);
  } catch (err) {
    renderError(err.message);
  }
}
