const { Model, DataTypes } = require('sequilize');
const sequilize = require('../config/connection');

class Rectangular extends Model {}

Rectangular.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STREING,
            allowNull: false,
        },
        shape: {
            type: DataTypes.STREING,
            allowNull: false,
        },
        chairs: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        dimensions: {
            type: DataTypes.STREING,
            allowNull: false,
        },
        Price: {
            type: DataTypes.STREING,
            allowNull: false,
        },
        description: {
            type: DataTypes.STREING,
            allowNull: true,
        },
        gallery_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'gallery',
                key: 'id',
            },
        },
    },
    {
        sequilize,
        freezeTableName: true,
        underscored: true,
        modelName: 'rectangular',
    }
);