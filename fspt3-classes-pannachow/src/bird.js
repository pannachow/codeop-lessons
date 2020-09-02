const Animal = require("./animal");

class Bird extends Animal {
  constructor(name) {
    super(name);
    this.feathers = 20;
    this.breed = "";
  }

  grow() {
    this.feathers = this.feathers + 5;
  }

  shake() {
    this.feathers = Math.max(this.feathers - 5, 0);
  }
}

module.exports = Bird;
