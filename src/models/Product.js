const Sequelize = require('sequelize');
const db = require('../config/database');

const Product = db.define('product', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
        field: 'id'
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false,
        field: 'name'
    },
    inventory: {
        type: Sequelize.INTEGER,
        allowNull: false,
        field: 'inventory'
    },
    price: {
        type: Sequelize.FLOAT,
        allowNull: false,
        field: 'price'
    },
    pickupAddressId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: 'Address',
            key: 'id',
        },
        field: 'pickupAddressId'
    }
},{
    freezeTableName: true,
    tableName: 'product',
});

module.exports = Product;

