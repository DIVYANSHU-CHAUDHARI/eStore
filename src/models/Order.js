const Sequelize = require('sequelize');
const db = require('../config/database');

const Order = db.define('order', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
        field: 'id'
    },
    buyerId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: 'Buyer',
            key: 'id',
        },
        field: 'buyerId'
    },
    productId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: 'Product',
            key: 'id',
        },
        field: 'productId'
    },
    quantity: {
        type: Sequelize.INTEGER,
        allowNull: false,
        field: 'quantity'
    },
    paymentMode: {
        type: Sequelize.STRING,
        allowNull: false,
        field: 'paymentMode'
    }
},{
    freezeTableName: true,
    tableName: 'order',
});

module.exports = Order;
