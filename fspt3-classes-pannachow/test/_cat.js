const { expect } = require("chai");
const { isClass } = require("./utilities");
const Cat = require("../src/cat");

let cat = null;

describe("Cat", () => {
  beforeEach(() => {
    cat = new Cat();
  });

  describe("The Cat class", () => {
    it("should be a class", () => {
      expect(isClass(Cat)).to.be.true;
    });

    it("should increase age in cat years ", () => {
      cat.getOlder();
      expect(cat.age).to.equal(15);
      cat.getOlder();
      expect(cat.age).to.equal(24);
      cat.getOlder();
      expect(cat.age).to.equal(28);
    });
  });
});
