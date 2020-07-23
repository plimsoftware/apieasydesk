module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.addColumn(
    'teammembers', // Tabela
    'teamid', // Coluna
    {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'teams',
        key: 'id',
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    },
  ),


  down: () => {},
};
