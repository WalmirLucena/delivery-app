'use strict';

const SalesProducts = (sequelize, DataTypes) => {
  const salesProducts = sequelize.define('salesProducts', {
    saleId: { 
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    productId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
      quantity: DataTypes.INTEGER,
  }, {
    tablename: 'salesProducts',
    timestamps: false,
  });

  salesProducts.associate = (models) => {
    salesProducts.belongsTo(models.sales, { foreignKey: "id", as: "sales" });

    salesProducts.belongsTo(models.products, { foreignKey: "id", as: "products" });
  }

  return salesProducts;
};


module.exports = SalesProducts;
