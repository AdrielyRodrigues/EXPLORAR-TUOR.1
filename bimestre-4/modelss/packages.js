const { DataTypes } = require('sequelize');
const sequelize = require('../db');
const Flights = require('./flights');
const Hotels = require('./hotels');

const Packages = sequelize.define('Packages', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  total_price: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
});

Packages.belongsTo(Flights, { foreignKey: 'flight_id' });
Packages.belongsTo(Hotels, { foreignKey: 'hotel_id' });

module.exports = Packages;
