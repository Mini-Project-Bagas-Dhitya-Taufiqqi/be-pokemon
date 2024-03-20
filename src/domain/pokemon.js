class Pokemon {
  constructor(name) {
    this.name = name;
    this.renameCount = 0;
  }

  rename() {
    this.renameCount++;
    return `${this.name}-${this.renameCount}`;
  }
}

module.exports = Pokemon;
