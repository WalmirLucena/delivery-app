const { deleteUser, getAllUsers } = require('../controller/userController');
const { idValidation } = require('../middlewares/userValidation');

const userRouter = [
  {
    method: 'get',
    path: '/user',
    middleware: [idValidation],
    controller: getAllUsers,
  },
  {
    method: 'delete',
    path: '/user',
    middleware: [idValidation],
    controller: deleteUser,
  },
];

module.exports = { userRouter };