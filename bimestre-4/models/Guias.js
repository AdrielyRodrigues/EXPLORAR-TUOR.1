const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const Guias = sequelize.define('Guias', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nome: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  cpf: {
    type: DataTypes.STRING(14),
    unique: true,
    allowNull: false,
  },
  telefone: {
    type: DataTypes.STRING(15),
  },
  email: {
    type: DataTypes.STRING(100),
    unique: true,
    allowNull: false,
  },
  senha: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
}, {
  freezeTableName: true,
  timestamps: true,
});

module.exports = Guias;
