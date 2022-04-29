const md5 = require('md5');
const { users } = require('../database/models');
const { createToken } = require('../utils/utilsJWT');
const checkPassword = require('../utils/checkPassword');

const login = async (data) => {
  const userRegistered = await users.findOne({ where: { email: data.email } });

  if (!userRegistered) return false;

  const password = checkPassword(data.password, userRegistered.password);

  const token = createToken(userRegistered);

  return { 
    id: userRegistered.id, 
    name: userRegistered.name,
    role: userRegistered.role,
    email: userRegistered.email,
    password,
    token, 
  };
};

const createUser = async (data) => {
  const { name, email, password, role } = data;

  const userRegistered = await users.findOne({ where: { email } });

  if (userRegistered) return false;

  const newUser = await users.create({ name, email, password: md5(password), role });

  const token = createToken(newUser);
  
  return {
    id: newUser.id,
    name,
    email,
    role,
    token,
  };
};

module.exports = { login, createUser };