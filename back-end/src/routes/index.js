const { loginRouter } = require('./loginRoutes');
const { productRouter } = require('./productRoutes');
const { registerRouter } = require('./registerRoutes');
const { salesRouter } = require('./saleRouter');

const routes = [...loginRouter, ...registerRouter, ...productRouter, ...salesRouter];

module.exports = { routes };
