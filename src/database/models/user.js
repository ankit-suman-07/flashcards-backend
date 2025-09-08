const { Model, DataTypes } = require('sequelize');

class User extends Model {
  static associate(models) {
    // A user can have multiple decks
    User.hasMany(models.Deck, { foreignKey: 'userId', as: 'decks', onDelete: 'CASCADE' });
    // A user can have multiple card progress records
    User.hasMany(models.CardProgress, { foreignKey: 'userId', as: 'cardProgressRecords', onDelete: 'CASCADE' });
    // A user can have multiple collections
    User.hasMany(models.Collection, { foreignKey: 'userId', as: 'collections', onDelete: 'CASCADE' });
  }
}

User.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    userName: {
      type: DataTypes.STRING(50),
      allowNull: false,
      unique: true
    },
    email: {
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true
      }
    },
    passwordHash: {
      type: DataTypes.STRING,
      allowNull: false
    },
    fullName: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    preferences: {
      type: DataTypes.JSONB,
      defaultValue: { darkMode: false, notifications: true }
    },
    streakCount: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    xpPoints: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    role: {
      type: DataTypes.ENUM('user', 'admin'),
      defaultValue: 'user'
    }
  },
  {
    sequelize, // Pass the sequelize instance from your setup
    timestamps: true,
    underscored: true
  }
);

module.exports = User;
