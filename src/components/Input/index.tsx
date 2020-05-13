import React from 'react';
import { FaLocationArrow, FaSearchLocation } from 'react-icons/fa';

import { Form, Subtitle } from './styles';

const Search: React.FC = () => {
  return (
    <>
      <Form>
        <button type="submit">
          <FaLocationArrow size={20} />
        </button>
        <input placeholder="Florianópolis/SC " type="text" />
        <button type="submit">
          <FaSearchLocation size={20} color={'#fff'} />
        </button>
      </Form>
      <Subtitle>
        Enter the address, city name or zip code to get the weather forecast
      </Subtitle>
    </>
  );
};
export default Search;
