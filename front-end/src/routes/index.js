import React from 'react';
import { Route, Switch } from 'react-router';

import { Login, Register } from '../pages';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/login" component={ Login } />
      <Route path="/register" component={ Register } />
    </Switch>
  );
}
