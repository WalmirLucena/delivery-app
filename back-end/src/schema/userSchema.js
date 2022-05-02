const Joi = require('joi');

const userSchema = Joi.object().keys({
    name: Joi.string().min(12).required(),
    email: Joi.string().required().email().required(),
    password: Joi.string().min(6).required(),
    role: Joi.string().valid('seller', 'customer', 'administrator').required(),
});

module.exports = userSchema;