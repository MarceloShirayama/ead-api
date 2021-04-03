const { ERR_DUPLICATE_EMAIL } = require('../utils/errorTypes');
const UserModel = require('../models/users.model');

const create = async (userData) => {
  const userExists = await UserModel.exists({ email: userData.email });

  if (userExists) {
    throw new Error(ERR_DUPLICATE_EMAIL);
  }

  const userModel = new UserModel(userData);
  return userModel.save();
};

const findByEmail = (email) => (
  UserModel.findOne({ email })
);

module.exports = {
  create,
  findByEmail,
};
