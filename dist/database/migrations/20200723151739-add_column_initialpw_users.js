"use strict";module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.addColumn(
    'users', // Tabela
    'initialpassword', // Coluna
    {
      type: Sequelize.BOOLEAN,
      allowNull: false,
    },
  ),


  down: () => {},
};
