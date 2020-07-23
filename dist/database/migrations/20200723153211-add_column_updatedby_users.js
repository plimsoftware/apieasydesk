"use strict";module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.addColumn(
    'users', // Tabela
    'updatedby', // Coluna
    {
      type: Sequelize.STRING,
      allowNull: false,
    },
  ),


  down: () => {},
};
