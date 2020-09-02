const { expect } = require('chai');
const { isClass } = require('./utilities');
const Animal = require('../src/animal');

let animal = null;

describe('Animals', () => {
  beforeEach(() => {
    animal = new Animal();
  });

  describe('The Animal class', () => {
    it('should be a class', () => {
      expect(isClass(Animal)).to.be.true;
    });

    it('should have properties named name, sound, and legs', () => {
      expect(animal.hasOwnProperty('name')).to.equal(true);
      expect(animal.hasOwnProperty('sound')).to.equal(true);
      expect(animal.hasOwnProperty('legs')).to.equal(true);
    });
  });

  describe('The speak method', () => {
    it('should exist on the Animal prototype', () => {
      expect(Animal.prototype.speak).to.exist;
    });

    it('should return the sound when called', () => {
      const sampleSound = "tweet!";
      animal.sound = sampleSound;
      expect(animal.speak()).to.equal(sampleSound);
    });

  });
});
