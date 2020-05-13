import React from 'react';

import { Container } from './styles';

import { TiWeatherSunny } from 'react-icons/ti';

const Weather: React.FC = () => {
  return (
    <Container>
      <h1>Light rain currently in Florianópolis. The temperature is 23 C.</h1>
      <div>
        <ul>
          <li></li>
          <li>Now</li>
          <li>3 pm</li>
          <li>4 pm</li>
          <li>5 pm</li>
          <li>6 pm</li>
          <li>7 pm</li>
        </ul>
        <ul>
          <li>Condition</li>
          <li>
            <TiWeatherSunny size={20} />
          </li>
          <li>
            <TiWeatherSunny size={20} />
          </li>
          <li>
            <TiWeatherSunny size={20} />
          </li>
          <li>
            <TiWeatherSunny size={20} />
          </li>
          <li>
            <TiWeatherSunny size={20} />
          </li>
          <li>
            <TiWeatherSunny size={20} />
          </li>
        </ul>
        <ul>
          <li>Temp</li>
          <li>24 C</li>
          <li>24 C</li>
          <li>24 C</li>
          <li>24 C</li>
          <li>24 C</li>
          <li>24 C</li>
        </ul>
        <ul>
          <li>Feels Like</li>
          <li>24 C</li>
          <li>24 C</li>
          <li>24 C</li>
          <li>24 C</li>
          <li>24 C</li>
          <li>24 C</li>
        </ul>
        <ul>
          <li>Humidity</li>
          <li>88%</li>
          <li>88%</li>
          <li>88%</li>
          <li>88%</li>
          <li>88%</li>
          <li>88%</li>
        </ul>
      </div>
    </Container>
  );
};
export default Weather;
