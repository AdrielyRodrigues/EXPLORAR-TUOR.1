const { DataTypes } = require('sequelize');
const sequelize = require('../../db');


const reservas = sequelize.define('User', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  usarios_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    unique: false, // Atributo único
  },
  destino_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    unique: false, // Atributo único
  },

  Hotel_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    unique: false, // Atributo único
  },

  Voo_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    unique: false, // Atributo único
  },

  data_reserva: {
    type: DataTypes.DECIMAL,
    allowNull: false,
    unique: false, // Atributo único
  },

  
});

module.exports = reservas;