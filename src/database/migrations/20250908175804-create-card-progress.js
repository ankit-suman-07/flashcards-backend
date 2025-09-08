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
    await queryInterface.createTable('CardProgress', {
      id: {
                  type: Sequelize.UUID,
                  defaultValue: Sequelize.UUIDV4,
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
          cardId: {
            type: Sequelize.UUID,
            allowNull: false,
            references: {
              model: 'Card',
              key: 'id'
            },
            onDelete: 'CASCADE'
          },
              status: {
                  type: Sequelize.ENUM('confident', 'doubtful', 'read_again'),
                  defaultValue: 'confident'
              },
              lastRevviewedAt: {
                  type: Sequelize.TIMESTAMP,
                  defaultValue: Sequelize.NOW
              },
              nextReviewAt: {
                  type: Sequelize.TIMESTAMP,
                  allowNull: false
              },
              reviewCount: {
                  type: Sequelize.INTEGER,
                  defaultValue: 0
              },
              easeFactor: {
                  type: Sequelize.FLOAT,
                  defaultValue: 1.0
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
    await queryInterface.dropTable('CardProgress');
  }
};
