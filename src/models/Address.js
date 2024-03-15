const Sequelize = require('sequelize');
const db = require('../config/database');

const Address = db.define('address', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
        field: 'id'
    },
    street: {
        type: Sequelize.STRING,
        allowNull: false,
        field: 'street'
    },
    city: {
        type: Sequelize.STRING,
        allowNull: false,
        field: 'city'
    },
    state: {
        type: Sequelize.STRING,
        allowNull: false,
        field: 'state'
    },
    country: {
        type: Sequelize.STRING,
        allowNull: false,
        field: 'country'
    },
    pincode: {
        type: Sequelize.STRING,
        allowNull: false,
        field: 'pincode'
    }
},{
    freezeTableName: true,
    tableName: 'address',
});

module.exports = Address;