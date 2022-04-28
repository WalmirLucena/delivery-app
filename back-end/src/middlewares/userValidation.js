const service = require('../service/userService');

const userValidation = async (req, res, next) => {

  const userRegistered = await service.login(req.body);

  if (!userRegistered) return  (
    res.status(404).send({ message: 'User not found' }) 
  );

  if (!userRegistered.password) return (
    res.status(400).send({ message: 'Password incorrect' })
  );

  const { id, role, email, name, token } = userRegistered;

  req.body.user = {id, role, email, name, token};


  next();
};

module.exports = { userValidation };