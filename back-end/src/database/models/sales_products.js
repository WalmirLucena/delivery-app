'use strict';

const SalesProducts = (sequelize, DataTypes) => {
  const salesProducts = sequelize.define('sales_products', {
    quantity: DataTypes.INTEGER,
  }, {
    tablename: 'sales_products',
    underscore: true,
    timestamps: false,
  });

  return salesProducts;
};

salesProducts.associate = (models) => {
  models.Products.belongsToMany(models.Sales, {
    as: 'sales',
    through: salesProducts,
    foreignKey: 'product_id',
    otherKey: 'sale_id',
  });

  models.Sales.belongsToMany(models.Products, {
    as: 'products',
    through: salesProducts,
    foreignKey: 'sales_id',
    otherKey: 'product_id',
  });

}

module.exports = SalesProducts;
