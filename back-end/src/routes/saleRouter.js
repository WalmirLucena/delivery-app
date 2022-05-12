const { create, getSalesProduct } = require('../controller/saleController');
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
    path: '/orders',
    middleware: [],
    controller: getSalesProduct,
  },
];

module.exports = { salesRouter };