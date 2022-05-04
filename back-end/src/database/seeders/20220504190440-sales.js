'use strict'

module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('sales',
      [{
        id:1,
        user_id:1,
        seller_id: 2,
        total_price: 23,
        delivery_address: 'Rua sem saida',
        delivery_number: '1000',
        sale_date: '2022-05-05',
        status: 'ok',
      },
], { timestamps: false });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('sales', null, {});
  },
  };

