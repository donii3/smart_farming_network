const WEATHER_API = "https://api.open-meteo.com/v1/forecast";
const GEOCODING_API = "https://geocoding-api.open-meteo.com/v1/search";

export async function searchLocation(query) {
  const params = new URLSearchParams({
    name: query,
    count: "5",
    language: "en",
    format: "json",
  });

  const response = await fetch(
    `${GEOCODING_API}?${params.toString()}`
  );

  if (!response.ok) {
    throw new Error("Unable to search for location.");
  }

  const data = await response.json();

  return data.results || [];
}

export async function getWeather(latitude, longitude) {
  const params = new URLSearchParams({
    latitude,
    longitude,

    timezone: "auto",

    forecast_days: "7",

    current: [
      "temperature_2m",
      "relative_humidity_2m",
      "apparent_temperature",
      "precipitation",
      "rain",
      "weather_code",
      "wind_speed_10m",
      "wind_direction_10m",
    ].join(","),

    hourly: [
      "temperature_2m",
      "relative_humidity_2m",
      "precipitation_probability",
      "precipitation",
      "rain",
      "weather_code",
      "wind_speed_10m",
      "soil_temperature_0cm",
      "soil_temperature_6cm",
      "soil_moisture_0_to_1cm",
      "soil_moisture_1_to_3cm",
      "soil_moisture_3_to_9cm",
      "et0_fao_evapotranspiration",
    ].join(","),

    daily: [
      "weather_code",
      "temperature_2m_max",
      "temperature_2m_min",
      "precipitation_sum",
      "rain_sum",
      "precipitation_probability_max",
      "wind_speed_10m_max",
      "et0_fao_evapotranspiration",
      "sunrise",
      "sunset",
    ].join(","),
  });

  const response = await fetch(
    `${WEATHER_API}?${params.toString()}`,
    {
      next: {
        revalidate: 1800,
      },
    }
  );

  if (!response.ok) {
    throw new Error("Unable to fetch weather data.");
  }

  return response.json();
}