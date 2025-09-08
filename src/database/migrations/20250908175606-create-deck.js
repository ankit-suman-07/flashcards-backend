'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.createTable('Deck', {
  id: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    primaryKey: true,
    allowNull: false
  },
  userId: {
    type: Sequelize.UUID,
    allowNull: false,
    references: {
      model: 'User',
      key: 'id'
    },
    onDelete: 'CASCADE'
  },
  name: {
    type: Sequelize.STRING(100),
    allowNull: false,
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: true,
  },
  visibility: {
    type: Sequelize.ENUM('private', 'shared', 'public'),
    defaultValue: 'private'
  },
  tags: {
    type: Sequelize.ARRAY(Sequelize.STRING(50)),
    defaultValue: []
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

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.dropTable('Deck');
    await queryInterface.sequelize.query('DROP TYPE IF EXISTS "enum_Deck_visibility";');
  }
};
