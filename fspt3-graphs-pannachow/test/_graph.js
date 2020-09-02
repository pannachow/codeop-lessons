const { expect } = require("chai");
const Graph = require("../src/graph");

let graph = null;

/*---------------------
Primary test case used:

      [a] 
        \
   [c] - [b]
   / \   /
 [d]  [e]
----------------------*/

describe("Graph", () => {
  beforeEach(() => {
    graph = new Graph();
  });
  describe("The add node method", () => {
    it("should add vertices to the graph and an empty array to hold edges", () => {
      graph.addNode("a");
      expect(graph.nodes.hasOwnProperty("a")).to.equal(true);
      expect(graph.nodes["a"].length).to.equal(0);
    });
    it("should not overwrite vertices previously added", () => {
      graph.nodes["a"] = ["b"];
      graph.addNode("a");
      expect(graph.nodes["a"].length).to.equal(1);
    });
  });
  describe("The add edge method", () => {
    it("should add edges for a vertice", () => {
      graph.addNode("a");
      graph.addNode("b");
      graph.addEdge("a", "b");
      expect(graph.nodes["a"]).to.deep.equal(["b"]);
    });
    it("should add edges for both vertices", () => {
      graph.addNode("a");
      graph.addNode("b");
      graph.addEdge("a", "b");
      expect(graph.nodes["b"]).to.deep.equal(["a"]);
    });
    it("should create vertices if they do not exist", () => {
      graph.addEdge("a", "b");
      expect(graph.nodes["a"]).to.deep.equal(["b"]);
      expect(graph.nodes["b"]).to.deep.equal(["a"]);
    });
  });
  describe("The remove edge method", () => {
    it("should remove edges from both vertices", () => {
      graph.addNode("a");
      graph.addNode("b");
      graph.addEdge("a", "b");
      graph.addEdge("b", "c");
      graph.addEdge("b", "d");
      graph.removeEdge("b", "c");
      expect(graph.nodes["b"]).to.deep.equal(["a", "d"]);
      expect(graph.nodes["c"]).to.deep.equal([]);
    });
  });
  describe("The remove node method", () => {
    it("should remove vertice and related edges", () => {
      graph.addNode("a");
      graph.addNode("b");
      graph.addNode("c");
      graph.addNode("d");
      graph.addNode("e");
      graph.addEdge("a", "b");
      graph.addEdge("b", "c");
      graph.addEdge("b", "e");
      graph.addEdge("c", "e");
      graph.addEdge("c", "d");
      graph.removeNode("e");
      expect(graph.nodes.hasOwnProperty("e")).to.equal(false);
      expect(graph.nodes["b"]).to.deep.equal(["a", "c"]);
      expect(graph.nodes["c"]).to.deep.equal(["b", "d"]);
    });
  });
  describe("The traverse depth first method", () => {
    it("should visit every node in depth first order", () => {
      let test = [];
      graph.addNode("a");
      graph.addNode("b");
      graph.addNode("c");
      graph.addNode("d");
      graph.addNode("e");
      graph.addEdge("a", "b");
      graph.addEdge("b", "c");
      graph.addEdge("b", "e");
      graph.addEdge("c", "e");
      graph.addEdge("c", "d");
      graph.traverseDepthFirst("a", e => test.push(e));
      expect(test).to.deep.equal(["a", "b", "e", "c", "d"]);
    });
  });
  describe("The traverse breadth first method", () => {
    it("should visit every node in breadth first order", () => {
      let test = [];
      graph.addNode("a");
      graph.addNode("b");
      graph.addNode("c");
      graph.addNode("d");
      graph.addNode("e");
      graph.addEdge("a", "b");
      graph.addEdge("b", "c");
      graph.addEdge("b", "e");
      graph.addEdge("c", "e");
      graph.addEdge("c", "d");
      graph.traverseBreadthFirst("a", e => test.push(e));
      expect(test).to.deep.equal(["a", "b", "c", "e", "d"]);
    });
  });
});
