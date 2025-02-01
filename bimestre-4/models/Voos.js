const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const Voos = sequelize.define('Voos', {
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
  preco: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
}, {
  freezeTableName: true,
  timestamps: true,
});

module.exports = Voos;
