const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const Hoteis = sequelize.define('Hoteis', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nome: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  localizacao: {
    type: DataTypes.STRING(100),
  },
  preco_diaria: {
    type: DataTypes.DECIMAL(10, 2),
  },
}, {
  freezeTableName: true,
  timestamps: true,
});

module.exports = Hoteis;
