const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const user = new Schema({
  name: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
});

const User = mongoose.model("user", user);

module.exports = User;
