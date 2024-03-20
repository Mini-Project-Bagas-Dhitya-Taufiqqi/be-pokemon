const catchPokemon = () => {
  const probability = Math.random() < 0.5 ? "Success" : "Failed";
  return { probability };
};

module.exports = catchPokemon;
