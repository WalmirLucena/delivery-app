const { loginRouter } = require('./loginRoutes');
const { productRouter } = require('./productRoutes');
const { registerRouter } = require('./registerRoutes');
const { saleProductRouter } = require('./saleProductRouter');
const { salesRouter } = require('./saleRouter');
const { userRouter } = require('./userRoutes');

const routes = [
    ...loginRouter,
    ...registerRouter,
    ...productRouter,
    ...salesRouter,
    ...userRouter,
    ...saleProductRouter];

module.exports = { routes };
