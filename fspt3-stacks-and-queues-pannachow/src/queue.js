/* ----------------------
Note: BEFORE tackling the class below,
read the tests in the test file.

DO NOT use the .length method on the Array
porototype for calculating the size of the queue.
---------------------- */

class Queue {
  constructor() {
    this.items = [];
    this.size = 0;
  }

  // adds an element to the rear of the queue
  enqueue(e) {
    this.items.push(e);
    this.size++;
  }

  // removes an element from the front of the queue
  // returns that element
  dequeue() {
    // this.size = Math.max(this.size - 1, 0);
    // return (this.size >= 0) ? this.itmes.shift() : null;
    if (this.size > 0) {
      this.size--;
      return this.items.shift();
    }
    return null;
  }

  // returns the front element of the queue
  // important: does not dequeue it
  peek() {
    return this.items[0];
  }

  // returns true if queue is empty
  isEmpty() {
    return this.size === 0;
  }

  // returns the size of the queue
  getSize() {
    return this.size;
  }
}

module.exports = Queue;
