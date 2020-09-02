const { expect } = require("chai");
const { isClass } = require("./utilities");
const Bird = require("../src/bird");

let bird = null;

describe("Birds", () => {
  beforeEach(() => {
    bird = new Bird();
  });

  describe("The Bird class", () => {
    it("should be a class", () => {
      expect(isClass(Bird)).to.be.true;
    });

    it("should not have negative feathers", () => {
      expect(bird.feathers).to.equal(20);
      bird.shake();
      expect(bird.feathers).to.equal(15);
      bird.shake();
      bird.shake();
      bird.shake();
      expect(bird.feathers).to.equal(0);
      bird.shake();
      expect(bird.feathers).to.equal(0);
    });
  });
});
