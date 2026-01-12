export async function getWeatherByCity(city) {
  const geoRes = await fetch(
    `https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1&language=pt`
  );
  const geoData = await geoRes.json();

  if (!geoData.results) {
    throw new Error("Cidade não encontrada.");
  }

  const { latitude, longitude, name } = geoData.results[0];

  const weatherRes = await fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true&daily=weathercode,temperature_2m_max,temperature_2m_min&timezone=auto`
  );

  const weatherData = await weatherRes.json();

  return {
    city: name,
    current: weatherData.current_weather,
    daily: weatherData.daily
  };
}
