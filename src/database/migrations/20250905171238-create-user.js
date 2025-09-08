'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('User', {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
        allowNull: false
      },
      userName: {
        type: Sequelize.STRING(50),
        allowNull: false,
        unique: true
      },
      email: {
        type: Sequelize.STRING(100),
        allowNull: false,
        unique: true
      },
      passwordHash: {
        type: Sequelize.STRING,
        allowNull: false
      },
      fullName: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      preferences: {
        type: Sequelize.JSONB,
        allowNull: true,
        defaultValue: { darkMode: false, notifications: true }
      },
      streakCount: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0
      },
      xpPoints: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0
      },
      role: {
        type: Sequelize.ENUM('user', 'admin'),
        allowNull: false,
        defaultValue: 'user'
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      }
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('User');
    await queryInterface.sequelize.query('DROP TYPE IF EXISTS "enum_User_role";');
  }
};
