const { Sequelize } = require('sequelize');

const db = new Sequelize('ecommerce', 'postgres', 'sunmanneh', {
    host: 'localhost',
    quoteIdentifiers: false,
    dialect: 'postgres',
    port: 5432,
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
});

module.exports = db;
