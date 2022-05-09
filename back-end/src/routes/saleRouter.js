const { create } = require('../controller/saleController');
const { saleBodyValidation } = require('../middlewares/saleValidation');

const salesRouter = [
  {
    method: 'post',
    path: '/sales',
    middleware: [saleBodyValidation],
    controller: create,
  },
];

module.exports = { salesRouter };