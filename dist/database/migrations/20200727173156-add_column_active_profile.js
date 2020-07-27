"use strict";module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.addColumn(
    'profile', // Tabela
    'active', // Coluna
    {
      type: Sequelize.BOOLEAN,
      allowNull: false,
    },
  ),


  down: () => {},
};
