const { Model, DataTypes } = require('sequelize');

class Deck extends Model {
  static associate(models) {
    // Each deck belongs to 1 user(owner)
    Deck.belongsTo(models.User, { foreignKey: 'userId', as: 'owner' });

    // Each deck can have multiple cards
    Deck.hasMany(models.Card, { foreignKey: 'deckId', as: 'cards', onDelete: 'CASCADE' });
  }
}

Deck.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    visibility: {
      type: DataTypes.ENUM('private', 'shared', 'public'),
      defaultValue: 'private'
    },
    tags: {
        type: DataTypes.ARRAY(DataTypes.STRING(50)),
        defaultValue: []
    }
  },{
    sequelize,
    timestamps: true,
    underscored: true
  }
);

module.exports = Deck;