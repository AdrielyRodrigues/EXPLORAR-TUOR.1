const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const Excursao = sequelize.define('Excursao', {
    cod: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    dia: {
      type: DataTypes.DATE,
    },
    destino: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    roteiros: {
      type: DataTypes.STRING(100),
    },
    hora: {
      type: DataTypes.STRING(20),
    },
    valor: {
      type: DataTypes.INTEGER,
    },
    FK_guias_cod: {  
      type: DataTypes.INTEGER,
      references: {
        model: Guia, 
        key: 'cod',   
      },
      allowNull: true, 
    },
  });
  
  module.exports = Excursao;