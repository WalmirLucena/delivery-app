const { sales, products } = require('../database/models');

const getSalesProduct = async ({ saleId }) => {
    const response = await sales.findAll({
        where: { id: saleId },
        include: [{
            model: products,
            as: 'products',
            through: { attributes: ['quantity'] }, 
        }],
    });

    return response;
};

module.exports = { getSalesProduct };