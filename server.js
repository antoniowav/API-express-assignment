import express from "express";

import fetch from "node-fetch";

const app = express();
const port = 3000;
app.use(express.json());

app.listen(port, () => {
  console.log("App is running on port" + port);
});

app.use("/", express.static("client"));

app.get("/jokes", async (req, res) => {
  const response = await fetch(
    "https://v2.jokeapi.dev/joke/Programming,Miscellaneous,Spooky,Christmas?blacklistFlags=religious,political,explicit&type=twopart"
  );
  const data = await response.json();
  res.json(data);
});

let savedJokes = [];

app.get("/jokes/saved", (req, res) => {
  try {
    res.send(savedJokes);
  } catch (err) {
    res.status(500).json(err.message);
  }
});

app.post("/jokes/saved", (req, res) => {
  let newJoke = req.body;
  savedJokes.push(newJoke);
  res.send(savedJokes);
  console.log(savedJokes);
});
