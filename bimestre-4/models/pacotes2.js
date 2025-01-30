const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const pacotes2 = sequelize.define('User', {
  id: {
    type: DataTypes.INET,
    autoIncrement: true,
    primaryKey: true,
  },
  idvoo: {
    type: DataTypes.INET,
    allowNull: false,
    unique: false, // Atributo único
  },
  idhotel: {
    type: DataTypes.INET,
    allowNull: false,
    unique: false, // Atributo único
  },

  total_preco: {
    type: DataTypes.DECIMAL,
    allowNull: false,
    unique: false, // Atributo único
  },

  total_preco: {
    type: DataTypes.DECIMAL,
    allowNull: false,
    unique: false, // Atributo único
  },
});

module.exports = pacotes2;