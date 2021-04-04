const boom = require('@hapi/boom');
const {
  ERROR_USER_NOT_FOUND,
  ERROR_INVALID_PASSWORD,
} = require('../utils/errorTypes');
const authenticate = require('../auth/authenticate.auth');

const login = async (req, h) => {
  const { email, password } = req.payload;

  try {
    const logged = await authenticate.login(email, password);
    return h.response(logged).code(200);
  } catch (err) {
    switch (err.message) {
      case ERROR_USER_NOT_FOUND:
        throw boom.notFound('Usuário não encontrado!');
      case ERROR_INVALID_PASSWORD:
        throw boom.badData('E-mail ou senha inválido!');
      default:
        throw boom.badImplementation(err);
    }
  }
};

module.exports = {
  login,
};
