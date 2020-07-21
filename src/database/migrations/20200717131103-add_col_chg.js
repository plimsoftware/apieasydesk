module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.addColumn(
    'changes', // Tabela
    'active', // Coluna
    {
      type: Sequelize.BOOLEAN,
      allowNull: false,
    },
  ),


  down: () => {},
};
