const { createUser } = require('../controller/userController');
const { saleBodyValidation } = require('../middlewares/saleValidation');

const salesRouter = [
  {
    method: 'post',
    path: '/sales',
    middleware: [saleBodyValidation],
    controller: createUser,
  },
];

module.exports = { salesRouter };