module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('orders', {
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    order_address1: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    order_address2: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    order_location: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    order_locationcp: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    order_phone: {
      type: Sequelize.INTEGER,
      allowNull: true,
    },
    order_email: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    shipped: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
    },
    ship_status: {
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

  down: (queryInterface) => queryInterface.dropTable('orders'),
};
