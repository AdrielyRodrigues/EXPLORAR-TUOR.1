const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const Voos3 = sequelize.define('User', {
  id: {
    type: DataTypes.INET,
    autoIncrement: true,
    primaryKey: true,
  },
  origem: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: false, // Atributo único
  },
  destino: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: false, // Atributo único
  },

  Data_partida: {
    type: DataTypes.DATE,
    allowNull: false,
    unique: false, // Atributo único
  },

  horario_chegada: {
    type: DataTypes.TIME,
    allowNull: false,
    unique: false, // Atributo único
  },

  duracao_voo: {
    type: DataTypes.TIME,
    allowNull: false,
    unique: false, // Atributo único
  },

  class: {
    type: DataTypes.INTEGER,
    allowNull: false,
    unique: false, // Atributo único
  },


});

module.exports = Voos3;