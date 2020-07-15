"use strict";module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.addColumn(
    'orders', // Tabela
    'client_id', // Coluna
    {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'clients',
        key: 'id',
      },
      onDelete: 'CASCADE',
    },
  ),


  down: () => {},
};
