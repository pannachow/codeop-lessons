const { expect } = require("chai");
const Inhabitants = require("../src/hofs");

let inhabitants = null;

describe("Inhabitants", () => {
  beforeEach(() => {
    inhabitants = new Inhabitants([
      { firstName: "John", lastName: "Smith", age: 40 },
      { firstName: "Jane", lastName: "Doe", age: 68 },
      { firstName: "Grace", lastName: "Hopper", age: 85 },
      { firstName: "Bart", lastName: "Simpson", age: 10 }
    ]);
  });
  describe("The getPeopleOver method", () => {
    it("should return an array containing only full names of people older than a certain age", () => {
      let people = inhabitants.getPeopleOver(50);
      let expected = ["Jane Doe", "Grace Hopper"];

      expect(people).to.be.an("array");
      expect(people.length).to.equal(2);
      expect(people).to.deep.equal(expected);
    });
  });
});
