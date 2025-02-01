const sequelize = require('./db');
const setupRelationships = require('./relationships');

(async () => {
  try {
    // Configurar relacionamentos
    setupRelationships();

    // Sincronizar o banco de dados
    await sequelize.sync({ force: true });
    console.log('Banco de dados sincronizado.');

  } catch (error) {
    console.error('Erro ao sincronizar o banco de dados:', error);
  }
})();