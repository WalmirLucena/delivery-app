
const login = async (req,res) => {

return res.status(200).json(req.body.user);           
}

module.exports = { login };