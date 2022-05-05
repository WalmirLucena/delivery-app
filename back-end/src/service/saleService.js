const { sales } = require('../database/models');

const create = async (data) => {
    const { userId,
        sellerId, 
        totalPrice,
        deliveryAddress, 
        deliveryNumber, 
        status } = data;

    const newSale = await sales.create({ 
        userId, 
        sellerId, 
        totalPrice, 
        deliveryAddress, 
        deliveryNumber, 
        status });

    return newSale;
};

const getById = async (data) => {
    const { id } = data;
    const sale = await sales.getById(id);

    return sale;
};

module.exports = { create, getById };