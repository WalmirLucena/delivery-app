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

  return user;
};

module.exports = User;