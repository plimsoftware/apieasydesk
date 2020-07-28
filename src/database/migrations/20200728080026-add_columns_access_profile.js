module.exports = {
  up: async (queryInterface, Sequelize) => {
    try {
      await queryInterface.addColumn('profile', 'incmngt', {
        type: Sequelize.STRING,
        allowNull: true,
      });
      await queryInterface.addColumn('profile', 'reqmngt', {
        type: Sequelize.STRING,
        allowNull: true,
      });
      await queryInterface.addColumn('profile', 'chgmngt', {
        type: Sequelize.STRING,
        allowNull: true,
      });
      await queryInterface.addColumn('profile', 'admin', {
        type: Sequelize.STRING,
        allowNull: true,
      });
      await queryInterface.addColumn('profile', 'clientchg', {
        type: Sequelize.STRING,
        allowNull: true,
      });
      await queryInterface.addColumn('profile', 'clientfull', {
        type: Sequelize.STRING,
        allowNull: true,
      });
      await queryInterface.addColumn('profile', 'companychg', {
        type: Sequelize.STRING,
        allowNull: true,
      });
      await queryInterface.addColumn('profile', 'companyfull', {
        type: Sequelize.STRING,
        allowNull: true,
      });
      await queryInterface.addColumn('profile', 'catchg', {
        type: Sequelize.STRING,
        allowNull: true,
      });
      await queryInterface.addColumn('profile', 'catfull', {
        type: Sequelize.STRING,
        allowNull: true,
      });
      await queryInterface.addColumn('profile', 'userchg', {
        type: Sequelize.STRING,
        allowNull: true,
      });
      await queryInterface.addColumn('profile', 'userfull', {
        type: Sequelize.STRING,
        allowNull: true,
      });
      return Promise.resolve();
    } catch (e) {
      return Promise.reject(e);
    }
  },


  down: () => {},
};
