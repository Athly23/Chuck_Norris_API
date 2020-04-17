const ChuckJokes = require("./models/Chuck.js");
const ChuckData = require("./db/ChuckRawData.json");

let newData = ChuckData.map((item, index) => {
  let newItem = {
    value: item.value,
    jokeID: index + 1,
  };
  return newItem;
});

ChuckJokes.deleteMany({}).then(() => {
  ChuckJokes.create(newData).then(res => {
    console.log(res);
    process.exit();
  });
});

//https://api.chucknorris.io/jokes/random
