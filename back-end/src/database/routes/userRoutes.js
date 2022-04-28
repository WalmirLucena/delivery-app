const { Router } = require('express');
const userController = require('../controller/userController')

const userRoute = Router();

userRoute.post('/', userController.login);

module.exports = userRoute