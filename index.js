const app = require("express")();
const Chuck = require("./models/Chuck.js");

app.get("/", (req, res) => {
  Chuck.find({}).then(jokes => {
    res.json(jokes);
  });
});

app.listen(4000, () => {
  console.log("I'm on 4000");
});
