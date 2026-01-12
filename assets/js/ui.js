const resultDiv = document.getElementById("result");

export function renderWeather(data) {
  resultDiv.innerHTML = `
    🌍 <strong>${data.city}</strong><br>
    🌡 Temperatura atual: <strong>${data.temperature}°C</strong>
  `;
}

export function renderError(message) {
  resultDiv.textContent = `❌ ${message}`;
}
