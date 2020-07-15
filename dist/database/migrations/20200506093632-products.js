"use strict";module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('products', {
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    price: {
      type: Sequelize.FLOAT,
      allowNull: false,
    },
    tax: {
      type: Sequelize.FLOAT,
      allowNull: false,
    },
    visible: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
    },
    weight: {
      type: Sequelize.FLOAT,
      allowNull: true,
    },
    cart_desc: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    short_desc: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    long_desc: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    category_id: {
      type: Sequelize.INTEGER,
      allowNull: true,
      references: {
        model: 'productcategories',
        key: 'id',
      },
      onDelete: 'SET NULL',
      onUpdate: 'CASCADE',
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

  down: (queryInterface) => queryInterface.dropTable('products'),
};
