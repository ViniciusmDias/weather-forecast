import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Forecast from '../pages/Forecast';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Forecast} />
  </Switch>
);
export default Routes;
