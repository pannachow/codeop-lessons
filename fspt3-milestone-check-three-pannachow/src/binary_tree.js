/* ----------------------
Note: BEFORE tackling the class below,
read the tests in the test file.
---------------------- */

class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  add(value) {
    if (value <= this.value) {
      !this.left ? (this.left = new BinaryTree(value)) : this.left.add(value);
    } else {
      !this.right
        ? (this.right = new BinaryTree(value))
        : this.right.add(value);
    }
  }

  // returns an array of all values in the tree in depth first preorder (current, left, right)
  getValues() {
    let result = [];

    function traverse(node) {
      
      // current
      result.push(node.value);

      //left
      if (node.left) {
        traverse(node.left);
      }

      // right
      if (node.right) {
        traverse(node.right);
      }
    }
    
    // call the function to start
    traverse(this);
    
    return result;
  }
}

module.exports = BinaryTree;
