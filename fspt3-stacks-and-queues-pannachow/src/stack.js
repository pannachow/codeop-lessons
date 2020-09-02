/* ----------------------
Note: BEFORE tackling the class below,
CREATE tests for each related property and method.

DO NOT use the .length method on the Array
porototype for calculating the size of the queue.
---------------------- */

class Stack {
  constructor() {
    this.items = [];
    this.size = 0;
  }

  // adds an element to the top of the stack
  push(e) {
    this.items.push(e);
    this.size++;
  }

  // removes an element from the top of the stack
  // returns that element
  pop() {
    // this.size = Math.max(this.size - 1, 0);
    // return this.items.pop();
    if (this.size === 0) {
      return null;
    }
    this.size--;
    return this.items.pop();
  }

  // returns true if stack is empty
  isEmpty() {
    return this.size === 0;
  }

  // returns the size of the stack
  getSize() {
    return this.size;
  }
}

module.exports = Stack;
