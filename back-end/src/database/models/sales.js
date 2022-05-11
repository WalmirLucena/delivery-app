'use strict';
const Sale = (sequelize, DataTypes) => {
  const sale = sequelize.define('sales', {
    userId: {
      type: DataTypes.INTEGER, foreignKey: true,
    },
    sellerId: {
      type: DataTypes.INTEGER, foreignKey: true,
    },
    totalPrice: DataTypes.DECIMAL,
    deliveryAddress: DataTypes.STRING,
    deliveryNumber: DataTypes.STRING,
    saleDate: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    status: DataTypes.STRING
  }, {
    tablename: 'sales',
    timestamps: false   
  });
  
  sale.associate = (models) => {
    sale.hasMany(models.users, { foreignKey: "id", as: "users" });

    sale.hasMany(models.salesProducts, {
      foreignKey: "saleId",
      as: "sales",
    });
  };
  

  return sale;
};

module.exports = Sale;
