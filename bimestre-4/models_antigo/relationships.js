const guia = require('./guia');
const passagem = require('./passagem')
const turista = require('./Turistas')
const hospedagem = require('./hospedagem')
const Excursao = require('./excursao')

module.exports = () => {
  // 1:N - Turista pode ter várias Passagens
  turista.hasMany(passagem, {
    foreignKey: 'FK_turistas_cpf',
  });
  
  passagem.belongsTo(turista, {
    foreignKey: 'FK_turistas_cpf',
  });

  // 1:N - Passagem pode estar vinculada a uma Hospedagem
  passagem.hasOne(hospedagem, {
    foreignKey: 'FK_passagens_cod',
  });
  
  hospedagem.belongsTo(passagem, {
    foreignKey: 'FK_passagens_cod',
  });

  // 1:N - Hospedagem pode ter vários Guias
  hospedagem.hasMany(guia, {
    foreignKey: 'FK_hospedagem_cod',
  });
  
  guia.belongsTo(hospedagem, {
    foreignKey: 'FK_hospedagem_cod',
  });

  // 1:N - Guia pode estar associado a várias Excursões
  guia.hasMany(Excursao, {
    foreignKey: 'FK_guias_cod',
  });
  
  Excursao.belongsTo(guia, {
    foreignKey: 'FK_guias_cod',
  });
};
