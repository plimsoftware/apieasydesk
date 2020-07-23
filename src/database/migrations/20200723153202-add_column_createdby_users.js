module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.addColumn(
    'users', // Tabela
    'createdby', // Coluna
    {
      type: Sequelize.STRING,
      allowNull: false,
    },
  ),


  down: () => {},
};
