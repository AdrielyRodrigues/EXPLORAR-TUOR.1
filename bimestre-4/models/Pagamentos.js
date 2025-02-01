const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const Pagamentos = sequelize.define('Pagamentos', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  payment_method: {
    type: DataTypes.ENUM('Cartão de Crédito', 'PIX', 'Boleto'),
    allowNull: false,
  },
  card_number: {
    type: DataTypes.STRING(200),
  },
  card_expiry_month: {
    type: DataTypes.INTEGER,
  },
  card_expiry_year: {
    type: DataTypes.INTEGER,
  },
  card_cvv: {
    type: DataTypes.STRING(4),
  },
  card_holder_name: {
    type: DataTypes.STRING(100),
  },
  pix_key: {
    type: DataTypes.STRING(100),
  },
  boleto_number: {
    type: DataTypes.STRING(50),
  },
  personal_data_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Dados_Pessoais',
      key: 'id',
    },
  },
}, {
  freezeTableName: true,
  timestamps: true,
});

module.exports = Pagamentos;
