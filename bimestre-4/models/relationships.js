const usuarios = require('./usuarios');
const Excursões = require('./Excursões');
const Hotel = require('./hotel');
const Voo = require('./voo');
const Pacote = require('./pacote');
const Reserva = require('./reserva');
const guias = require('./guias');


// Relacionamento 1:N - Turista pode ter várias Passagens
Turista.hasMany(Passagem, { foreignKey: 'FK_turistas_cpf' });
Passagem.belongsTo(Turista, { foreignKey: 'FK_turistas_cpf' });

// Relacionamento 1:N - Passagem pode estar vinculada a uma Hospedagem
Passagem.hasOne(Hospedagem, { foreignKey: 'FK_passagens_cod' });
Hospedagem.belongsTo(Passagem, { foreignKey: 'FK_passagens_cod' });

// Relacionamento 1:N - Hospedagem pode ter vários Guias
Hospedagem.hasMany(Guia, { foreignKey: 'FK_hospedagem_cod' });
Guia.belongsTo(Hospedagem, { foreignKey: 'FK_hospedagem_cod' });

// Relacionamento 1:N - Guia pode estar associado a várias Excursões
Guia.hasMany(Excursao, { foreignKey: 'FK_guias_cod' });
Excursao.belongsTo(Guia, { foreignKey: 'FK_guias_cod' });

module.exports = () => {
  console.log('Relacionamentos configurados.');
};