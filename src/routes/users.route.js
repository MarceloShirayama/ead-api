const userHandle = require('../handlers/users.handler');
const UserSchema = require('../schemas/users.schema');

module.exports = [
  {
    method: 'POST',
    path: '/users',
    handler: userHandle.create,
    options: {
      validate: {
        payload: UserSchema,
      },
    },
  },
];
