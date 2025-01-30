const { DataTypes } = require('sequelize');
const sequelize = require('../../db');

const personalizardatas = sequelize.define('User', {
  id: {
    type: DataTypes.INET,
    autoIncrement: true,
    primaryKey: true,
  },
  nome_completo: {
    type: DataTypes.INTEGER,
    allowNull: false,
    unique: false, // Atributo único
  },
  dataa_nas: {
    type: DataTypes.DATE,
    allowNull: false,
    unique: false, // Atributo único
  },

  genero: {
    type: DataTypes.INTEGER,
    allowNull: false,
    unique: false, // Atributo único
  },
  email: {
    type: DataTypes.INTEGER,
    allowNull: false,
    unique: false, // Atributo único
  },
  celular: {
    type: DataTypes.INTEGER,
    allowNull: false,
    unique: false, // Atributo único
  },
  cpf: {
    type: DataTypes.INTEGER,
    allowNull: false,
    unique: false, // Atributo único
  },

 
});

module.exports = personalizardatas;