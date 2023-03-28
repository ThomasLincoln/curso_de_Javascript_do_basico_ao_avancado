const bcrypt = require('bcryptjs');

module.exports = {

  up: async (queryInterface) => queryInterface.bulkInsert(
    'users',
    [{
      nome: 'John Doe',
      email: 'teste12@gmail.com',
      password_hash: await bcrypt.hash('123456', 8),
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      nome: 'John Doe 1',
      email: 'teste123@gmail.com',
      password_hash: await bcrypt.hash('123456', 8),
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      nome: 'John Doe2',
      email: 'teste124@gmail.com',
      password_hash: await bcrypt.hash('123456', 8),
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      nome: 'John Doe3',
      email: 'teste125@gmail.com',
      password_hash: await bcrypt.hash('123456', 8),
      created_at: new Date(),
      updated_at: new Date(),
    },
    ],
    {},
  ),
  down: () => {},
};
