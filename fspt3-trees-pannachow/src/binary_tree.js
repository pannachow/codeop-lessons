/* ----------------------
Note: BEFORE tackling the class below,
read the tests in the test file.
The last method lowestCommonAncestor is optional. Complete it only if you could tackle all the rest.
---------------------- */

class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  // adds node to left if value is less than or equal to this.value
  // adds node to right if value is greater than node
  add(value) {
    if (value <= this.value) {
      if (this.left) {
        this.left.add(value);
      } else {
        this.left = new BinaryTree(value);
      }
    } else {
      if (this.right) {
        this.right.add(value);
      } else {
        this.right = new BinaryTree(value);
      }
    }
  }

  // returns true or false if the value is in the tree
  contains(value) {
    if (this.value === value) {
      return true;
    }

    if (this.left && this.left.contains(value)) {
      return true;
    }
    if (this.right && this.right.contains(value)) {
      return true;
    }

    return false;
  }

  // apply callback in this order: left node, current node, right node
  traverseDepthFirstInOrder(fn) {
    //left
    if (this.left) {
      this.left.traverseDepthFirstInOrder(fn);
    }

    // root
    fn(this.value);

    // right
    if (this.right) {
      this.right.traverseDepthFirstInOrder(fn);
    }
  }

  // apply callback from left to right across each level
  // hint: use a queue for this!

  // https://stackoverflow.com/a/43723234

  // traverseBreadthFirst(fn) {
  //   let current = [this];
  //   while (current.length > 0) {
  //     let next = [];
  //     for (let node of current) {
  //       fn(node.value);
  //       if (node.left) next.push(node.left);
  //       if (node.right) next.push(node.right);
  //     }
  //     current = next;
  //   }
  // }

  traverseBreadthFirst(fn) {
    //Initialization
    const queue = [];
    queue.push(this);

    //while something in the queue...
    while (queue.length > 0) {
      // Get next node from queue
      let node = queue.shift();

      // Apply "fn" to node
      fn(node);

      // Add (possible) children to queue
      if (node.left) {
        queue.push(node.left);
      }

      if (node.right) {
        queue.push(node.right);
      }
    }
  }

  // OPTIONAL
  // Finds the lowest common ancestor given 2 node values
  // restrictions: val1 < val2
  // return the LCA (the node)
  // returns null if any of the values are not in the tree
  lowestCommonAncestor(val1, val2) {
    // if val1 & val2 are less than this.value, go left
    if (val1 < this.value && val2 < this.value) {
      if (this.left) {
        return this.left.lowestCommonAncestor(val1, val2);
      }
    }

    // if val1 & val2 are greater than this.value, go right
    if (val1 > this.value && val2 > this.value) {
      if (this.right) {
        return this.right.lowestCommonAncestor(val1, val2);
      }
    }
    // if it is a common ancester, we're it
    if (this.contains(val1) && this.contains(val2)) {
      return this;
    }
    return null;
  }
}

module.exports = BinaryTree;
