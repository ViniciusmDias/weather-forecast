import React from 'react';
import { NavLink } from 'react-router-dom';

import { HeaderMenu } from './styles';

const Header: React.FC = () => {
  return (
    <HeaderMenu>
      <NavLink to="/">OnSign TV</NavLink>
      <div>
        <NavLink activeClassName="active" exact to="/">
          Forecast
        </NavLink>
        <NavLink activeClassName="active" exact to="/about">
          About
        </NavLink>
      </div>
    </HeaderMenu>
  );
};

export default Header;
