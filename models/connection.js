const {Sequelize} = require('sequelize')
const config = require('../config/database.config'); 
// import Sequelize from 'sequelize';
// import databaseConfig from '../config/database.config';

const sequelize = new Sequelize(config.database, config.username, config.password, {
    host: config.host,
    dialect: 'mysql',
    operatorsAliases: 'false',
    logging: false
});  

module.exports = sequelize