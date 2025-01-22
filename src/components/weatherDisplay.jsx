
import React, { useEffect, useState } from 'react';

const WeatherDisplay = ({ location }) => {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchWeather = async (location) => {
    try {
      setLoading(true);
      const apiKey = 'bfd6a8254ec39f6eaa4ea1bd98efafb6';
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${apiKey}`
      );

      if (!response.ok) {
        throw new Error('Unable to fetch weather data.');
      }

      const data = await response.json();
      setWeather({
        temperature: data.main.temp,
        description: data.weather[0].description,
        icon: data.weather[0].icon,
      });
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (location) {
      fetchWeather(location);
    }
  }, [location]);

  if (loading) {
    return <div className="text-center text-muted">Fetching weather...</div>;
  }

  if (error) {
    return <div className="text-danger">Error: {error}</div>;
  }

  return (
    <div className="d-flex align-items-center">
      <img
        src={`https://openweathermap.org/img/wn/${weather.icon}@2x.png`}
        alt={weather.description}
        className="me-2"
        style={{ width: '50px', height: '50px' }}
      />
      <div>
        <p className="mb-0">{weather.temperature}°C</p>
        <small className="text-muted">{weather.description}</small>
      </div>
    </div>
  );
};

export default WeatherDisplay;
