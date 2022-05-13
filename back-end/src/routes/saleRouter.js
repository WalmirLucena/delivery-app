const { create, getSales, getSalesProduct } = require('../controller/saleController');
const { saleBodyValidation } = require('../middlewares/saleValidation');
const { validateToken } = require('../middlewares/userValidation');

const salesRouter = [
  {
    method: 'post',
    path: '/sales',
    middleware: [validateToken, saleBodyValidation],
    controller: create,
  },
  {
    method: 'get',
    path: '/sales',
    middleware: [],
    controller: getSales,
  },
  {
    method: 'post',
    path: '/orders',
    middleware: [],
    controller: getSalesProduct,
  },
];

module.exports = { salesRouter };