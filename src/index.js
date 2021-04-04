/* eslint-disable no-console */
require('dotenv').config();
const hapiAuthJwt2 = require('hapi-auth-jwt2');
const server = require('./server');
const routes = require('./routes');

require('./services/mongo.services');

const jwtStrategies = require('./auth/strategies/JWT');

const init = async () => {
  server.route(routes);

  await server.register(hapiAuthJwt2);

  server.auth.strategy(
    jwtStrategies.name,
    jwtStrategies.schema,
    jwtStrategies.options,
  );

  server.auth.default(jwtStrategies.name);

  await server.start();
  console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {
  console.log(err);
  process.exit(1);
});

init();
