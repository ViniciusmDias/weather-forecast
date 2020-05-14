import React, { useEffect, useState, FormEvent } from 'react';

import Header from '../../components/Header';

import Weather from '../../components/Weather';

import api from 'axios';

import { FaLocationArrow, FaSearchLocation } from 'react-icons/fa';

import { Form, Subtitle } from './styles';

const Dashboard: React.FC = () => {
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [postal, setPostal] = useState('');

  const [input, setInput] = useState('');

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      console.log(position.coords.latitude);
      console.log(position.coords.longitude);
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
          });
          console.log(response.data.results[0]);
          // setGeoLocation(response.data.results[0].address_components[3].long_name);
          setLatitude(response.data.results[0].geometry.location.lat);
          setLongitude(response.data.results[0].geometry.location.lng);
        });
    });
  }, []);

  async function searchLocation(e: any, input: string) {
    e.preventDefault();
    const response = await api.get(
      `https://maps.googleapis.com/maps/api/geocode/json?address=${input}&key=AIzaSyD6rKc6URJVJv5GNgNydJxd19jitau6pg0`,
    );
    // const result = await api.get(
    //   `https://maps.googleapis.com/maps/api/geocode/json?latlng=${response.data.results[0].geometry.location.lat},${response.data.results[0].geometry.location.lng}&key=AIzaSyD6rKc6URJVJv5GNgNydJxd19jitau6pg0`,
    // );

    response.data.results[0].address_components.map((rep: any) => {
      rep.types.includes('administrative_area_level_2') &&
        setCity(rep.long_name);
      rep.types.includes('administrative_area_level_1') &&
        setState(rep.short_name);
    });
    console.log(response.data.results[0]);
    // setGeoLocation(response.data.results[0].address_components[3].long_name);
    setLatitude(response.data.results[0].geometry.location.lat);
    setLongitude(response.data.results[0].geometry.location.lng);
  }

  return (
    <>
      <Header />
      <Form>
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
      <Subtitle>
        Enter the address, city name (*with State, for more precision) or zip
        code to get the weather forecast
      </Subtitle>
      {latitude && (
        <Weather lat={Number(latitude)} long={Number(longitude)} city={city} />
      )}
    </>
  );
};

export default Dashboard;
