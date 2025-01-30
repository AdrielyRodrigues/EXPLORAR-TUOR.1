const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const Flights = sequelize.define('Flights', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  origin: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  destination: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  departure_date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  departure_time: {
    type: DataTypes.TIME,
    allowNull: false,
  },
  arrival_time: {
    type: DataTypes.TIME,
    allowNull: false,
  },
  flight_duration: {
    type: DataTypes.STRING(10),
    allowNull: false,
  },
  class: {
    type: DataTypes.STRING(20),
    allowNull: false,
  },
});

module.exports = Flights;
