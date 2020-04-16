const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/Chuck-Norris-API", {
  useNewUrlParser: true,
});

module.exports = mongoose;
