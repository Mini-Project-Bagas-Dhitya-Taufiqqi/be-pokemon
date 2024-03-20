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
    if (n <= 1) {
      return n;
    }
    return this.getFibonacci(n - 1) + this.getFibonacci(n - 2);
  }
}

module.exports = Pokemon;
