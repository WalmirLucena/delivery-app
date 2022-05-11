const { create } = require('../controller/salesProductController');
const { validateToken } = require('../middlewares/userValidation');

const saleProductRouter = [
  {
    method: 'post',
    path: '/sales-product',
    middleware: [validateToken],
    controller: create,
  },
];

module.exports = { saleProductRouter };