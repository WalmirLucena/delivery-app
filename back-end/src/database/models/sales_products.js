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
  models.products.belongsToMany(models.sales, {
    as: 'sales',
    through: salesProducts,
    foreignKey: 'product_id',
    otherKey: 'sale_id',
  });

  models.sales.belongsToMany(models.products, {
    as: 'products',
    through: salesProducts,
    foreignKey: 'sales_id',
    otherKey: 'product_id',
  });

}

module.exports = SalesProducts;
