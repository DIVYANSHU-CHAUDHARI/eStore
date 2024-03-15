const Sequelize = require('sequelize');
const db = require('../config/database');

const Buyer = db.define('buyer', {
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
    addressId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: 'Address',
            key: 'id',
        },
        field: 'addressId'
    }
},{
    freezeTableName: true,
    tableName: 'buyer',
});

module.exports = Buyer;
