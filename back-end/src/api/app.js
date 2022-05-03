const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { routes } = require('../routes');
 
const app = express();

app.use(bodyParser.json());
app.use(cors());

routes.forEach((route) => {
  const { method, path, middleware, controller, 
    
  } = route;
  app[method](path, ...middleware, controller);
});

module.exports = app;
