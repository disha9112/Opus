const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const event = new Schema({
  email: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  start: {
    type: Date,
    required: true,
  },
  end: {
    type: Date,
    required: true,
  },
});

const Event = mongoose.model("event", event);

module.exports = Event;
