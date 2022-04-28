const checkPassword = require("../utils/checkPassword");
const { users } = require('../models')
const { createToken } = require("../utils/utilsJWT");

const login = async (data) => {
    const {email, password} = data;

    const userRegistered = await users.findOne({ where: { email } });

    if(!userRegistered) return ({ status: 404, message: 'User already registered' });

   const correctPassword = checkPassword(password, userRegistered.password)

   if(!correctPassword) return ({ status: 400 , message: 'Password incorrect' });

    const token = createToken(userRegistered);

    return {
        id: userRegistered.id,
        name: userRegistered.name,
        role: userRegistered.role,
        token
    }
}


module.exports = {login};