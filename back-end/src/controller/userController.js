const login = async (req, res) => res.status(200).json(req.body.user);

const createUser = async (req, res) => res.status(201).json(req.body.user);

module.exports = { login, createUser };