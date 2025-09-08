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
    await queryInterface.createTable('Collection', {
      id: {
                  type: DataTypes.UUID,
                  defaultValue: DataTypes.UUIDV4,
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
              name: {
                  type: DataTypes.STRING(100),
                  allowNull: false
              },
              description: {
                  type: DataTypes.TEXT,
                  allowNull: true
              },
              visibility: {
                  type: DataTypes.ENUM('private', 'shared', 'public'),
                  defaultValue: 'private'
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
    await queryInterface.dropTable('Collection');
  }
};
