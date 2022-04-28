import checkPassword from "../utils/checkPassword";

const User = require("../models/user");
const { createToken } = require("../utils/utilsJWT");

const login = async (data) => {
    const {email, password} = data;

    const user = await User.findOne({where: {email}});

    if(!user) return ({ message: 'User already registered' });

   const correctPassword = checkPassword(user.password)

   if(!correctPassword) return ({ message: 'Password incorrect' });

    const token = createToken(user);

    return {
        id: user.id,
        name: user.name,
        role: user.role,
        token
    }
}


export default {login}