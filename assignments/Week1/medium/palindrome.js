/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  // Clean and convert to lowercase
  let cleanedStr = str.replace(/[^a-zA-Z0-9]+/g, "").toLowerCase();

  // Declare two pointers
  // First pointer to the start of cleaned string
  // Second pointer to the end of cleaned string
  // Increment first pointer and decrement last if both are equal
  // Otherwise, return false
  let i = 0;
  let j = cleanedStr.length - 1;

  while (i <= j) {
    if (cleanedStr[i] == cleanedStr[j]) {
      i++;
      j--;
    } else {
      return false;
    }
  }

  return true;
}

module.exports = isPalindrome;
console.log(isPalindrome("hello"));
