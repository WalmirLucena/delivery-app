const { sales, salesProducts } = require('../database/models');

const createSalesProduct = async (data, id) => {
    const newSalesProduct = data.map(async (value) => {
        const salesProduct = { 
            quantity: value.quantity,
            productId: value.productId,
            saleId: id,
        };
        await salesProducts.create(salesProduct);
        return salesProduct;
    });
    const response = await Promise.all(newSalesProduct);

    return response;
};

const createSale = async (data) => {
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

    const { id } = newSale;

    const salesProduct = await createSalesProduct(cartList, id);

    return { newSale, salesProduct };
};

const getById = async (data) => {
    const { id } = data;
    const sale = await sales.findByPk(id);

    return sale;
};

// getByUserId

module.exports = { createSale, getById };