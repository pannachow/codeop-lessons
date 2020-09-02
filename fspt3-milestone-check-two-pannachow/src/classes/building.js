/*------------------
You will be equally evaluated on the
quality of tests you write for this!

1. Create a class named Building. (already done for you)
2. Add two properties (your choice) and test them.
3. Add two methods (your choice) and test them.
You should test that they exist and that they work correctly.
You can add as many tests as you see fit.
------------------*/

class Building {
  constructor(name) {
    this.colour = "black";
    this.height = 30;
  }

  changeColour() {
    this.colour = "white";
  }

  getHigher() {
    return (this.height += 1);
  }
}

module.exports = Building;
