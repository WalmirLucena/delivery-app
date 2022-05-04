const UserService = require('../service/userService');

const login = async (req, res) => res.status(200).json(req.body.user);

const createUser = async (req, res) => {
    const user = await UserService.createUser(req.body);
    return res.status(201).json(user);
};

module.exports = { login, createUser };