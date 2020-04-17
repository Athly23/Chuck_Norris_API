const app = require("express")();
const Chuck = require("./models/Chuck.js");
const parser = require("body-parser");

app.use(parser.json());

//this route gets all the jokes
app.get("/jokes", (req, res) => {
  Chuck.find({}).then(jokes => {
    res.json(jokes);
  });
});

//this route creates a joke
app.post("/jokes", (req, res) => {
  console.log(req.body.value);
  Chuck.find({}).then(jokes => {
    let length = jokes.length;
    let jokeID = length + 1;
    Chuck.create({ value: req.body.value, jokeID: jokeID }).then(jokes => {
      res.json(jokes);
    });
  });
});

//this route update
app.put("/jokes/:id", (req, res) => {
  Chuck.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true }).then(
    jokes => {
      res.json(jokes);
    }
  );
});

//this route deletes
app.delete("/jokes/:id", (req, res) => {
  Word.findOneAndRemove({ _id: req.params.id }).then(jokes => {
    res.json(jokes);
  });
});

app.get("/jokes/:id", (req, res) => {
  Chuck.find({ jokeID: req.params.id }).then(jokes => {
    res.json(jokes);
  });
});

app.set("port", process.env.PORT || 4000);

app.listen(app.get("port"), () => {
  console.log(`✅ PORT: ${app.get("port")} 🌟`);
});

// app.listen(4000, () => {
//   console.log("I'm on 4000");
// });
