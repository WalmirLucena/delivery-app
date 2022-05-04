'use strict';
const Sale = (sequelize, DataTypes) => {
  const sale = sequelize.define('sales', {
    user_id: {
      type: DataTypes.INTEGER, foreignKey: true,
    },
    seller_id: {
      type: DataTypes.INTEGER, foreignKey: true,
    },
    total_price: DataTypes.INTEGER,
    delivery_address: DataTypes.STRING,
    delivery_number: DataTypes.STRING,
    sale_date: DataTypes.DATE,
    status: DataTypes.STRING
  }, {
    tablename: 'sales',
    underscore: true,
    timestamps: false   
  });
  
  sale.associate = (models) => {
    sale.belongsTo(models.User, {
      foreignKey: 'user_id', as: 'users',
    });
    sale.belongsTo(models.User, {
      foreignKey: 'seller_id', as: 'users',
    });
  };
  

  return sale;
};

module.exports = Sale;
