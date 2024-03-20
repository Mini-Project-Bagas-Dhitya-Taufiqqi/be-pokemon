class Pokemon {
  constructor(name) {
    this.name = name;
    this.renameCount = 0;
  }

  rename() {
    let newName = this.name;
    if (this.renameCount > 0) {
      newName += `-${this.getFibonacci(this.renameCount)}`;
    }
    this.renameCount++;
    return newName;
  }

  getFibonacci(n) {
    let a = 0,
      b = 1,
      temp;
    if (n === 0) return a;
    for (let i = 2; i <= n; i++) {
      temp = a + b;
      a = b;
      b = temp;
    }
    return b;
  }
}

module.exports = Pokemon;
