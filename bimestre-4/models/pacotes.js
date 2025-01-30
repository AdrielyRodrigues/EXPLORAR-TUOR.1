const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const Pacotes = sequelize.define('User', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  destino: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: false, // Atributo único
  },
  localizacao: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: false, // Atributo único
  },

  data_inicio: {
    type: DataTypes.DATE,
    allowNull: false,
    unique: false, // Atributo único
  },

  data_final: {
    type: DataTypes.DATE,
    allowNull: false,
    unique: false, // Atributo único
  },

  preco: {
    type: DataTypes.DECIMAL,
    allowNull: false,
    unique: false, // Atributo único
  },

  imagen: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: false, // Atributo único
  },
  
});

module.exports = Pacotes;