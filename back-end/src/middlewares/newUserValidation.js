const userSchema = require('../schema/userSchema');
const service = require('../service/userService');

const newUserValidation = async (req, res, next) => {
  const userRegistered = { message: 'User already registered' };

  const newUser = await service.createUser(req.body);

  if (!newUser) return (res.status(400).json(userRegistered));

  req.body.user = newUser;

next();
};

const userBodyValidation = async (req, res, next) => {
    const validation = userSchema.validate(req.body);

    if (validation.error) return res.status(500).json({ message: validation.error.message });

    next();
};

module.exports = { newUserValidation, userBodyValidation };