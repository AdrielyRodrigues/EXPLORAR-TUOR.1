const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const Passagem = sequelize.define('Passagem', {
    cod: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    numeroDeVoo: {
      type: DataTypes.STRING(14),
      allowNull: false,
    },
    desembarque: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    dia: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    hora: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
    nomeCompanhia: {
      type: DataTypes.STRING(10),
      allowNull: false,
    },
    embarque: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    FK_turistas_cpf: { 
      type: DataTypes.STRING(11),
      references: {
        model: Turista, 
        key: 'cpf',     
      },
      allowNull: true, 
    },
  });

  module.exports = Passagem;