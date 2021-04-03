const boom = require('@hapi/boom');
const hash = require('../utils/hash');
const { ERR_DUPLICATE_EMAIL } = require('../utils/errorTypes');
const userRepository = require('../repositories/users.repository');

const create = async (req, h) => {
  try {
    const userData = req.payload;
    const passwordHash = await hash.make(userData.password);
    userData.password = passwordHash;
    const user = await userRepository.create(userData);
    return h.response(user).code(201);
  } catch (err) {
    switch (err.message) {
      case ERR_DUPLICATE_EMAIL:
        throw boom.badData('E-mail duplicado!');
      default:
        throw boom.badImplementation(err);
    }
  }
};

module.exports = {
  create,
};
