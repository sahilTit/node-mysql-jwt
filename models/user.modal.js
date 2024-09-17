const { DataTypes } = require('sequelize');
const sequelize = require('./connection');

const Users_jwt = sequelize.define('users_jwt', {
    name: {
        type: DataTypes.STRING 
    },
    email: {
        type: DataTypes.STRING 
    },
    password: {
        type: DataTypes.STRING 
    }
}, {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
}); 
module.exports = Users_jwt;
