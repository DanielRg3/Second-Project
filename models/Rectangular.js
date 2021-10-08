const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

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
            type: DataTypes.STRING,
            allowNull: false,
        },
        shape: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        chairs: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        dimensions: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        Price: {
            type: DataTypes.DECIMAL,
            allowNull: true,
        },
        description: {
            type: DataTypes.STRING,
            allowNull: true,
        },
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'rectangular',
    }
);

module.exports = Rectangular;