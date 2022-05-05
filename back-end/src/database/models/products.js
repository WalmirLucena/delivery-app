'use strict';
const Product = (sequelize, DataTypes) => {
  const product = sequelize.define('products', {
    name: DataTypes.STRING,
    price: DataTypes.DECIMAL,
    url_image: DataTypes.STRING
  }, {
    tablename: 'products',
    underscored: true,
    timestamps: false   
  });

  product.associate = (models) => {
    product.hasMany(models.salesProducts, {
      foreignKey: "productId",
      as: "products",
    });
  };

  return product;
};

module.exports = Product;
