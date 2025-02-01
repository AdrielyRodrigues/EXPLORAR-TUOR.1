const { DataTypes } = require('sequelize');
const sequelize = require('../../db');

const Turistas = sequelize.define('Turistas', {
    cpf: {
      type: DataTypes.STRING(11),
      primaryKey: true,
    },
    telefone: {
      type: DataTypes.STRING(11),
      allowNull: false,
    },
    usuario: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
  });

  module.exports = Turistas;