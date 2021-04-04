const { findByEmail } = require('../repositories/users.repository');
const hash = require('../utils/hash');
const {
  ERROR_USER_NOT_FOUND,
  ERROR_INVALID_PASSWORD,
} = require('../utils/errorTypes');

const login = async (email, password) => {
  const user = await findByEmail(email);

  if (!user) {
    throw new Error(ERROR_USER_NOT_FOUND);
  }

  const passwordOk = await hash.compare(password, user.password);

  if (!passwordOk) {
    throw new Error(ERROR_INVALID_PASSWORD);
  }

  return 'Usuário logado!';
};

module.exports = {
  login,
};
