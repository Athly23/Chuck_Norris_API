const mongoose = require("../Connection.js");
const Schema = mongoose.Schema;

const itemSchema = new Schema({
  value: String,
});

module.exports = mongoose.model("joke", itemSchema);
