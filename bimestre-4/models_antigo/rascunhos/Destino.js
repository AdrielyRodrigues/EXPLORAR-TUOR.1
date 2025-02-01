const { DataTypes } = require('sequelize');
const sequelize = require('../../db');

const Destinoss = sequelize.define('User', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true, // Atributo único
  },
  pais: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: false, // Atributo único
  },

  preco: {
    type: DataTypes.DECIMAL,
    allowNull: false,
    unique: false, // Atributo único
  }
});

module.exports = Destinoss;