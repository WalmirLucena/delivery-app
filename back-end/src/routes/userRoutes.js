const { deleteUser, getAllUsers } = require('../controller/userController');
const { idValidation, validateToken } = require('../middlewares/userValidation');

const userRouter = [
  {
    method: 'get',
    path: '/user',
    middleware: [],
    controller: getAllUsers,
  },
  {
    method: 'delete',
    path: '/user/:id',
    middleware: [validateToken, idValidation],
    controller: deleteUser,
  },
];

module.exports = { userRouter };