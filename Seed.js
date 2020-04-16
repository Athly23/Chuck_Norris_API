const ChuckJokes = require("./models/Chuck.js");
const ChuckData = require("./db/ChuckRawData.json");

ChuckJokes.deleteMany({}).then(() => {
  ChuckJokes.create(ChuckData).then(res => {
    console.log(res);
    process.exit();
  });
});

//https://api.chucknorris.io/jokes/random
