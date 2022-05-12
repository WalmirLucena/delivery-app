const SalesProductsService = require('../service/salesProductService');

const getSalesProduct = async (req, res) => {
    const result = await SalesProductsService.getSalesProduct(req.body);
    return res.status(200).json(result);
};

module.exports = { getSalesProduct };