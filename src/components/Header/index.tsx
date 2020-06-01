import React from 'react';
import { Link } from 'react-router-dom';

import { HeaderMenu } from './styles';

const Header: React.FC = () => {
  return (
    <HeaderMenu>
      <Link to="/">Weather Forecast</Link>
      <div>
        <Link className="active" to="/">
          Forecast
        </Link>
        <a href="https://viniciusdias.works/">About</a>
      </div>
    </HeaderMenu>
  );
};

export default Header;
