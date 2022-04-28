const User = require("../models/user");
const { createToken } = require("../utils/utilsJWT");

const login = async (data) => {
    const {email, password} = data;

    const user = await User.findOne({where: {email}});

    if(!user) return false;

    const token = createToken(user);
}