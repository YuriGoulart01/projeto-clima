const currentDiv = document.getElementById("currentWeather");
const forecastDiv = document.getElementById("forecast");

/* 🌄 Fundos */
const backgrounds = {
  clear: "https://images.unsplash.com/photo-1502082553048-f009c37129b9",
  clouds: "https://images.unsplash.com/photo-1501630834273-4b5604d2ee31",
  rain: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29",
  storm: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
  snow: "https://images.unsplash.com/photo-1608889175123-8ee362201f81",
  fog: "https://images.unsplash.com/photo-1508610048659-a06b669e3321"
};

function setBackground(type) {
  document.body.style.backgroundImage = `url(${backgrounds[type]})`;
}

/* 🌦 weathercode → tipo */
function weatherType(code) {
  if (code === 0) return "clear";
  if ([1,2,3].includes(code)) return "clouds";
  if ([45,48].includes(code)) return "fog";
  if ([51,61,63,65].includes(code)) return "rain";
  if ([71,73,75].includes(code)) return "snow";
  if ([95,96,99].includes(code)) return "storm";
  return "clear";
}

/* ☀️ SVGs — Apple Weather style */
function svgIcon(type) {
  const icons = {
    clear: `
      <svg viewBox="0 0 64 64" width="48">
        <circle cx="32" cy="32" r="12"
          fill="none"
          stroke="#fbbf24"
          stroke-width="3"/>
        <g stroke="#fbbf24" stroke-width="3" stroke-linecap="round">
          <line x1="32" y1="6" x2="32" y2="14"/>
          <line x1="32" y1="50" x2="32" y2="58"/>
          <line x1="6" y1="32" x2="14" y2="32"/>
          <line x1="50" y1="32" x2="58" y2="32"/>
          <line x1="14" y1="14" x2="20" y2="20"/>
          <line x1="44" y1="44" x2="50" y2="50"/>
          <line x1="14" y1="50" x2="20" y2="44"/>
          <line x1="44" y1="20" x2="50" y2="14"/>
        </g>
      </svg>
    `,
    clouds: `
      <svg viewBox="0 0 64 64" width="48">
        <path d="M20 40h26a10 10 0 0 0 0-20
                 14 14 0 0 0-27-3
                 A9 9 0 0 0 20 40z"
          fill="none"
          stroke="#cbd5e1"
          stroke-width="3"
          stroke-linecap="round"
          stroke-linejoin="round"/>
      </svg>
    `,
    rain: `
      <svg viewBox="0 0 64 64" width="48">
        <path d="M20 34h26a10 10 0 0 0 0-20
                 14 14 0 0 0-27-3
                 A9 9 0 0 0 20 34z"
          fill="none"
          stroke="#cbd5e1"
          stroke-width="3"
          stroke-linecap="round"
          stroke-linejoin="round"/>
        <g stroke="#38bdf8" stroke-width="3" stroke-linecap="round">
          <line x1="26" y1="40" x2="26" y2="50"/>
          <line x1="36" y1="40" x2="36" y2="50"/>
        </g>
      </svg>
    `,
    storm: `
      <svg viewBox="0 0 64 64" width="48">
        <path d="M20 34h26a10 10 0 0 0 0-20
                 14 14 0 0 0-27-3
                 A9 9 0 0 0 20 34z"
          fill="none"
          stroke="#cbd5e1"
          stroke-width="3"
          stroke-linecap="round"
          stroke-linejoin="round"/>
        <polygon points="30,38 36,38 32,50 38,50 28,62 32,52 26,52"
          fill="#facc15"/>
      </svg>
    `,
    snow: `
      <svg viewBox="0 0 64 64" width="48">
        <path d="M20 34h26a10 10 0 0 0 0-20
                 14 14 0 0 0-27-3
                 A9 9 0 0 0 20 34z"
          fill="none"
          stroke="#cbd5e1"
          stroke-width="3"
          stroke-linecap="round"
          stroke-linejoin="round"/>
        <g stroke="#e5e7eb" stroke-width="2" stroke-linecap="round">
          <line x1="26" y1="44" x2="26" y2="50"/>
          <line x1="36" y1="44" x2="36" y2="50"/>
        </g>
      </svg>
    `,
    fog: `
      <svg viewBox="0 0 64 64" width="48">
        <g stroke="#94a3b8" stroke-width="3" stroke-linecap="round">
          <line x1="12" y1="30" x2="52" y2="30"/>
          <line x1="16" y1="38" x2="48" y2="38"/>
          <line x1="20" y1="46" x2="44" y2="46"/>
        </g>
      </svg>
    `
  };

  return icons[type];
}

export function renderWeather(data) {
  const currentType = weatherType(data.current.weathercode);
  setBackground(currentType);

  currentDiv.innerHTML = `
    <div class="weather-icon">${svgIcon(currentType)}</div>
    <h2>${data.city}</h2>
    <p style="font-size:32px">${data.current.temperature}°C</p>
  `;

  renderForecast(data.daily);
}

function renderForecast(daily) {
  forecastDiv.innerHTML = "";

  daily.time.slice(0, 7).forEach((day, i) => {
    const type = weatherType(daily.weathercode[i]);
    const date = new Date(day);
    const name = date.toLocaleDateString("pt-BR", { weekday: "short" });

    forecastDiv.innerHTML += `
      <div class="forecast-day">
        <p>${name}</p>
        ${svgIcon(type)}
        <p class="temp">${daily.temperature_2m_min[i]}° / ${daily.temperature_2m_max[i]}°</p>
      </div>
    `;
  });
}

export function renderError(msg) {
  currentDiv.innerHTML = `<p>❌ ${msg}</p>`;
}
