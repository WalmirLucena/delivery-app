const userService = require("../service/userService")

const login = async (req,res) => {
    try {
        const loginUser = await userService.login(req.body);

        if(loginUser.message) {
            return res.status(loginUser.status).send({message: loginUser.message})
        }

        return res.status(200).json(loginUser);        
    } catch (err) {
        res.status(500)
        .json({ error: err.message });
    }
}

module.exports = { login };