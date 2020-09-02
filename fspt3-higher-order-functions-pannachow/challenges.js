/*------------------
1)
Create a function named
"forEach" that takes in two
parameters– an array and a
callback function. 

The "forEach" function should
apply the function to every
element in the array.

Test cases:
forEach(["a", "b", "c"], e => {console.log(e)}); // a b c
------------------*/

function forEach(arr, cb) {
  for (let i = 0; i < arr.length; i++) {
    cb(arr[i]);
  }
}

forEach(["a", "b", "c"], e => { console.log(e) }); // a b c

/*------------------
2)
Create a function named
"map" that takes in two
parameters– an array and a
callback function. 

The "map" function should
return a new array. Each item
in the new array should be the
result of applying the callback
function to every element
of the array passed in as the parameter.

Test cases:
console.log(map([5, 6, 7], e => e * 2)); // [10, 12, 14]
------------------*/

function map(arr, cb) {
  const newArr = [];

  for (let i = 0; i < arr.length; i++) {
    const newNum = cb(arr[i]);
    newArr.push(newNum);
  }
  return newArr;
}

console.log(map([5, 6, 7], e => e * 2)); // [10, 12, 14]

/*------------------
3)
Create a function named
"filter" that takes in two
parameters– an array and a
callback function. 

The "filter" function should
return a new array that only includes
the items that have passed
the callback function (ie: the callback
will return true or false for each item).

Test cases:
console.log(filter([5, 6, 7, 8], e => e % 2 === 0 ? true : false)); // [6, 8]
------------------*/

function filter(arr, cb) {
  const newArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (cb(arr[i]) === true) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

console.log(filter([5, 6, 7, 8], e => e % 2 === 0 ? true : false)); // [6, 8]

/*------------------
4)
Create a function named
"every" that takes in two
parameters– an array and a
callback function. 

The "every" function is similar to
"filter" in that the callback function
is a test. However, the "every" function
returns true if EVERY element
in the passed in array passes that test. 
Otherwise, it returns false. Try writing it!

Test cases:
console.log(every([1, 3, 5], n => n < 6)); // true
console.log(every([2, 4, 6], n => n < 6)); // false
console.log(every([2, 4, 6, 2], n => n < 6)); // false
------------------*/

function every(array, cb) {
  for (let i = 0; i < array.length; i++) {
    if (cb(array[i]) === false) {
      return false;
    }
  }
  return true;
}

console.log(every([1, 3, 5], n => n < 6)); // true
console.log(every([2, 4, 6], n => n < 6)); // false
console.log(every([2, 4, 6, 2], n => n < 6)); // false

/*------------------
5)
You've written "forEach", "map", "filter"
and "every" from scratch. Each of 
these methods exist on the JavaScript Array
prototype already, however. 
 
For this question, use the native
forEach method to add all of the items
in the nums array. Use a fat arrow function.
The code has been started for you.
------------------*/

const nums = [1, 2, 3, 4, 5, 6, 7, 8];
let sum = 0;

nums.forEach(e => { sum += e });

console.log(sum);

/*------------------
6)
Use the native map method to transform
every item in the names array to a greeting.
 
Test case:
["Sofia", "Pedro", "Mia"] to ["Hello, Sofia!", "Hello, Pedro!", "Hello, Mia!"]
------------------*/

const names = ["Sofia", "Pedro", "Mia"];

const greetings = names.map(e => `Hello, ${e}!`);

console.log(greetings);


/*------------------
7)
Use the filter method to filter out any
number that is greater than 50.
 
Test case:
[1, 34, 83, 65, 3, 24, 98] to [1, 34, 3, 24]
------------------*/

const numsList = [1, 34, 83, 65, 3, 24, 98];

const smallNums = numsList.filter(e => e < 50);

console.log(smallNums);

/*------------------
8)
Use the every method to return true
if every word in the array below is a
palindrome (the same backwards as forwards).
 
Here's some code you can use to reverse
a string: 
 
.split('').reverse().join('')
 
Notice that the code that has been given
to you is wrapped in another function. This is to
make testing multiple cases easier. :)
 
Test case:
["deified", "civic", "radar", "level", "rotor"] is true
["kayak", "reviver", "racecar", "reader", "madam"] is false
------------------*/

const wordList1 = ["deified", "civic", "radar", "level", "rotor"];
const wordList2 = ["kayak", "reviver", "racecar", "reader", "madam"];

function isPalindrome(str) {
  const reStr = str.split("").reverse().join("");
  return str === reStr;
}

function checkPalindromes(list) {
  return list.every(isPalindrome);
}

console.log(checkPalindromes(wordList1));
console.log(checkPalindromes(wordList2));


/*------------------
9)
Look at the MDN docs and Eloquent JavaScript
to understand how "reduce" works. Then, 
use reduce to add all the items in the 
numsList (from the previous question) together.
------------------*/

const total = numsList.reduce(
  (sum, value) => sum + value,
  0,
);

console.log(total); // should equal 308
