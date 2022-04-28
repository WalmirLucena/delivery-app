const service = require("../service/userService");

const userValidation = async (req, res, next) => {

  const userRegistered = await service.login(req.body);

  if (!userRegistered) return  (
    res.status(404).send({ message: 'User already registered' }) 
  )

 if (!userRegistered.password) return (
    res.status(400).send({ message: 'Password incorrect' })
 )

const { password, ...user } = userRegistered;

  req.body.user = user;

next()
}

module.exports = { userValidation };