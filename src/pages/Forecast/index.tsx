import React, { useEffect, useState } from 'react';

import Header from '../../components/Header';

import Weather from '../../components/Weather';

import api from 'axios';

import { FaLocationArrow, FaSearchLocation } from 'react-icons/fa';

import { Form, Subtitle, Error } from './styles';

const Dashboard: React.FC = () => {
  const [inputError, setInputError] = useState('');

  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');

  const [input, setInput] = useState('');

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      try {
        api
          .get(
            `https://maps.googleapis.com/maps/api/geocode/json?latlng=${position.coords.latitude},${position.coords.longitude}&key=AIzaSyD6rKc6URJVJv5GNgNydJxd19jitau6pg0`,
          )
          .then((response) => {
            response.data.results[0].address_components.map((rep: any) => {
              rep.types.includes('administrative_area_level_2') &&
                setCity(rep.long_name);
              rep.types.includes('administrative_area_level_1') &&
                setState(rep.short_name);
              return;
            });
            setLatitude(response.data.results[0].geometry.location.lat);
            setLongitude(response.data.results[0].geometry.location.lng);

            setInputError('');
          });
      } catch (err) {
        setInputError('Erro na busca por esse repositório');
      }
    });
  }, []);

  async function searchLocation(e: any, input: string) {
    e.preventDefault();
    if (!input) {
      setInputError('Type city name or zip code in box text above to continue');
      return;
    }

    const response = await api.get(
      `https://maps.googleapis.com/maps/api/geocode/json?address=${input}&key=AIzaSyD6rKc6URJVJv5GNgNydJxd19jitau6pg0`,
    );
    console.log(response.data.results[0]);
    response.data.results[0].address_components.map((rep: any) => {
      rep.types.includes('administrative_area_level_2') &&
        setCity(rep.long_name);
      rep.types.includes('administrative_area_level_1') &&
        setState(rep.short_name);
    });
    setLatitude(response.data.results[0].geometry.location.lat);
    setLongitude(response.data.results[0].geometry.location.lng);
    setInputError('');
  }

  return (
    <>
      <Header />
      <Form hasError={!!inputError}>
        <button type="submit" onClick={(e) => searchLocation(e, input)}>
          <FaLocationArrow size={20} />
        </button>
        <input
          placeholder="Type here our location"
          type="text"
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => {
            if (e.key === 'Enter') {
              searchLocation(e, input);
            }
          }}
        />
        <button type="submit" onClick={(e) => searchLocation(e, input)}>
          <FaSearchLocation size={20} color={'#fff'} />
        </button>
      </Form>
      {inputError && <Error>{inputError}</Error>}

      <Subtitle hasError={!!inputError}>
        Enter the address, city name (*with State, for more precision) or zip
        code to get the weather forecast
      </Subtitle>
      {latitude && (
        <Weather
          lat={Number(latitude)}
          long={Number(longitude)}
          city={city}
          state={state}
        />
      )}
    </>
  );
};

export default Dashboard;
