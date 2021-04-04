const JWT = require('jsonwebtoken');
const { ERROR_INVALID_TOKEN } = require('../utils/errorTypes');
const { ALGORITHM } = require('./confs');

const generate = (payload) => (
  new Promise((resolve) => {
    JWT.sign(
      payload,
      process.env.SECRET_KEY,
      { algorithm: ALGORITHM },
      (err, token) => {
        if (err) {
          throw new Error(ERROR_INVALID_TOKEN);
        }
        // eslint-disable-next-line no-console
        resolve(token);
      },
    );
  })
);

module.exports = {
  generate,
};
