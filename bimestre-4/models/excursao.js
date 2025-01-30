const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const Excursao = sequelize.define('Excursao', {
    cod: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    dia: {
      type: DataTypes.DATE,
    },
    destino: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    roteiros: {
      type: DataTypes.STRING(100),
    },
    hora: {
      type: DataTypes.STRING(20),
    },
    valor: {
      type: DataTypes.INTEGER,
    },
  });
  
  module.exports = Excursao;