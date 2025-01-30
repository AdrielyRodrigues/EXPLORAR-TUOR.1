const { DataTypes } = require('sequelize');
const sequelize = require('../../db');

const usuarios2 = sequelize.define('User', {
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
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true, // Atributo único
  },

  senha: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: false, // Atributo único
  },

});

module.exports = usuarios2;