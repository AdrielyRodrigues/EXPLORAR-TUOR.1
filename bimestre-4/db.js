const {Sequelize, TimeoutError} = require('sequelize');
const sequelize = new Sequelize(
    'Explorar Tuor',
    'root', // nome do usuario
    'aluno', // senha de acesso
    {
        host: '127.0.0.1:3',
        dialect: 'mysql'
    }
);
module.exports = sequelize;