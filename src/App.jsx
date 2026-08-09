
import { useState } from "react";
import Search from "./components/Search";
import WeatherCard from "./components/WeatherCard";
import { getWeather, getWeatherForecast } from "./services/weatherApi";
import Forecast from "./components/Forecast";

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [forecast, setForecast] = useState([]);

  const trimmedCity = city.trim();

  async function handleSearch(e) {
    e.preventDefault();
    setError(null);

    if (!trimmedCity) {
      setError("Please enter a city name");
      setWeather(null);
      setForecast([]);
      return;
    }

    setLoading(true);

    try {
      const data = await getWeather(trimmedCity);
      const forecastData = await getWeatherForecast(trimmedCity);

      setWeather(data);
      setForecast(forecastData);

      console.log("Weather data:", data);
      console.log("Forecast data:", forecastData);
    } catch (err) {
      setWeather(null);
      setForecast([]);
      setError(`Could not find "${trimmedCity}"`);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 px-4 py-10">
      <div className="w-full max-w-6xl mx-auto">

        <div className="bg-white/10 backdrop-blur-md rounded-3xl p-6 sm:p-8 lg:p-10 shadow-2xl border border-white/10">

          <div className="flex flex-col items-center gap-8">

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight">
              Weather App
            </h1>

            <div className="w-full max-w-xl">
              <Search
                city={city}
                setCity={setCity}
                handleSearch={handleSearch}
              />
            </div>

            <div className="w-full">
              <WeatherCard
                weather={weather}
                error={error}
                loading={loading}
              />
            </div>

            {forecast.length > 0 && (
              <div className="w-full">
                <h2 className="text-2xl font-bold text-white mb-4">
                  5-Day Forecast
                </h2>

                <Forecast forecast={forecast} />
              </div>
            )}

          </div>

        </div>

      </div>
    </div>
  );
}

export default App;

