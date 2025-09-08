import {Model, DataTypes} from 'sequelize';

class Collection extends Model {
    static associate(models) {
        // A collection can have multiple decks
        Collection.hasMany(models.Deck, { foreignKey: 'collectionId', as: 'decks', onDelete: 'CASCADE' });

        // Each collection belongs to 1 user(owner)
        Collection.belongsTo(models.User, { foreignKey: 'userId', as: 'owner' });
    }
}

Collection.init(
    {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true
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
        }
    },{
        sequelize,
        timestamps: true,
        underscored: true
    }
);

module.exports = Collection;