const { create } = require('../controller/saleController');
const { saleBodyValidation } = require('../middlewares/saleValidation');
const { validateToken } = require('../middlewares/userValidation');

const salesRouter = [
  {
    method: 'post',
    path: '/sales',
    middleware: [validateToken, saleBodyValidation],
    controller: create,
  },
];

module.exports = { salesRouter };