'use strict';

const User = (sequelize, DataTypes) => {
  const user = sequelize.define('users', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    role: DataTypes.STRING
  }, {
    tablename: 'users',
    timestamps: false,
  });

  user.associate = (models) => {
    user.hasOne(models.sales, {
      foreignKey: 'user_id', as: 'sales',
    });
    user.hasOne(models.sales, {
      foreignKey: 'seller_id', as: 'sales'
    })
  }

  return user;
};

module.exports = User;
