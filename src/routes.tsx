import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import { Home } from './pages';

export const Routes: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </Router>
  );
}