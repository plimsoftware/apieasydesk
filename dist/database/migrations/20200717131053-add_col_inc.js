"use strict";module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.addColumn(
    'incidents', // Tabela
    'active', // Coluna
    {
      type: Sequelize.BOOLEAN,
      allowNull: false,
    },
  ),


  down: () => {},
};
