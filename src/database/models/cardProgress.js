const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
class CardProgress extends Model {
    static associate(models) {
        // Each progress record belongs to 1 user 
        CardProgress.belongsTo(models.User, { foreignKey: 'userId', as: 'user' });

        // Each progress record belongs to 1 card
        CardProgress.belongsTo(models.Card, { foreignKey: 'cardId', as: 'card' });
    }
}

CardProgress.init({
    id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true
        },
        status: {
            type: DataTypes.ENUM('confident', 'doubtful', 'read_again'),
            defaultValue: 'confident'
        },
        lastReviewedAt: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW
        },
        nextReviewAt: {
            type: DataTypes.DATE,
            allowNull: false
        },
        reviewCount: {
            type: DataTypes.INTEGER,
            defaultValue: 0
        },
        easeFactor: {
            type: DataTypes.FLOAT,
            defaultValue: 1.0
        }
},{
    sequelize,
    timestamps: true,
    underscored: true
});
return CardProgress;
}

// module.exports = CardProgress;