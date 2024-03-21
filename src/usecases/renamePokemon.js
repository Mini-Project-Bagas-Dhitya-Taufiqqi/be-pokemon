const Pokemon = require("../domain/pokemon");

let pokemonMap = new Map();

const renamePokemon = (name) => {
  let newName;
  if (!pokemonMap.has(name)) {
    pokemonMap.set(name, 0);
    newName = `${name}-0`;
  } else {
    let count = pokemonMap.get(name);
    count++;
    newName = `${name}-${count}`;
    pokemonMap.set(name, count);
  }
  return { newName };
};

module.exports = renamePokemon;
