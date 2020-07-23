"use strict";module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.addColumn(
    'users', // Tabela
    'active', // Coluna
    {
      type: Sequelize.BOOLEAN,
      allowNull: false,
    },
  ),


  down: () => {},
};
