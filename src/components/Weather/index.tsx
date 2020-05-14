import React, { useState, useEffect } from 'react';

import { Container } from './styles';

import { TiWeatherSunny } from 'react-icons/ti';
import { weatherApi } from '../../services/api';

interface WeatherProps {
  latitude: string;
  longitude: string;
}

interface Weathers {
  dt: number;
  weather: any[];
  temp: number;
  feels_like: number;
  humidity: number;
}

const Weather: React.FC<WeatherProps> = ({ latitude, longitude }) => {
  const [condition, setCondition] = useState([]);
  const [temperature, setTemperature] = useState([]);
  const [feels, setFeels] = useState([]);
  const [humidity, setHumidity] = useState([]);

  const [weathers, setWeathers] = useState<Weathers[]>([]);

  useEffect(() => {
    weatherApi
      // ${response.data.results[0].address_components[3].long_name}
      .get(``)
      .then((response) => {
        console.log(response.data.hourly.slice(0, 6));

        setWeathers(response.data.hourly.slice(0, 6));
      });
  }, []);

  return (
    <Container>
      <h1>{`Light rain currently in Florianópolis. The temperature is 23 C.`}</h1>
      <div>
        <ul>
          <li></li>
          <li>Condition</li>
          <li>Temp</li>
          <li>Feels Like</li>
          <li>Humidity</li>
        </ul>
        {weathers.map((weather) => (
          <ul key={weather.dt}>
            <li>{weather.dt} </li>
            <li>{weather.weather[0].icon}</li>
            <li>{weather.temp}</li>
            <li>{weather.feels_like}</li>
            <li>{weather.humidity}</li>
          </ul>
        ))}
      </div>
    </Container>
  );
};
export default Weather;
