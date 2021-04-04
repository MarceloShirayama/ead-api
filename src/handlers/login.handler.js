const boom = require('@hapi/boom');
const {
  ERROR_USER_NOT_FOUND,
  ERROR_INVALID_PASSWORD,
  ERROR_INVALID_TOKEN,
} = require('../utils/errorTypes');
const authenticate = require('../auth/authenticate.auth');

const login = async (req, h) => {
  const { email, password } = req.payload;

  try {
    const token = await authenticate.login(email, password);
    return h.response({ token }).code(200);
  } catch (err) {
    switch (err.message) {
      case ERROR_USER_NOT_FOUND:
        throw boom.notFound('Usuário não encontrado!');
      case ERROR_INVALID_PASSWORD:
        throw boom.badData('E-mail ou senha inválido!');
      case ERROR_INVALID_TOKEN:
        throw boom.badImplementation('Erro ao gerar o token!');
      default:
        throw boom.badImplementation(err);
    }
  }
};

module.exports = {
  login,
};
