/*------------------
NOTE: Do not work on this class until
after you have completed the Building class!

You will be equally evaluated on the
quality of tests you write for this!

1. A class named Apartment has been created, exported, and imported into the test file. 
2. Add the proper code so that this class
extends the Building class. Test it!
3. Add one additional property (your choice) to Apartment and test it.
4. Add one additional method (your choice) to Apartment and test it.
------------------*/

const Building = require("./building");

class Apartment extends Building {
  constructor() {
    super();
    this.size = 50;
  }

  changeColour() {
    this.colour = "red";
  }
}

module.exports = Apartment;
