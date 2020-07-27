"use strict";module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.addColumn(
    'profile', // Tabela
    'updatedby', // Coluna
    {
      type: Sequelize.STRING,
      allowNull: false,
    },
  ),


  down: () => {},
};
