const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const pagamentos = sequelize.define('User', {
  id: {
    type: DataTypes.INET,
    autoIncrement: true,
    primaryKey: true,
  },
 forma_de_pagar: {
    type: DataTypes.ENUM,
    allowNull: false,
    unique: false, // Atributo único
  },
  numero_de_cartao: {
    type: DataTypes.INTEGER,
    allowNull: false,
    unique: false, // Atributo único
  },

  mes_de_validade_do_cartao: {
    type: DataTypes.INET,
    allowNull: false,
    unique: false, // Atributo único
  },
  ano_de_validade: {
    type: DataTypes.INTEGER,
    allowNull: false,
    unique: false, // Atributo único
  },
  cartao_cvv: {
    type: DataTypes.INTEGER,
    allowNull: false,
    unique: false, // Atributo único
  },
  chave_pix: {
    type: DataTypes.INTEGER,
    allowNull: false,
    unique: false, // Atributo único
  },
  numero_do_boleto: {
    type: DataTypes.INTEGER,
    allowNull: false,
    unique: false, // Atributo único
  },

  id_dos_dados_pessoais: {
    type: DataTypes.INET,
    allowNull: false,
    unique: false, // Atributo único
  },


 
});

module.exports = pagamentos;