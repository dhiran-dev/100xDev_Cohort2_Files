/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  // Your code here
  let inp = str.toLowerCase();
  let count = 0;
  for (let i = 0; i < inp.length; i++) {
    // console.log(str[i], typeof str[i]);
    if (
      inp[i] === "a" ||
      inp[i] === "e" ||
      inp[i] === "i" ||
      inp[i] === "o" ||
      inp[i] === "u"
    ) {
      count += 1;
    }
  }

  return count;
}

module.exports = countVowels;

// console.log(countVowels("EaSiEr"));
