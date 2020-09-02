/*
1)
Create a function named
"triple" that takes one
parameter, x, and returns
the value of x multiplied
by three.
*/

function triple(x) {
  return x * 3;
}

console.log(triple(5));

/*
2)
Create a function named "subtract" that
takes two parameters and returns the result of
the second value subtracted from the first.
*/

function subtract(a, b) {
  return a - b;
}

console.log(subtract(5, 2)); // 3
console.log(subtract(1, 3)); // -2

/*
3)
Create a function named "createArray" that
takes three arguments and returns
those arguments in an array.
*/


function createArray(a, b, c) {
  return [a, b, c];
}

console.log(createArray(3, "a", true)); // [3, "a", true]

/*
4)
Create a function named "greetPerson". It should
accept a string as an argument and return that
string as part of a longer sentence that says hello.
If the function is called with an argument that is
not a string, it should return "Please provide a name."
*/

function greetPerson(name) {
  if (typeof name === "string") {
    return `Hello, ${name}.`;
  } else {
    return "Please provide a name.";
  }
}

console.log(greetPerson("Sofia")); // "Hello, Sofia!"
console.log(greetPerson(42)); // "Please provide a name."

/*
5)
Create a function named "addTogether"– it takes
in an array of numbers as an argument
and returns the sum of all those numbers
added together.
*/

function addTogether(numbers) {
  let sum = 0;
  for (let number of numbers) {
    sum += number;
  }
  return sum;
}

console.log(addTogether([1, 2, 3, 4, 5])); // 15

/*
6)
Create a function named "getIndex". It should
two take two arguments, an array and a value.
The function should return the index where
the value is found. If the value is not
found, it should return -1.

Do NOT use the array method indexOf
in your answer. Hint: Create a loop!

Test cases:
console.log(getIndex([1, 2, 3, 4, 5, 6], 4)); // 3
console.log(getIndex([1, 2, 3, 4, 5, 6], 7)); // -1
*/

function getIndex(array, value) {
  for (let i = 0; i < array.length; i++) {
    if (value === array[i]) {
      return i;
    }
  }
  return -1;
}

console.log(getIndex([1, 2, 3, 4, 5, 6], 4)); // 3
console.log(getIndex([1, 2, 3, 4, 5, 6], 7)); // -1
/*
7)
Create a function named "includesValue"– it should
return a boolean if x (a value) is found
in arr (an array).

To do this, use the "getIndex" function
you created in the last question. Call the
"getIndex" function within the body of your
"includesValue" function.

Test cases:
console.log(includesValue([1, 2, 3, 4, 5, 6], 4)); // true
console.log(includesValue([1, 2, 3, 4, 5, 6], 7)); // false
*/

function includesValue(array, value) {
  const index = getIndex(array, value);
  if (index >= 0) {
    return true;
  } else {
    return false;
  }
}

console.log(includesValue([1, 2, 3, 4, 5, 6], 4)); // true
console.log(includesValue([1, 2, 3, 4, 5, 6], 7)); // false

/*
8) Nested Objects
Create a function named "createObject" that
takes in an array as the argument. It should return
an object mapping the items in that array to their
data type. Use the "result" variable provided to help
you build your return value.
*/

function createObject(array) {
  const result = {
    numbers: [],
    booleans: [],
    strings: []
  }
  for (let i = 0; i < array.length; i++) {
    const v = array[i];
    if (typeof v === "number") {
      result.numbers.push(v);
    } else if (typeof v === "boolean") {
      result.booleans.push(v);
    } else if (typeof v === "string") {
      result.strings.push(v);
    }
  }
  return result;
}

console.log(createObject([3, "a", true, false, 2, true]));
// { numbers: [3, 2], booleans: [true, false, true], strings: ["a"] }

/*
9)
Create a function named "removeSpaces" that
removes all spaces from a string.
*/

//@1
// function removeSpaces(str) {
//   let result = "";
//   for (let i = 0; i < str.length; i++) {
//     const chr = str.charAt(i);
//     if (chr !== " ") {
//       result += chr;
//     }
//   }
//   return result;
// }

// @2
// function removeSpaces(str) {
//   return str.split(' ').join('');
// }

//@3
function removeSpaces(str) {
  return str.replace(/ /g, "");
}

console.log(removeSpaces("He went to the store.")); // "Hewenttothestore"

/*
10)
Create a function named "titleCase" that
takes a string as an argument. It should return
a string where the first letter of every word
is capitalized. Don't worry about the first word
in the sentence– assume that one is already capitalized.

Hint: the index of the letters that need to be
capitalized are 1 greater than the index of the
spaces in your string.

Test case:
console.log(titleCase("He went to the store.")); // "He Went To The Store"
*/

//@1
function titleCase(str) {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    const prechr = str.charAt(i - 1);
    let chr = str.charAt(i);
    if (prechr === " ") {
      chr = chr.toUpperCase();
    }
    result += chr;
  }
  return result;
}

console.log(titleCase("He went to the store.")); // "He Went To The Store"


//@2
function titleCase(str) {
  let letter = "";
  let sentenceStr = "";

  for (let i = 0; i < str.length; i++) {
    letter = str.charAt(i);
    if (letter === " ") {
      sentenceStr += ` ${str.charAt(i + 1).toUpperCase()}`
      i++;
    } else {
      sentenceStr += letter;
    }
  }
  return sentenceStr;
}

console.log(titleCase("He went to the store.")); // "He Went To The Store"
