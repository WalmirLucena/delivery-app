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

/*   user.associate = (models) => {
    user.hasOne(models.sales, {
      foreignKey: 'userId', as: 'users',
    });
    user.hasOne(models.sales, {
      foreignKey: 'sellerId', as: 'sales'
    })
  } */

  return user;
};

module.exports = User;
