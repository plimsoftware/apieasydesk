module.exports = {
  up: async (queryInterface, Sequelize) => {
    try {
      await queryInterface.addColumn('incidents', 'clientid', {
        type: Sequelize.INTEGER,
        allowNull: false,
      });
      await queryInterface.addColumn('incidents', 'companyid', {
        type: Sequelize.INTEGER,
        allowNull: false,
      });
      await queryInterface.addColumn('incidents', 'reopenings', {
        type: Sequelize.INTEGER,
        allowNull: true,
      });
      await queryInterface.addColumn('incidents', 'reclassified', {
        type: Sequelize.BOOLEAN,
        allowNull: true,
      });
      return Promise.resolve();
    } catch (e) {
      return Promise.reject(e);
    }
  },


  down: () => {},
};
