"use strict";module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.addColumn(
    'categories', // Tabela
    'defaultteam', // Coluna
    {
      type: Sequelize.STRING,
      allowNull: true,
    },
  ),


  down: () => {},
};
