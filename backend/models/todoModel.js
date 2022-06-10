const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const note = new Schema({
  description: {
    type: String,
    required: true,
  },
});

const Todo = mongoose.model("todo", todo);

module.exports = Todo;
