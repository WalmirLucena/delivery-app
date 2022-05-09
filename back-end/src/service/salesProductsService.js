const { salesProducts} = require("../database/models");

const create = async(data) => {
    const newSalesProduct = data.map(async(value)=> {
        const salesProduct = { 
            quantity: value.quantity,
            productId: value.productId,
            saleId: value.saleId
        }
        await salesProducts.create(salesProduct)
        return salesProduct;
    })

    return newSalesProduct;
}

module.exports = { create };