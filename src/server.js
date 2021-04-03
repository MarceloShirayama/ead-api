const Hapi = require('@hapi/hapi');

const port = process.env.PORT;
const host = process.env.HOST;

const server = Hapi.server({ port, host });

module.exports = server;
