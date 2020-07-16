module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.changeColumn(
    'profile', // Tabela
    'name', // Coluna
    {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
    },
  ),


  down: () => {},
};
