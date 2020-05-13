import React from 'react';
import { FaLocationArrow, FaSearchLocation } from 'react-icons/fa';

import { Form } from './styles';

const Search: React.FC = () => {
  return (
    <>
      <Form>
        <div>
          <FaLocationArrow size={20} />
        </div>
        <input type="text" />
        <button type="submit">
          <FaSearchLocation size={20} />
        </button>
      </Form>
      <span>
        Enter the address, city name or zip code to get the weather forecast
      </span>
    </>
  );
};
export default Search;
