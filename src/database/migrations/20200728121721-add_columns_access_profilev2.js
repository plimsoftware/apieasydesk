module.exports = {
  up: async (queryInterface, Sequelize) => {
    try {
      await queryInterface.addColumn('profile', 'inccreate', {
        type: Sequelize.STRING,
        allowNull: true,
      });
      await queryInterface.addColumn('profile', 'inccomplete', {
        type: Sequelize.STRING,
        allowNull: true,
      });
      await queryInterface.addColumn('profile', 'incclose', {
        type: Sequelize.STRING,
        allowNull: true,
      });
      await queryInterface.addColumn('profile', 'inccancel', {
        type: Sequelize.STRING,
        allowNull: true,
      });
      await queryInterface.addColumn('profile', 'reqcreate', {
        type: Sequelize.STRING,
        allowNull: true,
      });
      await queryInterface.addColumn('profile', 'reqcomplete', {
        type: Sequelize.STRING,
        allowNull: true,
      });
      await queryInterface.addColumn('profile', 'reqclose', {
        type: Sequelize.STRING,
        allowNull: true,
      });
      await queryInterface.addColumn('profile', 'reqcancel', {
        type: Sequelize.STRING,
        allowNull: true,
      });
      await queryInterface.addColumn('profile', 'chgcreate', {
        type: Sequelize.STRING,
        allowNull: true,
      });
      await queryInterface.addColumn('profile', 'chgcomplete', {
        type: Sequelize.STRING,
        allowNull: true,
      });
      await queryInterface.addColumn('profile', 'chgclose', {
        type: Sequelize.STRING,
        allowNull: true,
      });
      await queryInterface.addColumn('profile', 'chgcancel', {
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
