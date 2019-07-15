import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Weather = ({ capital }) => {
  const [weather, setWeather] = useState({
    temperature: 0,
    windSpeed: 0,
    condition: '',
    windDirection: 'TBD'
  });

  useEffect(() => {
    const weatherUrl = `https://api.apixu.com/v1/current.json?key=e067bb125fc64eb1832175628191507&q=${capital}`;
    axios
      .get(weatherUrl)
      .then(res => {
        console.log(res.data);
        const weatherObj = {
          temperature: res.data.current.temp_c,
          condition: res.data.current.condition.icon,
          windSpeed: res.data.current.wind_kph,
          windDirection: res.data.current.wind_dir
        };
        setWeather(weatherObj);
      })
      .catch(error => console.log('Error', error));
  }, []);

  return (
    <div>
      <h3>Weather in {capital}</h3>
      <h4>Temperature: {weather.temperature}</h4>
      <img src={weather.condition} alt="condition" />
      <h4>
        Wind: {weather.windSpeed}, {weather.windDirection}
      </h4>
    </div>
  );
};

export default Weather;
