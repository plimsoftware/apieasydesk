"use strict";module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('teammembers', {
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
    userid: {
      type: Sequelize.INTEGER,
      allowNull: false,
      unique: true,
      references: {
        model: 'users',
        key: 'id',
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
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

  down: (queryInterface) => queryInterface.dropTable('teammembers'),
};
