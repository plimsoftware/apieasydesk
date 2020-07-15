module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.addColumn(
    'users', // Tabela
    'admin', // Coluna
    {
      type: Sequelize.BOOLEAN,
      allowNull: false,
    },
  ),


  down: () => {},
};
