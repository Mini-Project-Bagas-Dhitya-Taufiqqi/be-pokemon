const Pokemon = require("../domain/pokemon");

const renamePokemon = (name) => {
  const pokemon = new Pokemon(name);
  const newName = pokemon.rename();
  return { newName };
};

module.exports = renamePokemon;
