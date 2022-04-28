const express = require('express');
const bodyParser = require('body-parser');
const { routes } = require('../database/routes')

const app = express();

app.use(bodyParser.json());

app.get('/coffee', (_req, res) => res.status(418).end());
// app.use('/', router);

  routes.forEach((route) => {
    const { method, path, middleware, controller } = route;
    app[method](path, ...middleware, controller);
  });

module.exports = app;
