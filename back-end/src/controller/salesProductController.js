const SalesProductService = require('../service/salesProductsService');

const create = async (req, res) => {
    const result = await SalesProductService.create(req.body);
    return res.status(201).json(result);
};

module.export = { create };