const SaleService = require('../service/saleService');

const create = async (req, res) => {
    console.log(req.body);
    const newSale = await SaleService.createSale(req.body);
    return res.status(200).json(newSale);
};

const getById = async (req, res) => {
    const sale = await SaleService.getById(req.body);

    if (!sale) return res.status(400).json({ message: 'Sale not found' });

    return res.status(200).json(sale);
};

module.exports = { create, getById };