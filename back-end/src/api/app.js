const express = require('express');
const bodyParser = require('body-parser');
const { routes } = require('../routes');

const app = express();

app.use(bodyParser.json());

routes.forEach((route) => {
  const { method, path, middleware, controller, 
    
  } = route;
  app[method](path, ...middleware, controller);
});

module.exports = app;
