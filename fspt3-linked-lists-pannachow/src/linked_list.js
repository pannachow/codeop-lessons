/* ----------------------
Note: BEFORE tackling the LinkedList class
below, read the tests in the test file.
---------------------- */

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(headValue) {
    this.head = new Node(headValue);
    this.tail = this.head;
  }

  // adds a node to the tail of the list
  addToTail(val) {
    this.tail.next = new Node(val);
    this.tail = this.tail.next;
  }

  // returns the total number of nodes in the list
  getSize() {
    let currentNode = this.head;
    let size = 1;

    while (currentNode !== this.tail) {
      currentNode = currentNode.next;
      size++;
    }
    return size;
  }

  // removes the node assigned to the tail
  removeFromTail() {
    let node = this.head;
    let prevNode = null;

    while (node !== this.tail) {
      prevNode = node;
      node = node.next;
    }
    this.tail = prevNode;
    prevNode.next = null;
    return node;
  }

  // adds a node to the head of the list
  addToHead(val) {
    const node = new Node(val);
    node.next = this.head;
    this.head = node;
  }

  // removes the node assigned to the head
  removeFromHead() {
    const node = this.head;
    this.head = node.next;
    if (this.head === null) {
      this.tail = null;
    }
    return node;
  }

  // returns the node that contains the value
  findNode(refNodeValue) {
    let node = this.head;
    while (node !== null) {
      if (node.value === refNodeValue) {
        return node;
      }
      node = node.next;
    }
    return null;
  }

  // applies a callback to every node in the list
  forEach(fn) {
    let node = this.head;
    while (node !== null) {
      fn(node);
      node = node.next;
    }
  }

  // inserts a new node after the reference node
  insertAfter(refNodeValue, val) {
    const exNode = this.findNode(refNodeValue);
    if (exNode === null) {
      return null;
    }

    const newNode = new Node(val);
    newNode.next = exNode.next;
    exNode.next = newNode;
    if (newNode.next === null) {
      this.tail = newNode;
    }
  }

  // remove the node after the reference node
  removeAfter(refNodeValue) {
    const refNode = this.findNode(refNodeValue);
    if (refNode === null) {
      return null;
    }

    const remNode = refNode.next;
    refNode.next = remNode.next;

    if (refNode.next === null) {
      this.tail = refNode;
    }

    return remNode;
  }
}

module.exports = LinkedList;
