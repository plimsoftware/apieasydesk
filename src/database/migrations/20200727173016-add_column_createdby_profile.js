module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.addColumn(
    'profile', // Tabela
    'createdby', // Coluna
    {
      type: Sequelize.STRING,
      allowNull: false,
    },
  ),


  down: () => {},
};
