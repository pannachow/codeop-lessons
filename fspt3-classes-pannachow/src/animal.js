/* ----------------------

Note: BEFORE tackling each question below,
read the tests in the test file.

1. Add properties called "legs" and "sound".
2. Add a method called "getOlder" so that it increases
   the age by 1 whenever it is called and then 
   returns the new age.
3. Add a new method called speak that returns the
   sound property whenever it is called.

---------------------- */

class Animal {
  constructor(name) {
    this.name = name;
    this.age = 0;
    this.sound = "tweet";
    this.legs = 4;
  }

  speak() {
    return this.sound;
  }

  getOlder() {
    return (this.age += 1);
  }
}

module.exports = Animal;
