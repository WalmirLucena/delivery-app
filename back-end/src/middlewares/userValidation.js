const service = require('../service/userService');
const { loginSchema } = require('../schema/userSchema');

const userValidation = async (req, res, next) => {
  const notFound = { message: 'User not found' };
  const PassIncorrect = { message: 'Password incorrect' };

  const validLogin = loginSchema.validate(req.body);

  if (validLogin.error) return res.status(400).json({ message: validLogin.error.message });

  const userRegistered = await service.login(req.body);

  if (!userRegistered) return res.status(404).json(notFound);

  if (!userRegistered.password) return (res.status(400).json(PassIncorrect));

  const { password, ...user } = userRegistered;

  req.body.user = user;

next();
};

module.exports = { userValidation };