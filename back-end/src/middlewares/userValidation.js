const service = require('../service/userService');

const userValidation = async (req, res, next) => {
  const notFound = { message: 'User not found' };
  const PassIncorrect = { message: 'Password incorrect' };

  const userRegistered = await service.login(req.body);

  if (!userRegistered) return res.status(404).json(notFound);

  if (!userRegistered.password) return (res.status(400).json(PassIncorrect));

  const { password, ...user } = userRegistered;

  req.body.user = user;

next();
};

module.exports = { userValidation };