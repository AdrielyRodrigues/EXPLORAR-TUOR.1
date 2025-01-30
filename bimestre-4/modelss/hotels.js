const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const Hotels = sequelize.define('Hotels', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  address: {
    type: DataTypes.STRING(200),
    allowNull: false,
  },
  city: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  state: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  stars: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  room_type: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  checkin_date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  checkout_date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  non_refundable: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  transfer_included: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
});

module.exports = Hotels;
