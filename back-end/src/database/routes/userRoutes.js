const { login }  = require("../controller/userController")


const userRouter = [
  {
    method: 'post',
    path: '/login',
    middleware: [],
    controller: login,
  },
];

module.exports = { userRouter };