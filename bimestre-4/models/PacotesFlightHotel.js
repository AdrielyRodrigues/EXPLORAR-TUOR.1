const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const PacotesFlightHotel = sequelize.define('Pacotes_Flight_Hotel', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  total_price: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
}, {
  freezeTableName: true,
  timestamps: true,
});

module.exports = PacotesFlightHotel;
