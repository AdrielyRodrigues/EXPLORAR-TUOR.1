const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const DestinosOferta = sequelize.define('Destinos_Oferta', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nome: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  pais: {
    type: DataTypes.STRING(50),
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

module.exports = DestinosOferta;
