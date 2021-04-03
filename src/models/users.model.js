const mongoose = require('mongoose');
// eslint-disable-next-line import/no-unresolved
const { v4: uuidv4 } = require('uuid');

const { Schema } = mongoose;

const UserSchema = new Schema({
  _id: {
    type: String,
    default: uuidv4(),
  },
  name: String,
  dateOfBirth: Date,
  docType: String,
  docNumber: String,
  email: String,
  status: Number,
  password: String,
  address: {
    street: String,
    number: String,
    complement: String,
    country: String,
    state: String,
    city: String,
    zipcode: String,
  },
}, {
  timestamps: {},
});

// eslint-disable-next-line new-cap
module.exports = new mongoose.model('User', UserSchema);
