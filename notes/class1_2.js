// console.log("hello world");
// console.log(a);
// let a = 10;

// function greet(first, last) {
//   return "Hello " + first + " " + last;
// }

// console.log(greet("Harikirat", "singh"));

//==================================================

// function greet(first, last, gender) {
//   if (gender == "male") {
//     return "Hello Mr. " + first + " " + last;
//   }
//   if (gender == "Female") {
//     return "Hello Ms. " + first + " " + last;
//   }
// }

// console.log(greet("Harikirat", "singh", "male"));

//==================================================
// var ans = 1;
// for (let i = 0; i <= 1000; i++) {
//   ans = ans + i;
// }
// console.log(ans);

//==================================================
// let firstNme = "harikirat";
// let age = 18;
// let isMarried = 1;

// if (isMarried) {
//   console.log(firstNme + " is married");
// } else {
//   console.log(firstNme + " is not married");
// }
//==================================================

//print even numbers in an array
let a = [1, 2, 3, 4, 5, 6, 7, 8, 9];
function printeven(a) {
  for (let i = 0; i < a.length; i++) {
    if (a[i] % 2 == 0) {
      console.log(a[i]);
    }
  }
  return;
}

console.log(printeven(a));
//============================================

//print biggest numbers in an array
let b = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let max = 0;

for (let i = 0; i < b.length; i++) {
  if (b[i] > max) {
    max = b[i];
  }
}

console.log("max is ", max);

//============================================

const users = [
  {
    firstName: "harikirat",
    gender: "male",
  },
  {
    firstName: "raman",
    gender: "male",
  },
  {
    firstName: "priya",
    gender: "female",
  },
];

for (let i = 0; i < users.length; i++) {
  if (users[i].gender == "male") {
    console.log(users[i].firstName, "printing users");
  }
}

//============================================
function sum(num1, num2) {
  let result = num1 + num2;
  return result;
}

function displayResult(data) {
  console.log("Result of the sum is : " + data);
}

function displayResultPassive(data) {
  console.log("Sum's result is : " + data);
}

// You are only allowed to call one function after this
// How will you displayResult of a sum

function callback(a, b) {
  let func1 = sum(a, b);
  let func2 = displayResult(func1);
  return func2;
}
console.log(callback(1, 2));

//https://gist.github.com/hkirat/898ac1da32b6b347a8c0c3e73e1c0666
