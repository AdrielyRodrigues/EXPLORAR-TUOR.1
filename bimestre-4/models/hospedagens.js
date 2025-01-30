const { DataTypes } = require('sequelize');
const sequelize = require('../db');



const Hospedagem = sequelize.define('Hospedagem', {
    cod: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    checkin: {
      type: DataTypes.DATE,
    },
    checkout: {
      type: DataTypes.DATE,
    },
    hotel: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
  });

  module.exports = Hospedagem;