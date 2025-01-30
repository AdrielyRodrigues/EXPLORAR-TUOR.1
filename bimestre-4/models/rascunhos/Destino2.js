const { DataTypes } = require('sequelize');
const sequelize = require('../../db');

const destino2 = sequelize.define('User', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: false, // Atributo único
  },
  descricao: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: false, // Atributo único
  },

});

module.exports = destino2;