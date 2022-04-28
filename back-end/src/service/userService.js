const { users } = require('../database/models');
const { createToken } = require('../utils/utilsJWT');
const checkPassword = require('../utils/checkPassword');

const login = async (data) => {

  const userRegistered = await users.findOne({ where: { email: data.email } });

  if(!userRegistered) return  false;

  const password = checkPassword(data.password, userRegistered.password);

  const token = createToken(userRegistered);

  return {
    id: userRegistered.id,
    name: userRegistered.name,
    role: userRegistered.role,
    email: userRegistered.email,
    password,
    token
  };
};

module.exports = { login };