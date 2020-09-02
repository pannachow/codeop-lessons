const { expect } = require("chai");
const Tree = require("../src/tree");

let tree = null;

describe("Tree", () => {
  beforeEach(() => {
    tree = new Tree(1);
  });
  describe("The add child method", () => {
    it("should add children to the tree", () => {
      tree.addChild(2);
      tree.addChild(3);
      tree.addChild(4);
      expect(tree.children.length).to.equal(3);
    });
  });
  describe("The contains method", () => {
    it("should return true if the value is in the children", () => {
      tree.addChild(2);
      expect(tree.contains(2)).to.equal(true);
    });
    it("should return false if the value is not in the children", () => {
      tree.addChild(2);
      expect(tree.contains(3)).to.equal(false);
    });
    it("should correctly detect nested grandchildren and great-grandchildren", () => {
      tree.addChild(2);
      tree.children[0].addChild(20);
      tree.children[0].children[0].addChild(200);
      expect(tree.contains(20)).to.equal(true);
      expect(tree.contains(30)).to.equal(false);
      expect(tree.contains(200)).to.equal(true);
      expect(tree.contains(300)).to.equal(false);
    });
  });
  describe("The traverse method", () => {
    it("should correctly apply the function to all children and nested children", () => {
      let test = [];
      tree.addChild(2);
      tree.children[0].addChild(20);
      tree.children[0].children[0].addChild(200);
      tree.traverse(e => test.push(e));
      expect(test).to.deep.equal([1, 2, 20, 200]);
    });
  });
  describe("The find method", () => {
    it("should return the node if the value is in the children", () => {
      tree.addChild(2);
      let found = tree.find(2);

      expect(found instanceof Tree).to.equal(true);
      expect(found.value).to.equal(2);
    });
    it("should return null if the value is not in the children", () => {
      tree.addChild(2);
      expect(tree.find(3)).to.equal(null);
    });
    it("should correctly detect nested grandchildren and great-grandchildren", () => {
      tree.addChild(2);
      tree.children[0].addChild(20);
      tree.children[0].children[0].addChild(200);

      expect(tree.find(20).value).to.equal(20);
      expect(tree.find(30)).to.equal(null);
      expect(tree.find(200).value).to.equal(200);
      expect(tree.find(300)).to.equal(null);
    });
  });

  describe("The insertChildUnder method", () => {
    it("should return the node if added", () => {
      tree.addChild(2);
      tree.addChild(3);
      tree.addChild(4);
      let found = tree.insertChildUnder(3, 5);
      expect(found instanceof Tree).to.equal(true);
      expect(found.value).to.equal(5);
    });
    it("should return null if the refValue is not found", () => {
      tree.addChild(2);
      expect(tree.insertChildUnder(3)).to.equal(null);
    });
    it("should add the node under the refValue node", () => {
      tree.addChild(2);
      tree.addChild(3);
      tree.addChild(4);
      tree.insertChildUnder(3, 5);
      expect(tree.children[1].children[0].value).to.equal(5);
    });
  });

  describe("The insertBetween method", () => {
    it("should return null if the refValue is not found", () => {
      tree.addChild(2);
      tree.children[0].addChild(20);
      expect(tree.insertBetween(3, 20, 200)).to.equal(null);
    });
    it("should return null if the childValue is not found", () => {
      tree.addChild(2);
      tree.children[0].addChild(20);
      expect(tree.insertBetween(2, 30, 200)).to.equal(null);
    });
    it("should return the newNode if added", () => {
      tree.addChild(2);
      tree.addChild(3);
      tree.children[0].addChild(20);

      let newNode = tree.insertBetween(2, 20, 200);

      expect(newNode instanceof Tree).to.equal(true);

      expect(newNode.value).to.equal(200);
    });
    it("should correctly insert the new node after the refValue node", () => {
      tree.addChild(2);
      tree.addChild(3);
      tree.children[0].addChild(20);

      let newNode = tree.insertBetween(2, 20, 200);

      expect(tree.children[0].value).to.equal(2);
      expect(tree.children[0].children[0].value).to.equal(200);
    });

    it("should correctly attach the branch under the new node", () => {
      tree.addChild(2);
      tree.addChild(3);
      tree.children[0].addChild(20);

      let newNode = tree.insertBetween(2, 20, 200);

      expect(tree.children[0].children[0].children[0].value).to.equal(20);
    });
  });
});
