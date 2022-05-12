const { getSalesProduct } = require('../controller/salesProductController');

const saleProductRouter = [
  {
    method: 'get',
    path: '/sales-product',
    middleware: [],
    controller: getSalesProduct,
  },
];

module.exports = { saleProductRouter };