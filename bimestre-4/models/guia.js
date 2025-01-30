const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const Guia = sequelize.define('Guia', {
    cod: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    cadastro: {
      type: DataTypes.STRING(16),
      allowNull: false,
    },
    nome: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    telefone: {
      type: DataTypes.STRING(11),
    },
    email: {
      type: DataTypes.STRING(20),
    },
    enviarCurriculos: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
  });

  module.exports = Guia;
