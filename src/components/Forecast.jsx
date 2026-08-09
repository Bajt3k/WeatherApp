
function Forecast({ forecast }) {
  return (
    <div className="w-full">
      {forecast && forecast.length > 0 ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
          {forecast.map((item, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-2xl p-4 text-white text-center shadow-lg hover:bg-white/15 hover:-translate-y-1 transition-all duration-300"
            >
              <h4 className="text-sm font-semibold text-white/80 mb-3">
                {new Date(item.dateTime).toLocaleDateString(undefined, {
                  weekday: "short",
                  day: "numeric",
                  month: "short",
                })}
              </h4>

              <img
                src={item.icon}
                alt={item.description}
                className="w-16 h-16 mx-auto"
              />

              <p className="text-2xl font-bold mt-2">
                {Math.round(item.temperature)}°C
              </p>

              <p className="text-sm text-white/80 capitalize mt-1 min-h-[40px]">
                {item.description}
              </p>

              <div className="border-t border-white/10 mt-3 pt-3 space-y-1 text-xs text-white/60">
                <p>💧 {item.humidity}%</p>
                <p>💨 {item.windSpeed} m/s</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-white/70 text-center">
          No forecast data available.
        </div>
      )}
    </div>
  );
}

export default Forecast;

