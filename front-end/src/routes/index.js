import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { Login, Register, CustomerProduct } from '../pages';

function RoutesApp() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/login" component={ Login } />
        <Route path="/register" component={ Register } />
        <Route path="/customer/products" component={ CustomerProduct } />
      </Switch>
    </BrowserRouter>
  );
}

export default RoutesApp;
