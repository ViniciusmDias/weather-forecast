import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Forecast from '../pages/Forecast';
import About from '../pages/About';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Forecast} />
    <Route path="/about" exact component={About} />
  </Switch>
);
export default Routes;
