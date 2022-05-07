const { deleteUser, getAllUsers } = require('../controller/userController');
const { idValidation } = require('../middlewares/userValidation');

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
    middleware: [idValidation],
    controller: deleteUser,
  },
];

module.exports = { userRouter };