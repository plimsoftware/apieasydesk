"use strict";module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.addColumn(
    'orders', // Tabela
    'orderid', // Coluna
    {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
    },
  ),


  down: () => {},
};
