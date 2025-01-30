const Usuarios = require('./models/usuarios');
const Hoteiss = require('./models/hoteiss');
const Vooss = require('./models/vooss');
const Flights = require('./models/flights');
const Hotels = require('./models/hotels');
const Packages = require('./models/packages');
const PersonalData = require('./models/personal_data');
const Pagamentos = require('./models/pagamentos');
const Destinos = require('./models/destinos');
const Reservas = require('./models/reservas');

// Relacionamento 1:N "Usuários pode ter várias Reservas"
Usuarios.hasMany(Reservas, { foreignKey: 'usuarioss_id' });
Reservas.belongsTo(Usuarios, { foreignKey: 'usuarioss_id' });

// Relacionamento 1:N "Destinos pode ter várias Reservas"
Destinos.hasMany(Reservas, { foreignKey: 'destino_id' });
Reservas.belongsTo(Destinos, { foreignKey: 'destino_id' });

// Relacionamento 1:N "Hoteis pode ter várias Reservas"
Hoteiss.hasMany(Reservas, { foreignKey: 'hotel_id' });
Reservas.belongsTo(Hoteiss, { foreignKey: 'hotel_id' });

// Relacionamento 1:N "Voos pode ter várias Reservas"
Vooss.hasMany(Reservas, { foreignKey: 'voo_id' });
Reservas.belongsTo(Vooss, { foreignKey: 'voo_id' });

// Relacionamento 1:N "Voos pode estar associado a vários Pacotes"
Flights.hasMany(Packages, { foreignKey: 'flight_id' });
Packages.belongsTo(Flights, { foreignKey: 'flight_id' });

// Relacionamento 1:N "Hoteis pode estar associado a vários Pacotes"
Hotels.hasMany(Packages, { foreignKey: 'hotel_id' });
Packages.belongsTo(Hotels, { foreignKey: 'hotel_id' });

// Relacionamento 1:N "PersonalData pode ter vários Pagamentos"
PersonalData.hasMany(Pagamentos, { foreignKey: 'personal_data_id' });
Pagamentos.belongsTo(PersonalData, { foreignKey: 'personal_data_id' });
