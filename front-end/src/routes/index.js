import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import {
  Login,
  Register,
  CustomerProduct,
  CustomerCheckout,
  CustomerOrder,
  CustomerOrderDetails,
  SellerOrder,
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
        <Route path="/custumer/order/:id" component={ CustomerOrderDetails } />
        <Route path="/seller/order" component={ SellerOrder } />
      </Switch>
    </BrowserRouter>
  );
}

export default RoutesApp;
