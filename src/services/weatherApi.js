export async function getWeather(city) {
  const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

  const response = await fetch(url);

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Failed to fetch weather data");
  }

  const weatherData = {
    city: data.name,
    temperature: data.main.temp,
    description: data.weather[0].description,
    humidity: data.main.humidity,
    windSpeed: data.wind.speed,
    icon: `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`,
    iconCode: data.weather[0].icon,
  };

  return weatherData;
}

export async function getWeatherForecast(city) {
  const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

  const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`;

  const response = await fetch(url);
    const data = await response.json();
    if (!response.ok) {
        throw new Error(data.message || "Failed to fetch weather forecast data");
    }
    const items = data.list.filter((item) => item.dt_txt.includes("12:00:00"));

    const forecastData = items.map((item) => ({
        dateTime: item.dt_txt,
        temperature: item.main.temp,
        description: item.weather[0].description,
        humidity: item.main.humidity,
        windSpeed: item.wind.speed,
        icon: `https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`,
        iconCode: item.weather[0].icon,
    }));

    return forecastData;
}