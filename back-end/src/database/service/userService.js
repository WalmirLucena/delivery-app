const checkPassword = require("../utils/checkPassword");
const { User } = require('../models');
const { createToken } = require("../utils/utilsJWT");

const login = async (data) => {
    const {email, password} = data;

    const user = await User.findOne({where: {email}});

    if(!user) return ({ status: 404, message: 'User already registered' });

   const correctPassword = checkPassword(password)

   if(!correctPassword) return ({ status: 400 , message: 'Password incorrect' });

    const token = createToken(user);

    return {
        id: user.id,
        name: user.name,
        role: user.role,
        token
    }
}


module.exports = {login};