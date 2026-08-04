function WeatherCard({ weather }) {
  return (
    <div>
      {
        weather 
        ? <><h2>{weather.temperature}°C</h2><p>{weather.description}</p></>
        : <p>Loading...</p>
      }
    </div>
  );
}

export default WeatherCard;