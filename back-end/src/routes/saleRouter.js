const { create, getSales } = require('../controller/saleController');
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
];

module.exports = { salesRouter };