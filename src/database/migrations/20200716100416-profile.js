module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('profile', {
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
    active: {
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
    incmngt: {
      type: Sequelize.BOOLEAN,
      allowNull: true,
    },
    reqmngt: {
      type: Sequelize.BOOLEAN,
      allowNull: true,
    },
    chgmngt: {
      type: Sequelize.BOOLEAN,
      allowNull: true,
    },
    admin: {
      type: Sequelize.BOOLEAN,
      allowNull: true,
    },
    clientchg: {
      type: Sequelize.BOOLEAN,
      allowNull: true,
    },
    clientfull: {
      type: Sequelize.BOOLEAN,
      allowNull: true,
    },
    companychg: {
      type: Sequelize.BOOLEAN,
      allowNull: true,
    },
    companyfull: {
      type: Sequelize.BOOLEAN,
      allowNull: true,
    },
    catchg: {
      type: Sequelize.BOOLEAN,
      allowNull: true,
    },
    catfull: {
      type: Sequelize.BOOLEAN,
      allowNull: true,
    },
    userchg: {
      type: Sequelize.BOOLEAN,
      allowNull: true,
    },
    userfull: {
      type: Sequelize.BOOLEAN,
      allowNull: true,
    },
    inccreate: {
      type: Sequelize.BOOLEAN,
      allowNull: true,
    },
    inccomplete: {
      type: Sequelize.BOOLEAN,
      allowNull: true,
    },
    incclose: {
      type: Sequelize.BOOLEAN,
      allowNull: true,
    },
    inccancel: {
      type: Sequelize.BOOLEAN,
      allowNull: true,
    },
    reqcreate: {
      type: Sequelize.BOOLEAN,
      allowNull: true,
    },
    reqcomplete: {
      type: Sequelize.BOOLEAN,
      allowNull: true,
    },
    reqclose: {
      type: Sequelize.BOOLEAN,
      allowNull: true,
    },
    reqcancel: {
      type: Sequelize.BOOLEAN,
      allowNull: true,
    },
    chgcreate: {
      type: Sequelize.BOOLEAN,
      allowNull: true,
    },
    chgcomplete: {
      type: Sequelize.BOOLEAN,
      allowNull: true,
    },
    chgclose: {
      type: Sequelize.BOOLEAN,
      allowNull: true,
    },
    chgcancel: {
      type: Sequelize.BOOLEAN,
      allowNull: true,
    },
  }),

  down: (queryInterface) => queryInterface.dropTable('profile'),
};
