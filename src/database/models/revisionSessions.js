const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    class RevisionSession extends Model {
        static associate(models) {
            // Each progress record belongs to 1 user 
        CardProgress.belongsTo(models.User, { foreignKey: 'userId', as: 'user' });

        // Each progress record belongs to 1 card
        CardProgress.belongsTo(models.Deck, { foreignKey: 'deckId', as: 'deck' });
        }
    }

    RevisionSession.init(
        {
            id: {
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4,
                primaryKey: true
            },
            startedAt: {
                type: DataTypes.DATE,
                allowNull: false
            },
            sendedAt: {
                type: DataTypes.DATE,
                allowNull: false
            }
        }, {
            sequelize,
            timestamps: true,
            underscored: true
        }
    );
    return RevisionSession;
}