const { Router } = require('express');
const userRoute = require('./userRoutes')

const router = Router();

router.use('/login', userRoute);

module.exports = router;