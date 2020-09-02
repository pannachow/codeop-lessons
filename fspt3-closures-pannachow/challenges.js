/*------------------
1)
Create a function named "counter". It does
not have any parameters.

Create a variable named y, and create a
closure that increases y by 1 before 
returning y.

Test cases:
const counterOne = counter();
const counterTwo = counter();
console.log(counterOne()); // 1
console.log(counterOne()); // 2
console.log(counterOne()); // 3
console.log(counterTwo()); // 1
console.log(counterTwo()); // 2
------------------*/

function counter() {
  let y = 1;

  function incrementCounter() {
    return y++;
  }

  return incrementCounter;
}


const counterOne = counter();
const counterTwo = counter();
console.log(counterOne()); // 1
console.log(counterOne()); // 2
console.log(counterOne()); // 3
console.log(counterTwo()); // 1
console.log(counterTwo()); // 2

/*------------------
2)
Create a function named "startingCounter".
It takes in one parameter, a number (x).

Store x in a variable named count, and return
a closure that increases count by 1 before
returning count.

Test cases:
const counterThree = startingCounter(10);
const counterFour = startingCounter(3);
console.log(counterThree()); // 11
console.log(counterThree()); // 12
console.log(counterThree()); // 13
console.log(counterFour()); // 4
console.log(counterFour()); // 5
------------------*/

function startingCounter(x) {
  let count = x + 1;

  function incrementCounter() {
    return count++;
  }

  return incrementCounter;
}

const counterThree = startingCounter(10);
const counterFour = startingCounter(3);
console.log(counterThree()); // 11
console.log(counterThree()); // 12
console.log(counterThree()); // 13
console.log(counterFour()); // 4
console.log(counterFour()); // 5
/*------------------
3)
Create a function named "countdown". It takes
in one parameter, a number (x). Store x
in a variable called count.

Return a closure that decreases count by 1,
and then returns either the count (if
the count is greater than or equal to one)
or "Time's Up!" (if the count is zero or less).

const counterFive = countdown(3);
console.log(counterFive()); // 2
console.log(counterFive()); // 1
console.log(counterFive()); // "Time's up!"
console.log(counterFive()); // "Time's up!"
------------------*/

function countdown(x) {
  let count = x - 1;

  function decrementCounter() {
    if (count < 1) {
      return "Time's Up!";
    }
    return count--;
  }

  return decrementCounter;
}

const counterFive = countdown(3);
console.log(counterFive()); // 2
console.log(counterFive()); // 1
console.log(counterFive()); // "Time's up!"
console.log(counterFive()); // "Time's up!"
/*------------------
4)
Create a function named "multiplier"
that takes in a number (x).

The multiplier function should return a
closure that takes another number (y) as a parameter.
That closure should return the result of x * y.

Test cases:
const multiplyByFive = multiplier(5);
const multiplyByFive = multiplier(10);
console.log(multiplyByFive(4)); // 20
console.log(multiplyByTen(4)); // 40
------------------*/

function multiplier(x) {
  function multiCounter(y) {
    return x * y;
  }

  return multiCounter;
}

const multiplyByFive = multiplier(5);
const multiplyByTen = multiplier(10);
console.log(multiplyByFive(4)); // 20
console.log(multiplyByTen(4)); // 40

/*------------------
5)
Create a function named "createPassword"
that takes in a string (x).

The createPassword function should return a
closure that takes another string (y) as a parameter.
If that x is equal to y, the closure should
return "Password correct". If not, the closure
should return "Password incorrect".

Test cases:
const password = createPassword("123pass!");
console.log(password("123pass!")); // Password correct.
console.log(password("123pass")); // Password incorrect.
------------------*/

function createPassword(x) {
  const password = x;

  function checkPassword(y) {
    if (y === password) {
      return "Password correct.";
    }
    return "Password incorrect.";
  }

  return checkPassword;
}

const password = createPassword("123pass!");
console.log(password("123pass!")); // Password correct.
console.log(password("123pass")); // Password incorrect.
/*------------------
6)
Create a function named "createBankAccount"
that takes in a number (x). That number x
should be stored in a variable called "balance".

The createBankAccount function should return a
closure with two parameters– a number (y) and 
a string (name it "action").

If the action is equal to "add", y should be added
to balance. If the action is equal to "subtract", y should
be subtracted from balance.

The closure should return balance. 

Test cases:
const marcoAccount = createBankAccount(100);
console.log(marcoAccount(50, "add")); // 150
console.log(marcoAccount(10, "add")); // 160
console.log(marcoAccount(70, "subtract")); // 90
------------------*/

function createBankAccount(balance) {
  function changeBalance(amount, action) {
    if (action === "add") {
      balance += amount;
    } else if (action === "subtract") {
      balance -= amount;
    }
    return balance;
  }

  return changeBalance;
}

const marcoAccount = createBankAccount(100);
console.log(marcoAccount(50, "add")); // 150
console.log(marcoAccount(10, "add")); // 160
console.log(marcoAccount(70, "subtract")); // 90

/*------------------
7)
The function below uses the other functions you
created to make a secure account. Modify the conditional
in the if statement so that it evaluates to true. Then, 
use the bank account function so that money is added
or subtracted from the account.

This closure should return the bank account balance.

Look back at the other functions you created to make sure
you understand how they work!
------------------*/


function createBank(password, startingBalance) {
  const checkPassword = createPassword(password);
  const changeBalance = createBankAccount(startingBalance);

  return function (password, amount, action) {
    const access = checkPassword(password);

    if (access === "Password correct.") {
      return changeBalance(amount, action);
    } else {
      return access;
    }
  }
}

const sofiaBank = createBank("Cod3ly!", 100);
console.log(sofiaBank("Cod3ly!", 150, "add")); // 250
console.log(sofiaBank("Codely123", 150, "add")); // Password incorrect
console.log(sofiaBank("Cod3ly!", 50, "subtract")); // 200
