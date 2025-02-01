const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const HoteisExtras = sequelize.define('Hoteis_Extras', {
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
  estrelas: {
    type: DataTypes.INTEGER,
    validate: {
      min: 1,
      max: 5,
    },
  },
  cafe_da_manha: {
    type: DataTypes.BOOLEAN,
  },
}, {
  freezeTableName: true,
  timestamps: true,
});

module.exports = HoteisExtras;
