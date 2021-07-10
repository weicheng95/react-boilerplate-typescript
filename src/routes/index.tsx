// eslint-disable-next-line no-use-before-define
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';

import PrivateRoute from 'components/private-route';

import routesMap from './routes';

const Routes: React.FC = () => (
  <Router>
    <Switch>
      {routesMap.map((route) => (
        <PrivateRoute {...route} key={route.id} />
      ))}
    </Switch>
  </Router>
);

export default Routes;
