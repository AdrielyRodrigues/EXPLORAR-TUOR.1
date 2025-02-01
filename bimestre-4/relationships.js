const DestinosOferta = require('./models/DestinosOferta');
const Turistas = require('./models/Turistas');
const Guias = require('./models/Guias');
const Pacotes = require('./models/Pacotes');
const UsuariosPlataforma = require('./models/UsuariosPlataforma');
const Destinos = require('./models/Destinos');
const Hoteis = require('./models/Hoteis');
const Voos = require('./models/Voos');
const Reservas = require('./models/Reservas');
const Usuarios = require('./models/Usuarios');
const HoteisExtras = require('./models/HoteisExtras');
const VoosExtras = require('./models/VoosExtras');
const VoosFlights = require('./models/VoosFlights');
const HoteisDetalhes = require('./models/HoteisDetalhes');
const PacotesFlightHotel = require('./models/PacotesFlightHotel');
const DadosPessoais = require('./models/DadosPessoais');
const Pagamentos = require('./models/Pagamentos');

module.exports = () => {
  // 1:N "Destinos_Oferta pertence a Destinos"
  DestinosOferta.belongsTo(Destinos, {
    foreignKey: 'destino_id',
  });
  Destinos.hasMany(DestinosOferta, {
    foreignKey: 'destino_id',
  });

  // 1:N "Guias pertence a Destinos"
  Guias.belongsTo(Destinos, {
    foreignKey: 'destino_id',
  });
  Destinos.hasMany(Guias, {
    foreignKey: 'destino_id',
  });

  // 1:N "Pacotes pertence a Destinos"
  Pacotes.belongsTo(Destinos, {
    foreignKey: 'destino_id',
  });
  Destinos.hasMany(Pacotes, {
    foreignKey: 'destino_id',
  });

  // 1:N "Pacotes pertence a Hoteis"
  Pacotes.belongsTo(Hoteis, {
    foreignKey: 'hotel_id',
  });
  Hoteis.hasMany(Pacotes, {
    foreignKey: 'hotel_id',
  });

  // 1:N "Pacotes pertence a Voos"
  Pacotes.belongsTo(Voos, {
    foreignKey: 'voo_id',
  });
  Voos.hasMany(Pacotes, {
    foreignKey: 'voo_id',
  });

  // 1:N "Reservas pertence a Usuarios"
  Reservas.belongsTo(UsuariosPlataforma, {
    foreignKey: 'usuario_id',
  });
  UsuariosPlataforma.hasMany(Reservas, {
    foreignKey: 'usuario_id',
  });

  // 1:N "Reservas pertence a Destinos"
  Reservas.belongsTo(Destinos, {
    foreignKey: 'destino_id',
  });
  Destinos.hasMany(Reservas, {
    foreignKey: 'destino_id',
  });

  // 1:N "Reservas pertence a Hoteis"
  Reservas.belongsTo(Hoteis, {
    foreignKey: 'hotel_id',
  });
  Hoteis.hasMany(Reservas, {
    foreignKey: 'hotel_id',
  });

  // 1:N "Reservas pertence a Voos"
  Reservas.belongsTo(Voos, {
    foreignKey: 'voo_id',
  });
  Voos.hasMany(Reservas, {
    foreignKey: 'voo_id',
  });

  // N:M "Usuarios_Plataforma e Pacotes"
  UsuariosPlataforma.belongsToMany(Pacotes, {
    through: 'Usuarios_Pacotes',
    foreignKey: 'usuario_id',
  });
  Pacotes.belongsToMany(UsuariosPlataforma, {
    through: 'Usuarios_Pacotes',
    foreignKey: 'pacote_id',
  });

  // 1:N "Usuarios_Plataforma tem Dados_Pessoais"
  UsuariosPlataforma.belongsTo(DadosPessoais, {
    foreignKey: 'dados_pessoais_id',
  });
  DadosPessoais.hasMany(UsuariosPlataforma, {
    foreignKey: 'dados_pessoais_id',
  });

  // 1:N "Pagamentos pertence a Dados_Pessoais"
  Pagamentos.belongsTo(DadosPessoais, {
    foreignKey: 'personal_data_id',
  });
  DadosPessoais.hasMany(Pagamentos, {
    foreignKey: 'personal_data_id',
  });

  // 1:N "Hoteis_Extras pertence a Hoteis"
  HoteisExtras.belongsTo(Hoteis, {
    foreignKey: 'hotel_id',
  });
  Hoteis.hasMany(HoteisExtras, {
    foreignKey: 'hotel_id',
  });

  // 1:N "Voos_Extras pertence a Voos"
  VoosExtras.belongsTo(Voos, {
    foreignKey: 'voo_id',
  });
  Voos.hasMany(VoosExtras, {
    foreignKey: 'voo_id',
  });

  // 1:N "Voos_Flights pertence a Voos"
  VoosFlights.belongsTo(Voos, {
    foreignKey: 'voo_id',
  });
  Voos.hasMany(VoosFlights, {
    foreignKey: 'voo_id',
  });

  // 1:N "Hoteis_Detalhes pertence a Hoteis"
  HoteisDetalhes.belongsTo(Hoteis, {
    foreignKey: 'hotel_id',
  });
  Hoteis.hasMany(HoteisDetalhes, {
    foreignKey: 'hotel_id',
  });

  // 1:N "Pacotes_Flight_Hotel pertence a Voos"
  PacotesFlightHotel.belongsTo(VoosFlights, {
    foreignKey: 'voo_id',
  });
  VoosFlights.hasMany(PacotesFlightHotel, {
    foreignKey: 'voo_id',
  });

  // 1:N "Pacotes_Flight_Hotel pertence a Hoteis"
  PacotesFlightHotel.belongsTo(HoteisDetalhes, {
    foreignKey: 'hotel_id',
  });
  HoteisDetalhes.hasMany(PacotesFlightHotel, {
    foreignKey: 'hotel_id',
  });
};