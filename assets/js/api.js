export async function getWeatherByCity(city) {
  // 1️⃣ Geocoding: cidade → latitude/longitude
  const geoResponse = await fetch(
    `https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1&language=pt&format=json`
  );
  const geoData = await geoResponse.json();

  if (!geoData.results) {
    throw new Error("Cidade não encontrada");
  }

  const { latitude, longitude, name } = geoData.results[0];

  // 2️⃣ Buscar clima
  const weatherResponse = await fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`
  );
  const weatherData = await weatherResponse.json();

  return {
    city: name,
    temperature: weatherData.current_weather.temperature
  };
}
