const { DataTypes } = require('sequelize');
const sequelize = require('../../db');

const hotel2 = sequelize.define('User', {
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
  localizacao: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: false, // Atributo único
  },

  preco_diaria: {
    type: DataTypes.DECIMAL,
    allowNull: false,
    unique: false, // Atributo único
  },

  estrelas: {
    type: DataTypes.INTEGER,
    allowNull: false,
    unique: false, // Atributo único
  },

  CafedaManhã: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: false, // Atributo único
  },
});

module.exports = hotel2;