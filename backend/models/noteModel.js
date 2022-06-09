const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const note = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: new Date(),
  },
});

const Note = mongoose.model("note", note);

module.exports = Note;
