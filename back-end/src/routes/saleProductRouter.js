const { create } = require('../controller/salesProductController');

const saleProductRouter = [
  {
    method: 'post',
    path: '/sales-product',
    middleware: [],
    controller: create,
  },
];

module.exports = { saleProductRouter };