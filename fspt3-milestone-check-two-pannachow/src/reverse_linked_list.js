/*------------------
Finish the "reverseList" method.
This method should reverse the linkedList
so that the head and tail switch, and all
pointers move into the opposite direction.

Hint: The code has already been started
for you. DRAW THIS OUT and look at the test for
the example. You don't need to use the insertAfter
method in your solution.

IMPORTANT: If you want to try this exercise without
the help of the pseudo code that's already written, 
remove all the comments from the reverseList() method and
start from scratch! If you do so, make sure to let
your teacher know.
------------------*/

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

  insertAfter(refNodeValue, val) {
    let currentNode = this.head;

    while (currentNode.value !== refNodeValue) {
      if (!currentNode.next) {
        return "No node found.";
      }
      currentNode = currentNode.next;
    }

    if (!currentNode.next) {
      this.tail.next = new Node(val);
      this.tail = this.tail.next;
    } else {
      const previousNext = currentNode.next;
      currentNode.next = new Node(val);
      currentNode.next.next = previousNext;
    }
  }

  reverseList() {
    // The idea is start with the head and go advancing in the list, changing the direction of pointers
    // So the current head will be pointing "the other way" (which means null), and therefore will become the new tail of the list
    // Then we will take the following node on the list, and reverse its pointer, so it points to what has previously the Head (but now is the tail)
    // And we will do this progressively with each node, till we reach the "current tail", that will become the new head
    // Your code starts here:

    // Create a variable 'node' to store the reference to this.head. This var will keep track of the "current" node as we advance on the list
    let node = this.head;
    // Create another var 'initialHead', to also point to this.head. We will need it at the end.
    const initialHead = this.head;
    // Create a variable to store the "previous" node. Since we start at the head, "previous" should be null when initialized (because there's nothing "before" the head)
    let previous = null;
    // while there is a node to visit (so, node exists)
    while (node !== null) {
      // create a var to save the location of the next node, or you will lose it!!!
      let nextNode = node.next;
      // reverse the current node's "next" pointer, it should now point to the "previous" node
      node.next = previous;
      // update previous node to be the current node
      previous = node;
      // update current node to the next node (you saved it) or null at end of list
      node = nextNode;
      // end of while
    }

    // make the head point to what was, until now, the tail
    this.head = this.tail;
    // make the tail point to what was initially the head
    this.tail = initialHead;
  }
}

module.exports = LinkedList;
