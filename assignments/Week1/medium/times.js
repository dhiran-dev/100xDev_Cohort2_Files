/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
There is no automated test for this one, this is more for you to understand time goes up as computation goes up
*/

function calculateSum(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}

function measureTime(n) {
  // Record the start time
  const startTime = new Date().getTime();

  // Calculate the sum
  const result = calculateSum(n);

  // Record the end time
  const endTime = new Date().getTime();

  // Calculate the time taken in seconds
  const elapsedTimeInMilliseconds = (endTime - startTime) / 1000;

  console.log(`Sum from 1 to ${n} is: ${result}`);
  console.log(`Time taken: ${elapsedTimeInMilliseconds} seconds`);
}

// Test case
console.log(measureTime(1000000000));
