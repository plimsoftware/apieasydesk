module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.changeColumn(
    'productcategories', // Tabela
    'name', // Coluna
    {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
    },
  ),


  down: () => {},
};
