'use strict';

const { v4: uuidv4 } = require('uuid');

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('User', [
      {
        id: uuidv4(),
        user_name: 'john_doe',
        email: 'john@example.com',
        password_hash: 'hashed_password',
        full_name: 'John Doe',
        preferences: JSON.stringify({ darkMode: false, notifications: true }),
        streak_count: 0,
        xp_points: 0,
        role: 'user',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: uuidv4(),
        user_name: 'jane_doe',
        email: 'jane@example.com',
        password_hash: 'hashed_password2',
        full_name: 'Jane Doe',
        preferences: JSON.stringify({ darkMode: true, notifications: false }),
        streak_count: 5,
        xp_points: 10,
        role: 'admin',
        created_at: new Date(),
        updated_at: new Date()
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('User', null, {});
  }
};
