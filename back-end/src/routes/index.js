const { userRouter } = require('./userRoutes');

const routes = [...userRouter];

module.exports = { routes };
