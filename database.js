const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const apiSchema = new Schema({
  api: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("ApiModel", apiSchema);
