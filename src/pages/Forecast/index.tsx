import React, { useEffect, useState } from 'react';

import Header from '../../components/Header';
import Input from '../../components/Input';
import Weather from '../../components/Weather';

import { geolocationApi } from '../../services/api';

interface Geolocation {
  geolocation: object;
}

const Dashboard: React.FC = () => {
  const [geolocation, setGeoLocation] = useState('');
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [postal, setPostal] = useState('');

  useEffect(() => {
    geolocationApi.get(``).then((response) => {
      console.log(response.data.results[0]);

      setGeoLocation(response.data.results[0].address_components[3].long_name);
      setLatitude(response.data.results[0].geometry.location.lat);
      setLongitude(response.data.results[0].geometry.location.long);
      setCity(response.data.results[0].address_components[3].long_name);
      setState(response.data.results[0].address_components[5].long_name);
      setPostal(response.data.results[0].address_components[5].long_name);
    });
  }, []);

  return (
    <>
      <Header />
      <Input />
      <Weather latitude={latitude} longitude={longitude} />
    </>
  );
};

export default Dashboard;
