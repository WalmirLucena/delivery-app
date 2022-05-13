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
    tablename: 'sales_products',
    underscored: true,
    timestamps: false,
  });

  salesProducts.associate = (models) => {
    models.products.belongsToMany(models.sales, { foreignKey: "saleId", through:salesProducts, as: "sales", otherKey: 'productId' });

    models.sales.belongsToMany(models.products, { foreignKey: "productId",through:salesProducts, as: "products", otherKey: 'saleId' });
  }

  return salesProducts;
};


module.exports = SalesProducts;
