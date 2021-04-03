/* eslint-disable no-console */
require('dotenv').config();
const server = require('./server');
const routes = require('./routes');

require('./services/mongo.services');

const init = async () => {
  server.route(routes);

  await server.start();
  console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {
  console.log(err);
  process.exit(1);
});

init();
