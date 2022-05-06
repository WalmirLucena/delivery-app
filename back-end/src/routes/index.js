const { loginRouter } = require('./loginRoutes');
const { productRouter } = require('./productRoutes');
const { registerRouter } = require('./registerRoutes');

const routes = [...loginRouter, ...registerRouter, ...productRouter];

module.exports = { routes };
