function WeatherCard({ weather, error, loading }) {
  const iconCode = weather?.iconCode || "";
  function getWeatherType(iconCode) {
    if (iconCode.startsWith("01")) {
      return "clear";
    } else if (
      iconCode.startsWith("02") ||
      iconCode.startsWith("03") ||
      iconCode.startsWith("04")
    ) {
      return "cloudy";
    } else if (iconCode.startsWith("09") || iconCode.startsWith("10")) {
      return "rainy";
    } else if (iconCode.startsWith("11")) {
      return "stormy";
    } else if (iconCode.startsWith("13")) {
      return "snowy";
    } else if (iconCode.startsWith("50")) {
      return "foggy";
    } else {
      return "default";
    }
  }
  const weatherType = getWeatherType(iconCode);
  const weatherStyles = {
    clear: "from-yellow-400/30 via-orange-400/20 to-blue-500/20",
    cloudy: "from-slate-400/30 via-slate-500/20 to-blue-500/20",
    rainy: "from-blue-600/40 via-blue-500/20 to-slate-700/30",
    stormy: "from-purple-700/40 via-slate-700/30 to-blue-900/40",
    snowy: "from-cyan-200/30 via-blue-200/20 to-slate-400/30",
    foggy: "from-gray-400/30 via-slate-400/20 to-gray-600/30",
    default: "from-white/20 to-white/10",
  };
  const cardStyle = weatherStyles[weatherType]

  return (
    <div className="w-full">
      {loading ? (
        <div className="bg-white/10 rounded-2xl p-6 text-white/70 text-center">
          Loading...
        </div>
      ) : error ? (
        <div className="bg-red-500/20 rounded-2xl p-6 text-white text-center shadow-lg">
          {error}
        </div>
      ) : weather ? (
        <div className={`bg-gradient-to-br ${cardStyle} rounded-2xl p-6 text-white text-center shadow-lg transition-all duration-500`}>
          <h2 className="text-3xl font-bold mb-4">{weather.city}</h2>

          <h3 className="text-6xl font-bold">{weather.temperature}°C</h3>

          <p className="text-xl mt-3 capitalize">
            {weather.icon && (
              <img
                src={weather.icon}
                alt={weather.description}
                className="inline-block w-12 h-12 mr-2"
              />
            )}
            {weather.description}
          </p>

          <div className="mt-6 space-y-2 text-lg">
            <p>
              <span className="font-semibold">Humidity:</span>{" "}
              {weather.humidity}%
            </p>

            <p>
              <span className="font-semibold">Wind:</span> {weather.windSpeed}{" "}
              m/s
            </p>
          </div>
        </div>
      ) : (
        <div className="bg-white/10 rounded-2xl p-6 text-white/70 text-center">
          Search for a city to see weather
        </div>
      )}
    </div>
  );
}

export default WeatherCard;
