const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const Usuarios = sequelize.define('Usuarios', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nome: {
    type: DataTypes.STRING(100),
    allowNull: false,
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

module.exports = Usuarios;
