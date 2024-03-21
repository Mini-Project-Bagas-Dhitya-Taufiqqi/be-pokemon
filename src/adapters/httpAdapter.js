const express = require("express");
const cors = require("cors");
const catchPokemon = require("../usecases/catchPokemon");
const releasePokemon = require("../usecases/releasePokemon");
const renamePokemon = require("../usecases/renamePokemon");

const app = express();
app.use(express.json());
app.use(cors());

app.get("/catch-pokemon", (req, res) => {
  const result = catchPokemon();
  res.json(result);
});

app.post("/release-pokemon", (req, res) => {
  const { number } = req.body;
  const result = releasePokemon(number);
  res.json(result);
});

app.put("/rename-pokemon", (req, res) => {
  const { name } = req.body;
  const result = renamePokemon(name);
  res.json(result);
});

module.exports = app;
