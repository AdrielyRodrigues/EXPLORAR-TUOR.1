const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const Vooss = sequelize.define('Vooss', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  origem: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  destino: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  data_partida: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  horario: {
    type: DataTypes.TIME,
    allowNull: false,
  },
  tempo_viagem: {
    type: DataTypes.STRING(20),
  },
  paradas: {
    type: DataTypes.INTEGER,
  },
  preco: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
  reembolsavel: {
    type: DataTypes.BOOLEAN,
  },
});

module.exports = Vooss;
