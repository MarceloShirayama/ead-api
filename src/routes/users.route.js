const userHandle = require('../handlers/users.handler');

module.exports = [
  {
    method: 'POST',
    path: '/users',
    handler: userHandle.create,
  },
];
