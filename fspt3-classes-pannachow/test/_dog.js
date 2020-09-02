const { expect } = require("chai");
const { isClass } = require("./utilities");
const Dog = require("../src/dog");

let dog = null;

describe("Dogs", () => {
  beforeEach(() => {
    dog = new Dog();
  });

  describe("The Dog class", () => {
    it("should be a class", () => {
      expect(isClass(Dog)).to.be.true;
    });

    it("should have properties for name, sticks, and breed", () => {
      expect(dog.hasOwnProperty("name")).to.equal(true);
      expect(dog.hasOwnProperty("sticks")).to.equal(true);
      expect(dog.hasOwnProperty("breed")).to.equal(true);
    });

    it("should have have preset properties for sound and legs", () => {
      expect(dog.sound).to.equal("tweet");
      expect(dog.legs).to.equal(4);
    });
  });

  describe("The getOlder method", () => {
    it("should exist on the Dog prototype", () => {
      expect(Dog.prototype.getOlder).to.exist;
    });

    it("should increase the age by 7 each time it is called", () => {
      dog.getOlder();
      dog.getOlder();
      expect(dog.age).to.equal(14);
    });
  });

  describe("The fetch method", () => {
    it("should exist on the Dog prototype", () => {
      expect(Dog.prototype.fetch).to.exist;
    });

    it("should increase the sticks count each time it is called", () => {
      dog.fetch();
      dog.fetch();
      expect(dog.sticks).to.equal(2);
    });
  });
});
