const service = require('../service/userService');

const newUserValidation = async (req, res, next) => {
  const userRegistered = { message: 'User already registered' };

  const newUser = await service.createUser(req.body);

  if (!newUser) return (res.status(400).json(userRegistered));

  req.body.user = newUser;

next();
};

module.exports = { newUserValidation };