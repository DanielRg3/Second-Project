const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Products extends Model {}

Products.init(
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
        Price: {
            type: DataTypes.DECIMAL,
            allowNull: true,
        },
        description: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        filename: {
            type: DataTypes.TEXT,
            allowNull: false,
          },
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'products',
    }
);

module.exports = Products;
