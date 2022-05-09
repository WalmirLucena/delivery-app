'use strict'

module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('sales',
      [{
        id:1,
        userId:1,
        sellerId: 2,
        totalPrice: 23,
        deliveryAddress: 'Rua sem saida',
        deliveryNumber: '1000',
        saleDate: '2022-05-05',
        status: 'ok',
      },
], { timestamps: false });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('sales', null, {});
  },
  };

