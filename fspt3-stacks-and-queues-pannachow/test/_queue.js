const { expect } = require("chai");
const { isClass } = require("./utilities");
const Queue = require("../src/queue");

let queue = null;

describe("Queue", () => {
  beforeEach(() => {
    queue = new Queue();
  });

  describe("The Queue class", () => {
    it("should be a class", () => {
      expect(isClass(Queue)).to.be.true;
    });
  });

  describe("The enqueue method", () => {
    it("should add items to the BACK of the queue", () => {
      queue.enqueue(1);
      queue.enqueue(2);
      queue.enqueue(3);
      expect(queue.items.length).to.equal(3);
      expect(queue.items[0]).to.equal(1);
    });
  });

  describe("The dequeue method", () => {
    it("should remove items from the FRONT of the queue", () => {
      queue.enqueue(1);
      queue.enqueue(2);
      queue.enqueue(3);
      queue.enqueue(4);
      queue.dequeue();
      expect(queue.dequeue()).to.equal(2);
      expect(queue.items.length).to.equal(2);
      expect(queue.items[0]).to.equal(3);
    });
  });

  describe("The peek method", () => {
    it("should return the front element of the queue", () => {
      queue.enqueue(1);
      queue.enqueue(2);
      queue.enqueue(3);
      expect(queue.peek()).to.equal(1);
      expect(queue.items.length).to.equal(3);
    });
  });

  describe("The isEmpty method", () => {
    it("should return true if the queue is empty", () => {
      expect(queue.isEmpty()).to.equal(true);
    });
    it("should return false if the queue is not empty", () => {
      queue.enqueue(1);
      expect(queue.isEmpty()).to.equal(false);
    });
  });

  describe("The size property", () => {
    it("should increase when items are enqueued", () => {
      queue.enqueue(1);
      queue.enqueue(2);
      expect(queue.size).to.equal(2);
    });
    it("should decrease when items are dequeued", () => {
      queue.enqueue(1);
      queue.dequeue();
      expect(queue.size).to.equal(0);
    });
    it("should not go into the negative numbers", () => {
      queue.enqueue(1);
      queue.dequeue();
      queue.dequeue();
      expect(queue.size).to.equal(0);
    });
  });

  describe("The getSize method", () => {
    it("should return the size of the queue", () => {
      queue.enqueue(1);
      queue.enqueue(2);
      expect(queue.getSize()).to.equal(2);
    });
  });
});
