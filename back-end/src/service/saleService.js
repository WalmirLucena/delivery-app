const { sales, salesProducts } = require('../database/models');

const create = async (data) => {
    const { userId,
        sellerId, 
        totalPrice,
        deliveryAddress, 
        deliveryNumber, 
        status,
        cartList } = data;

    const newSale = await sales.create({ 
        userId, 
        sellerId, 
        totalPrice, 
        deliveryAddress, 
        deliveryNumber, 
        status });

    const salesProduct = await salesProducts.create(cartList);

    return { newSale, salesProduct };
};

const getById = async (data) => {
    const { id } = data;
    const sale = await sales.findByPk(id);

    return sale;
};

// getByUserId

module.exports = { create, getById };