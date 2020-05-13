import React from 'react';
import { Link } from 'react-router-dom';

import { HeaderMenu } from './styles';

const Header: React.FC = () => {
  return (
    <HeaderMenu>
      <Link to="/">OnSign TV</Link>
      <div>
        <Link to="/">Forecast</Link>
        <Link to="/about">About</Link>
      </div>
    </HeaderMenu>
  );
};

export default Header;
