import { useState } from "react";
import Search from "./components/Search";
import WeatherCard from "./components/WeatherCard";
import { getWeather } from "./services/weatherApi";

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);
  async function handleSearch() {
    console.log("Searching:", city);
    setError(null);
    try {
      const data = await getWeather(city);
      const weatherData = {
        city: data.name,
        temperature: data.main.temp,
        description: data.weather[0].description,
        humidity: data.main.humidity,
        windSpeed: data.wind.speed,
      };
      setWeather(weatherData);
      console.log("Weather data:", data);
    } catch (err) {
      setWeather(null);
      setError(`Could not find "${city}"`);
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 flex items-center justify-center px-4">
      <div className="w-full max-w-md flex flex-col items-center gap-8 bg-white/10 backdrop-blur-md rounded-3xl p-8 shadow-2xl">
        <h1 className="text-5xl font-bold text-white tracking-tight">
          Weather App
        </h1>

        <Search city={city} setCity={setCity} handleSearch={handleSearch} />

        <WeatherCard weather={weather} error={error} />
      </div>
    </div>
  );
}

export default App;
