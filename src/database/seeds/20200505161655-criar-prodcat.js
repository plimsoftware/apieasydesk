module.exports = {
  up: async (queryInterface) => queryInterface.bulkInsert(
    'productcategories',
    [
      {
        name: 'Queijos',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Charcutaria',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Padaria e Pastelaria',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Ovos',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Talho',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Peixaria',
        created_at: new Date(),
        updated_at: new Date(),
      },
    ],
    {},
  ),

  down: () => {
  },
};
