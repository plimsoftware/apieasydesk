module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.addColumn(
    'requests', // Tabela
    'active', // Coluna
    {
      type: Sequelize.BOOLEAN,
      allowNull: false,
    },
  ),


  down: () => {},
};
