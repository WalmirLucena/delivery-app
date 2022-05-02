const { createUser } = require('../controller/userController');
const { newUserValidation, userBodyValidation } = require('../middlewares/newUserValidation');

const registerRouter = [
  {
    method: 'post',
    path: '/register',
    middleware: [userBodyValidation, newUserValidation],
    controller: createUser,
  },
];

module.exports = { registerRouter };