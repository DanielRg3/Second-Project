const { Model, DataTypes } = require('sequilize');
const sequilize = require('../config/connection');

class Gallery extends Model {}

Gallery.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        shape: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        sequilize,
        freezeTableName: true,
        underscored: true,
        modelName: 'gallery',
    }
);

module.exports = Gallery;