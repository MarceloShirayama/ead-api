/* eslint-disable no-console */
const Hapi = require('@hapi/hapi');

const port = 3000;
const host = 'localhost';

const init = async () => {
  const server = Hapi.server({ port, host });

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
