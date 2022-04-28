const express = require('express');
const bodyParser = require('body-parser');
const router = require('../database/routes');

const app = express();

app.use(bodyParser.json());

app.get('/coffee', (_req, res) => res.status(418).end());
app.use('/', router);

module.exports = app;
