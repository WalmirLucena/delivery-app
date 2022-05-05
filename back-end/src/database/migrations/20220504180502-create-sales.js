'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('sales', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
        references: {
          model: 'users',
          key: 'id',
        },
      },
      sellerId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
        references: {
          model: 'users',
          key: 'id',
        },
      },
      totalPrice: {
        type: Sequelize.DECIMAL(9,2),
        allowNull: false,

      },
      deliveryAddress: {
        type: Sequelize.STRING,
        allowNull: false,

      },
      deliveryNumber: {
        type: Sequelize.STRING,
        allowNull: false,

      },
      saleDate: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.fn('now')
      },
      status: {
        type: Sequelize.STRING,
        allowNull: false,
        
      }
    });
  },

  down: async(queryInterface) => dropTable('sales'),

};