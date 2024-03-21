class Pokemon {
  constructor(name) {
    this.name = name;
    this.renameCount = 0;
  }

  rename() {
    let newName = this.name;
    let newCount = this.renameCount;
    if (newCount > 0) {
      const fibonacciNumber = this.getFibonacci(newCount - 1);
      newName += `-${fibonacciNumber}`;
    }
    newCount++;
    this.renameCount = newCount;
    return `${newName}-${newCount - 1}`;
  }

  getFibonacci(n) {
    let a = 0,
      b = 1;
    if (n === 0) return a;
    if (n === 1) return b;
    for (let i = 2; i <= n; i++) {
      const c = a + b;
      a = b;
      b = c;
    }
    return b;
  }
}

module.exports = Pokemon;
