const { DataTypes } = require('sequelize');
const sequelize = require('../../db');

const voos = sequelize.define('User', {
  id: {
    type: DataTypes.INTEGER,
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

  data_partido: {
    type: DataTypes.DATE,
    allowNull: false,
    unique: false, // Atributo único
  },

  data_partida: {
    type: DataTypes.DATE,
    allowNull: false,
    unique: false, // Atributo único
  },
  
  
    horario: {
    type: DataTypes.DATE,
    allowNull: false,
    unique: false, // Atributo único
  },

  preco: {
    type: DataTypes.DECIMAL,
    allowNull: false,
    unique: false, // Atributo único
  }

});

module.exports = voos;