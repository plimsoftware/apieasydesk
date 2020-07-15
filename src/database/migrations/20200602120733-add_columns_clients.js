module.exports = {
  async up(queryInterface, Sequelize) {
    const transaction = await queryInterface.sequelize.transaction();
    try {
      await queryInterface.addColumn(
        'clients', // Tabela
        'address1deliver', // Coluna
        {
          type: Sequelize.STRING,
          allowNull: true,
        },
        { transaction },
      );
      await queryInterface.addColumn(
        'clients', // Tabela
        'address2deliver', // Coluna
        {
          type: Sequelize.STRING,
          allowNull: true,
        },
        { transaction },
      );
      await queryInterface.addColumn(
        'clients', // Tabela
        'locationdeliver', // Coluna
        {
          type: Sequelize.STRING,
          allowNull: true,
        },
        { transaction },
      );
      await queryInterface.addColumn(
        'clients', // Tabela
        'locationcpdeliver', // Coluna
        {
          type: Sequelize.STRING,
          allowNull: true,
        },
        { transaction },
      );
      await transaction.commit();
    } catch (err) {
      await transaction.rollback();
      throw err;
    }
  },


};
