const { DataTypes } = require('sequelize');
const sequelize = require('../db');
const Usuarioss = require('./usuarioss');
const Destinos = require('./destinos');
const Hoteis = require('./hoteis');
const Voos = require('./voos');

const Reservas = sequelize.define('Reservas', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  data_reserva: {
    type: DataTypes.TIMESTAMP,
    defaultValue: DataTypes.NOW,
  },
});

Reservas.belongsTo(Usuarioss, { foreignKey: 'usuarioss_id' });
Reservas.belongsTo(Destinos, { foreignKey: 'destino_id' });
Reservas.belongsTo(Hoteis, { foreignKey: 'hotel_id' });
Reservas.belongsTo(Voos, { foreignKey: 'voo_id' });

module.exports = Reservas;
