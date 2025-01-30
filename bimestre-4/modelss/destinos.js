const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const Destinos = sequelize.define('Destinos', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nome: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  descricao: {
    type: DataTypes.TEXT,
  },
});

module.exports = Destinos;
