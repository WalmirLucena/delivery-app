const { loginRouter } = require('./loginRoutes');
const { registerRouter } = require('./registerRoutes');

const routes = [...loginRouter, ...registerRouter];

module.exports = { routes };
