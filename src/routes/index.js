const userRoutes = require('./users.route');
const authRotes = require('./auth.route');

module.exports = [
  ...userRoutes,
  ...authRotes,
];
