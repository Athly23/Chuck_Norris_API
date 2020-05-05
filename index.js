const app = require("express")();
const Chuck = require("./models/Chuck.js");
const parser = require("body-parser");

app.use(parser.json());

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Credentials", "true");
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  res.header("Access-Control-Allow-Origin", "http://localhost:3000"); //change to url for deployed site
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

//this route gets all the jokes
app.get("/jokes", (req, res) => {
  Chuck.find({}).then(jokes => {
    res.json(jokes);
  });
});

//this route creates a joke
app.post("/jokes", (req, res) => {
  console.log(req);
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
  Chuck.findOneAndRemove({ jokeID: req.params.id }).then(jokes => {
    res.json(jokes);
  });
});

//this route get single joke by ID
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
