const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const Pacotes = sequelize.define('Pacotes', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  destino: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  localizacao: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  data_inicio: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  data_fim: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  preco: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
  imagem: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
}, {
  freezeTableName: true,
  timestamps: true,
});

module.exports = Pacotes;
