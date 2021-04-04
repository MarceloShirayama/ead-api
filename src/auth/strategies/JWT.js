const { ALGORITHM } = require('../confs');

const name = 'jwt';

const schema = 'jwt';

const options = {
  key: process.env.SECRET_KEY,
  validate: () => ({ isValid: true }),
  verifyOptions: {
    algorithms: [ALGORITHM],
  },
};

module.exports = {
  name,
  schema,
  options,
};
