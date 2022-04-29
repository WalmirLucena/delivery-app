import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { Login, Register } from '../pages';

function RoutesApp() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route path="/register" component={ Register } />
      </Switch>
    </BrowserRouter>
  );
}

export default RoutesApp;
