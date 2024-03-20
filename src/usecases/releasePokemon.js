const isPrime = require("../utils/isPrime");

const releasePokemon = (number) => {
  const isPrimeNumber = isPrime(number);
  return { isPrimeNumber };
};

module.exports = releasePokemon;
