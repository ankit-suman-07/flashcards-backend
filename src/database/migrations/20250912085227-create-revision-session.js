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
    await queryInterface.createTable('RevisionSession', {
        id: {
          type: Sequelize.UUID,
          defaultValue: Sequelize.UUID4,
          primaryKey: true
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
        deckId: {
          type: Sequelize.UUID,
            allowNull: false,
            references: {
              model: 'Deck',
              key: 'id'
            },
            onDelete: 'CASCADE'
        },
        lastReviewedAt: {
                  type: Sequelize.DATE,
                  defaultValue: Sequelize.NOW
        },
        lastReviewedAt: {
                  type: Sequelize.DATE,
                  defaultValue: Sequelize.NOW
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
    await queryInterface.dropTable('RevisionSession');
  }
};
