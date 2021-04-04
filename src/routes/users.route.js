const userHandle = require('../handlers/users.handler');
const userSchema = require('../schemas/users.schema');

module.exports = [
  {
    method: 'POST',
    path: '/users',
    handler: userHandle.create,
    options: {
      validate: {
        payload: userSchema,
      },
    },
  },
];
