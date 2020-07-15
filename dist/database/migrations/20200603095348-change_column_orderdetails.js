"use strict";module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.changeColumn(
    'orderdetails', // Tabela
    'order_id', // Coluna
    {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'orders',
        key: 'id',
      },
      onDelete: 'CASCADE',
    },
  ),


  down: () => {},
};
