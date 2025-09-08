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
    await queryInterface.createTable('Card', {
      id: {
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4,
            primaryKey: true,
            allowNull: false
          },
          deckId: {
            type: Sequelize.UUID,
            allowNull: false,
            references: {
              model: 'Deck',
              key: 'id'
            },
            onDelete: 'CASCADE'
          },
          question: {
            type: Sequelize.TEXT,
            allowNull: false,
          },
          answer: {
            type: Sequelize.TEXT,
            allowNull: false,
          },
          isBidirectional: {
            type: Sequelize.BOOLEAN,
            allowNull: false,
            defaultValue: false
          },
          mediaUrls: {
            type: Sequelize.ARRAY(Sequelize.TEXT),
            defaultValue: []
          },
          hint: {
            type: Sequelize.TEXT,
            allowNull: false,
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
    await queryInterface.dropTable('Card');
  }
};
