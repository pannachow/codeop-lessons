/*------------------
1)
Write a function that determines
if a number is a palindrome. A number is a
palindrome if it reads the same forwards and
backwards. 

Note:
- All negative numbers should return false.
- Single numbers should return true.

------------------*/

// function isPalindrome(num) {
//     if (num < 0) {
//         return false;
//     } else if (num < 10) {
//         return true;
//     } else {
//         const numStr = `${num}`;
//         for (let i = 0; i < numStr.length / 2; i++) {
//             if (numStr.charAt(i) != numStr.charAt(numStr.length - 1 - i)) {
//                 return false;
//             }
//         }
//         return true;
//     }

// }

function isPalindrome(num) {
    if (num < 0) {
        return false;
    } else if (num < 10) {
        return true;
    } else {
        let numstr = `${num}`;
        let revNumStr = numstr.split("").reverse().join("");
        return numstr === revNumStr;
    }
}

console.log(isPalindrome(12321)); // true
console.log(isPalindrome(-12321)); // false 
console.log(isPalindrome(1)); // true 
console.log(isPalindrome(84146)); // false
console.log(isPalindrome(12)); // false
/*------------------
2)
Create a function that takes a grid
as an argument and adds all the numbers
in that grid together.

------------------*/

function addGridItems(grid) {
    let sum = 0;
    for (let i = 0; i < grid.length; i++) {
        const a = grid[i];
        for (let j = 0; j < a.length; j++) {
            const b = a[j];
            for (let k = 0; k < b.length; k++) {
                const c = b[k];
                sum += c;
            }
        }
    }
    return sum;
}

const y = [[[1], [2]]];
console.log(addGridItems(y)); // 3

const x = [[[1, 0, -3], [2, 4], [3]], [[4, 4, 3], [5, -3, -1], [6, 10]], [[7, -5, -5], [8, 0], [9, 1]]];
console.log(addGridItems(x)); // 50
/*------------------
3)
Create a function that turns a string into a
file name: all letters are lowercase, spaces are
swapped for underscores, and it includes a
file extension. 

This function should take two parameters: the string, 
and the type of file it is (so you know what file
extension to add). You only need to cover
the extensions below:
- PDF: .pdf
- image: .png
- JSON: .json
*/

// function createFileName(str, tf) {
//     let result = "";
//     for (let i = 0; i < str.length; i++) {
//         let cha = str.charAt(i);
//         cha = cha.toLowerCase();
//         if (cha === " ") {
//             cha = "_";
//         }
//         result += cha;
//     }
//     return result + "." + tf.toLowerCase();
// }

function createFileName(str, type) {
    const strLower = str.toLowerCase();

    const chars = strLower.split("");
    for (let i = 0; i < chars.length; i++) {
        if (chars[i] === " ") {
            chars[i] = "_";
        }
    }
    const filename = chars.join("");

    const extensions = { PDF: "pdf", image: "png", JSON: "json" };
    filename += "." + extensions[type];

    return filename;
}

console.log(createFileName("Sofia Engineering Resume", "PDF")); // "sofia_engineering_resume.pdf"
console.log(createFileName("Sofia Profile Photo", "image")); // "sofia_profile_photo.png"
console.log(createFileName("Data from Pokemon API", "JSON")); // "data_from_pokemon_api.json"

/*------------------
4) Print the following pattern
99 96 93 90 88
99 96 93 90
99 96 93
99 96
99

Hints:
- Use a loop within a loop.
------------------*/

const nums = [99, 96, 93, 90, 88];

// for (let row = 0; row < nums.length; row++) {
//     let output = "";
//     for (let column = 0; column < nums.length - row; column++) {
//         output += nums[column] + " ";
//     }
//     console.log(output);
// }

while (nums.length > 0) {
    console.log(nums.join(" "));
    nums.pop();
}
