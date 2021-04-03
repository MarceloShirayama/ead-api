/* eslint-disable no-console */
require('dotenv').config();
const server = require('./server');
require('./services/mongo.services');

const init = async () => {
  server.route({
    method: 'GET',
    path: '/',
    handler: (request, h) => '<h1>Olá Pessoal!</h1>',
  });

  await server.start();
  console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {
  console.log(err);
  process.exit(1);
});

init();
