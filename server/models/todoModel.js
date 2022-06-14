const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const todo = new Schema({
  email: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

const Todo = mongoose.model("todo", todo);

module.exports = Todo;
