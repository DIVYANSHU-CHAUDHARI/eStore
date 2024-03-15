const Sequelize = require('sequelize');
const db = require('../config/database');

const ServiceabilityMaster = db.define('serviceabilityMaster', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
        field: 'id'
    },
    sourcePincode: {
        type: Sequelize.STRING,
        allowNull: false,
        field: 'sourcePincode'
    },
    destinationPincode: {
        type: Sequelize.STRING,
        allowNull: false,
        field: 'destinationPincode'
    },
    paymentMode: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            isIn: [['COD', 'PP', 'BP']],
        },
        field: 'paymentMode'
    }
},{
    freezeTableName: true,
    tableName: 'serviceabilityMaster'
});

module.exports = ServiceabilityMaster;
