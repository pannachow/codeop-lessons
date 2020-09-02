const { expect } = require("chai");
const { isClass } = require("./utilities");
const Poodle = require("../src/poodle");

let poodle = null;

describe("Poodles", () => {
  beforeEach(() => {
    poodle = new Poodle();
  });

  describe("The Poodle class", () => {
    it("should be a class", () => {
      expect(isClass(Poodle)).to.be.true;
    });

    it("should have haircuts", () => {
      poodle.age = 1;
      expect(poodle.lifetimeHaircuts()).to.equal(7);
    });
  });
});
