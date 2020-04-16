const app = require("express")();
const Chuck = require("./models/Chuck.js");
const parser = require("body-parser");

app.use(parser.json());

app.get("/", (req, res) => {
  Chuck.find({}).then(jokes => {
    res.json(jokes);
  });
});

app.post("/", (req, res) => {
  Chuck.create(req.body).then(jokes => {
    res.json(jokes);
  });
});

app.put("/list/:id", function (req, res) {
  Chuck.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true }).then(
    jokes => {
      res.json(jokes);
    }
  );
});

app.delete("/:id", function (req, res) {
  Word.findOneAndRemove({ _id: req.params.id }).then(jokes => {
    res.json(jokes);
  });
});

// app.get("/:id", (req, res) => {
//   Chuck.findById(req.params.id).then(jokes => {
//     res.json(jokes);
//   });
// });

app.listen(4000, () => {
  console.log("I'm on 4000");
});
