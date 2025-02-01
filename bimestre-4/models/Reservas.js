const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const Reservas = sequelize.define('Reservas', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  data_reserva: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
}, {
  freezeTableName: true,
  timestamps: true,
});

module.exports = Reservas;
