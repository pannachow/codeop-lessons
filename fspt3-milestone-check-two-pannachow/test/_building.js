const { expect } = require("chai");
const Building = require("../src/classes/building");
const { isClass } = require("./utilities");

let building = null;

describe("Building", () => {
  beforeEach(() => {
    building = new Building();
  });

  describe("Building", () => {
    it("should be a class", () => {
      expect(isClass(Building)).to.be.true;
    });
    it("should have properties named colour and height", () => {
      expect(building.hasOwnProperty("colour")).to.equal(true);
      expect(building.hasOwnProperty("height")).to.equal(true);
    });
  });

  describe("Change Colour method", () => {
    it("should change the colour from black to white", () => {
      expect(building.colour).to.equal("black");
      building.changeColour();
      expect(building.colour).to.equal("white");
    });
  });

  describe("Get Higher method", () => {
    it("should add one", () => {
      expect(building.height).to.equal(30);
      building.getHigher();
      expect(building.height).to.equal(31);
    });
  });
});
