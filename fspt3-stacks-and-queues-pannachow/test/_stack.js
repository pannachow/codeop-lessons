const { expect } = require("chai");
const { isClass } = require("./utilities");
const Stack = require("../src/stack");

let stack = null;

describe("Stack", () => {
  beforeEach(() => {
    stack = new Stack();
  });

  describe("The Stack class", () => {
    it("should be a class", () => {
      expect(isClass(Stack)).to.be.true;
    });
  });

  describe("The push method", () => {
    it("should add items to the BACK of the stack", () => {
      stack.push(1);
      stack.push(2);
      stack.push(3);
      expect(stack.items.length).to.equal(3);
      expect(stack.items[0]).to.equal(1);
    });
  });

  describe("The pop method", () => {
    it("should remove items from the BACK of the stack", () => {
      stack.push(1);
      stack.push(2);
      expect(stack.pop()).to.equal(2);
    });
  });

  describe("The isEmpty method", () => {
    it("should return true if the stack is empty", () => {
      expect(stack.isEmpty()).to.equal(true);
    });
    it("should return false if the stack is not empty", () => {
      stack.push(1);
      expect(stack.isEmpty()).to.equal(false);
    });
  });

  describe("The getSize method", () => {
    it("should increase when items are push.", () => {
      stack.push(1);
      stack.push(2);
      expect(stack.size).to.equal(2);
    });
    it("should decrease when items are pop.", () => {
      stack.push(1);
      stack.pop();
      expect(stack.size).to.equal(0);
    });
    it("should not go into the negative numbers", () => {
      stack.push(1);
      stack.pop();
      stack.pop();
      expect(stack.size).to.equal(0);
    });
  });

  describe("The size property", () => {
    it("should return the size of the stack", () => {
      stack.push(1);
      stack.push(2);
      expect(stack.getSize()).to.equal(2);
    });
  });
});
