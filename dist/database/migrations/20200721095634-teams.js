"use strict";module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('teams', {
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    active: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    localsupportteam: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
    },
    createdby: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    updatedby: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    created_at: {
      type: Sequelize.DATE,
      allowNull: false,
    },
    updated_at: {
      type: Sequelize.DATE,
      allowNull: false,
    },
  }),

  down: (queryInterface) => queryInterface.dropTable('teams'),
};
