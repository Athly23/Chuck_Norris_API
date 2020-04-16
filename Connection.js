const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/Chuck-Norris-API", {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});

module.exports = mongoose;
