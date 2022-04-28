const { login } = require('../controller/userController');
const { userValidation } = require('../middlewares/userValidation');

const userRouter = [
  {
    method: 'post',
    path: '/login',
    middleware: [userValidation],
    controller: login,
  },
];

module.exports = { userRouter };