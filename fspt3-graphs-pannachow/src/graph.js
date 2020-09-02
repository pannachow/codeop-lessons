/* ----------------------
Note: BEFORE tackling the class below,
read the tests in the test file.
---------------------- */
class Graph {
  constructor() {
    this.nodes = {};
  }

  // adds vertices to your graph
  addNode(value) {
    if (!this.nodes[value]) {
      this.nodes[value] = [];
    }
  }

  // creates edges between two given vertices in your graph
  addEdge(nodeA, nodeB) {
    this.addNode(nodeA);
    this.addNode(nodeB);
    this.nodes[nodeA].push(nodeB);
    this.nodes[nodeB].push(nodeA);
  }

  // removes edges between two given vertices in your graph
  removeEdge(nodeA, nodeB) {
    // 1
    // function removeItem(array, item) {
    //   // https://stackoverflow.com/a/3954451
    //   var index = array.indexOf(item);
    //   if (index !== -1) array.splice(index, 1);
    // }

    // removeItem(this.nodes[nodeA], nodeB);
    // removeItem(this.nodes[nodeB], nodeA);

    // 2
    // const a = this.nodes[nodeA];
    // for (let i = 0; i < a.length; i++) {
    //   if (a[i] === nodeB) {
    //     a.splice(i, 1);
    //   }
    // }
    // const b = this.nodes[nodeB];
    // for (let i = 0; i < b.length; i++) {
    //   if (b[i] === nodeA) {
    //     b.splice(i, 1);
    //   }
    // }

    // 3
    // remove nodeB from nodeA's array of adj nodes
    this.nodes[nodeA] = this.nodes[nodeA].filter(n => n !== nodeB);

    // remove nodeA from nodeB's array of adj nodes
    this.nodes[nodeB] = this.nodes[nodeB].filter(n => n !== nodeA);
  }

  // removes vertices from your graph (must remove related edges as well)
  removeNode(value) {
    const edges = this.nodes[value];
    while (edges.length > 0) {
      this.removeEdge(value, edges.pop());
    }
    delete this.nodes[value];
  }

  // calls fn on each node in depth first order (uses a stack)
  // keeps track of which nodes have been visited to avoid circular traversing
  traverseDepthFirst(startingNode, fn) {
    const visited = {};
    const stack = [startingNode];

    //while there's something on the stack
    while (stack.length > 0) {
      // get next node, check to see if visited
      const node = stack.pop();
      if (node in visited) {
        continue;
      }

      // do sth
      fn(node);
      visited[node] = true;

      // push all (unvisited) adj nodes on the stack
      for (let adjNode of this.nodes[node]) {
        if (!(adjNode in visited)) {
          stack.push(adjNode);
        }
      }
    }
  }

  // calls fn on each node in breadth first order (uses a queue)
  // keeps track of which nodes have been visited to avoid circular traversing
  traverseBreadthFirst(startingNode, fn) {
    const visited = {};
    const queue = [startingNode];

    // while there are nodes in the queue
    while (queue.length > 0) {
      // get the nest node in queue
      const node = queue.shift();
      if (node in visited) {
        continue;
      }
      fn(node);
      visited[node] = true;

      for (let adjNode of this.nodes[node]) {
        if (adjNode in visited !== true) {
          queue.push(adjNode);
        }
      }
    }
  }
}

module.exports = Graph;
