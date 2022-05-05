const Joi = require('joi');

const saleSchema = Joi.object().keys({
    userId: Joi.number().required(),
    sellerId: Joi.number().required(),
    totalPrice: Joi.number().required(),
    deliveryAddress: Joi.string().require(),
    deliveryNumber: Joi.string().required(),
    status: Joi.string().valid('pending', 'delivered', 'preparing').required(),
});

module.exports = { saleSchema };