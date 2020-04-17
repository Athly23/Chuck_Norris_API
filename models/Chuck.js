const mongoose = require("../Connection.js");
const Schema = mongoose.Schema;

const itemSchema = new Schema({
  value: String,
  jokeID: Number,
});

module.exports = mongoose.model("joke", itemSchema);
