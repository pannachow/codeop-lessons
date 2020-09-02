/* ----------------------

Note: BEFORE tackling each question below,
write related tests in the test file.

1. Create a class called "Poodle" that extends
   the dog class.
2. Update the breed property to "poodle".
3. Create a new method called "lifetimeHaircuts" that
   returns the number of haircuts the poodle
   has received over its lifetime. To calculate this
   total, take the age and multiply by 7 (the average
   number of haircuts a poodle receives per year). 

---------------------- */

const Dog = require("./dog");

class Poodle extends Dog {
  constructor(name) {
    super(name);
    this.breed = "poodle";
  }

  lifetimeHaircuts() {
    return this.age * 7;
  }
}

module.exports = Poodle;
