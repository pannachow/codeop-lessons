const { expect } = require("chai");
const Apartment = require("../src/classes/apartment");
const { isClass } = require("./utilities");

let apartment = null;

describe("Apartment", () => {
  beforeEach(() => {
    apartment = new Apartment();
  });
  describe("The Apartment class", () => {
    it("it should be a class", () => {
      expect(isClass(Apartment)).to.be.true;
    });
    it("should have properties named colour, height and size", () => {
      expect(apartment.hasOwnProperty("colour")).to.equal(true);
      expect(apartment.hasOwnProperty("height")).to.equal(true);
      expect(apartment.hasOwnProperty("size")).to.equal(true);
    });
  });
  describe("Change Colour method", () => {
    it("should change the colour from black to red", () => {
      expect(apartment.colour).to.equal("black");
      apartment.changeColour();
      expect(apartment.colour).to.equal("red");
    });
  });
});
