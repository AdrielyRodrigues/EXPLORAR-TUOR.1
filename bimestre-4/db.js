// const {Sequelize, TimeoutError} = require('sequelize');
const { Sequelize } = require('sequelize');
const sequelize = new Sequelize(
    'sequelize',
     'root',
     'iran',

    // 'aluno', // nome do usuario
    // 'aluno', // senha de acesso
    {
        host: '127.0.0.1',
        dialect: 'mysql'
    }
);
module.exports = sequelize;