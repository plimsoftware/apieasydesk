"use strict";module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.addColumn(
    'products', // Tabela
    'priceunit', // Coluna
    {
      type: Sequelize.STRING,
      allowNull: false,
    },
  ),


  down: () => {},
};
