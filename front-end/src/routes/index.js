import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import {
  Login,
  Register,
  CustomerProduct,
  CustomerCheckout,
  CustomerOrder,
} from '../pages';

function RoutesApp() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/login" component={ Login } />
        <Route path="/register" component={ Register } />
        <Route path="/customer/products" component={ CustomerProduct } />
        <Route path="/customer/checkout" component={ CustomerCheckout } />
        <Route path="/customer/order" component={ CustomerOrder } />
      </Switch>
    </BrowserRouter>
  );
}

export default RoutesApp;
