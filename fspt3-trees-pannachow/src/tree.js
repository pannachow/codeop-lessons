/* ----------------------
Note: BEFORE tackling the class below,
read the tests in the test file.

//Last three methods are optional. Complete them only if you could tackle all the rest.
---------------------- */

class Tree {
  constructor(value) {
    this.value = value;
    this.children = [];
  }

  // adds a child into the tree
  addChild(value) {
    this.children.push(new Tree(value));
  }

  // returns true/false if the value is in the tree
  contains(value) {
    // if the tree value matches the value passed in
    // return true
    if (this.value === value) {
      return true;
    }

    // loop through all the children
    // call the contains method located on each child (pass the value in)
    for (let child of this.children) {
      if (child.contains(value)) {
        return true;
      }
    }
    return false;
  }

  // applies the function to each child in the tree
  traverse(fn) {
    fn(this.value);
    this.children.forEach(e => e.traverse(fn));
  }

  // OPTIONAL
  //return the node with that value if found. Returns null otherwise
  find(value) {
    if (this.value === value) {
      return this;
    }
    for (let node of this.children) {
      const findNode = node.find(value);
      if (findNode) {
        return findNode;
      }
    }
    return null;
  }

  // OPTIONAL
  //adds a node with "value" as a child of the node with refValue
  //returns the new node added
  //or null if refValue was not found
  insertChildUnder(refValue, value) {}

  // OPTIONAL
  //adds a node with "value" between refValue and childValue (which has to be a child of refValu)
  //returns the new node added
  insertBetween(refValue, childValue, value) {}
}

module.exports = Tree;
