const {Model, DataTypes} = require('sequelize');

module.exports = (sequelize) => {
class Card extends Model {
  static associate(models) {
    // Each card belongs to 1 deck
    Card.belongsTo(models.Deck, {foreignKey: 'deckId', as: 'owner'});

    // Each card can have multiple progress records
    Card.hasMany(models.CardProgress, { foreignKey: 'cardId', as: 'progressRecords', onDelete: 'CASCADE' });
  }
}

Card.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    question: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    answer: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    isBidirectional: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    mediaUrls: {
      type: DataTypes.ARRAY(DataTypes.TEXT),
      defaultValue: []
    },
    hint: {
      type: DataTypes.TEXT,
      allowNull: false,
    }
  },{
    sequelize,
    timestamps: true,
    underscored: true
  }
);
  return Card;
}

// module.exports = Card;