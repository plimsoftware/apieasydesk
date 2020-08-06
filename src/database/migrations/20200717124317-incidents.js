module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('incidents', {
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    type: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    description: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    categorynv1: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    categorynv2: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    categorynv3: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    status: {
      type: Sequelize.STRING,
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
    assigneduser: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    assignedteam: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    company: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    phone: {
      type: Sequelize.INTEGER,
      allowNull: true,
    },
    clientid: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    reopenings: {
      type: Sequelize.INTEGER,
      allowNull: true,
    },
    reclassified: {
      type: Sequelize.BOOLEAN,
      allowNull: true,
    },
    companyid: {
      type: Sequelize.INTEGER,
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
    completed_at: {
      type: Sequelize.DATE,
      allowNull: true,
    },
    closed_at: {
      type: Sequelize.DATE,
      allowNull: true,
    },
    canceled_at: {
      type: Sequelize.DATE,
      allowNull: true,
    },
  }),

  down: (queryInterface) => queryInterface.dropTable('incidents'),
};
