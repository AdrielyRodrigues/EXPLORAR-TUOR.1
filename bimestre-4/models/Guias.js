const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const Guias = sequelize.define('User', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: false, // Atributo único
  },
  cpf: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true, // Atributo único
  },

  telefone: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: false, // Atributo único
  },

  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true, // Atributo único
  },

  senhas: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: false, // Atributo único
  },
});

module.exports = Guias;