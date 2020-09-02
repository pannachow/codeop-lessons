/*------------------
1)
Solve factorial using recursion.
Try not to look at the slides.

Test case:
console.log(factorial(3)); // 6
console.log(factorial(7)); // 5040
------------------*/

function factorial(x) {
  // base case
  if (x === 0) {
    return 1;
  }
  // recursive case
  return x * factorial(x - 1);
}

console.log(factorial(3)); // 6
console.log(factorial(7)); // 5040
/*------------------
2)
Create a string of stars
using recursion. The length (l) of
the string should equal the number
passed into the createStars function.

Test case:
console.log(createStars(5)); // "*****"
console.log(createStars(0)); // ""
------------------*/

function createStars(l) {
  // base case
  if (l === 0) {
    return "";
  }
  // recursive case
  return "*" + createStars(l - 1);
}

console.log(createStars(5)); // "*****"
console.log(createStars(0)); // ""

/*------------------
3)
Create a recursive function called
addUpTo that adds all the numbers
up to a number (n). 

Test cases:
console.log(addUpTo(1)); // 1
console.log(addUpTo(2)); // 3 (1 + 2)
console.log(addUpTo(3)); // 6 (1 + 2 + 3)
console.log(addUpTo(100)); // 5050 (1 + 2 + ... + 99 + 100)
------------------*/
function addUpTo(n) {
  // base case
  if (n === 1) {
    return 1;
  }
  // recursive case
  return n + addUpTo(n - 1);
}

console.log(addUpTo(1)); // 1
console.log(addUpTo(2)); // 3 (1 + 2)
console.log(addUpTo(3)); // 6 (1 + 2 + 3)
console.log(addUpTo(100)); // 5050 (1 + 2 + ... + 99 + 100)
/*------------------
4)
Create a recursive function that
adds all the items in an array together.

Hint: use the .pop() method to remove
items from the array as you go.

Test case:
console.log(sum([1, 2, 3, 4, 5, 6])); // 21
------------------*/

function sum(arr) {
  // base case
  if (arr.length === 0) {
    return 0;
  }
  // recursive case
  return arr.pop() + sum(arr);
}

console.log(sum([1, 2, 3, 4, 5, 6])); // 21
/*------------------
5)
Solve Fibonnaci using recursion.

In Fibonnaci, the next number is a sum of the
two preceding ones. The first two numbers are 1,
then 2(1+1), then 3(1+2), 5(2+3) and so on:
1, 1, 2, 3, 5, 8, 13, 21....

Hint: you will call the fibonnaci equation
TWICE in the recursive case.

Test cases:
console.log(fib(0)); // 0
console.log(fib(1)); // 1
console.log(fib(2)); // 1
console.log(fib(3)); // 2
console.log(fib(7)); // 21
------------------*/
function fib(n) {
  // base case
  if (n <= 1) {
    return 1;
  }
  // recursive case
  return fib(n - 1) + fib(n - 2);
}

console.log(fib(0)); // 0
console.log(fib(1)); // 1
console.log(fib(2)); // 1
console.log(fib(3)); // 2
console.log(fib(7)); // 21
