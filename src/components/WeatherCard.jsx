function WeatherCard({ weather, error, loading }) {
  return (
    <div className="w-full">
      {
        loading ? (
          <div className="bg-white/10 rounded-2xl p-6 text-white/70 text-center">
            Loading...
          </div>
        ) : error ? (
          <div className="bg-red-500/20 rounded-2xl p-6 text-white text-center shadow-lg">
            {error}
          </div>
        ) :
        weather ? (
          <div className="bg-white/20 rounded-2xl p-6 text-white text-center shadow-lg">

            <h2 className="text-3xl font-bold mb-4">
              {weather.city}
            </h2>

            <h3 className="text-6xl font-bold">
              {weather.temperature}°C
            </h3>

            <p className="text-xl mt-3 capitalize">
              {weather.description}
            </p>

            <div className="mt-6 space-y-2 text-lg">
              <p>
                <span className="font-semibold">Humidity:</span>{" "}
                {weather.humidity}%
              </p>

              <p>
                <span className="font-semibold">Wind:</span>{" "}
                {weather.windSpeed} m/s
              </p>
            </div>

          </div>
        ) : (
          <div className="bg-white/10 rounded-2xl p-6 text-white/70 text-center">
            Search for a city to see weather
          </div>
        )
      }
    </div>
  );
}

export default WeatherCard;