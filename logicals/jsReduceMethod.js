// What is .reduce() in javascript?
/**
 * The .reduce() method is used to to reduce an array to single value
 * It can be a number, string, object, array, or anything -by itrating the array and accumulating results.
 *
 *
 * Syntax:- array.reduce((accumuleator, currentValue, index, array) =>{
 *  logic
 * }, initialValue)
 *
 * accumulator- holds the result of the previous iteration.
 * currentValue- current element in the iteration.
 * initialValue(optional)- starting value of the accumulator.
 */

// Reallif  secnario where  reduce() is UseFul.

// 1. Sum of number
const nums = [1, 2, 3, 4, 5];
const total = nums.reduce((acc, curr) => {
  return acc + curr;
}, 0);
console.log("total sum value is:", total); // 15

//2 find max and min
const arr = [18, 34, 12, 66, 5];
const max = arr.reduce((acc, curr) => {
  return acc > curr ? acc : curr;
});
const min = arr.reduce((acc, curr) => {
  return acc < curr ? acc : curr;
});
console.log("final result and max value:", max, "and min value:", min);

//3. Flatten an array of arrays
const nested = [
  [1, 2],
  [3, 4],
  [5, 6],
];
const flat = nested.reduce((acc, curr) => {
  return acc.concat(curr);
}, []);
console.log("final out of flatten value", flat);

// 4 Count frequency of elements
const fruits = ["apple", "orange", "apple", "apple", "orange", "banana"];
const frequency = fruits.reduce((acc, curr) => {
  acc[curr] = (acc[curr] || 0) + 1;
  return acc;
}, []);
console.log("final result for frequency count:", frequency);

// 5. Convert array to object
const users = [
  { id: 1, name: "ravi" },
  { id: 2, name: "sulekha" },
];
const userMap = users.reduce((acc, curr) => {
  acc[curr.id] = curr.name;
  return acc;
}, {});

console.log("final output for array conversion is:", userMap);

// 6. find the max value using lexicographical approach.
const str = ["ram", "shyam", "kishore", "punit", "bhagwat"];
const lexiMax = str.reduce((acc, curr) => {
  return acc > curr ? acc : curr;
});
const lexiMin = str.reduce((acc, curr) => {
  return acc < curr ? acc : curr;
});
console.log(
  "As per the lexicographical max value:",
  lexiMax,
  " and min value:",
  lexiMin
);

// 7. string max length value find from array
const maxByLength = str.reduce((acc, curr) => {
  return acc.length > curr.length ? acc : curr;
});
const minByLength = str.reduce((acc, curr) => {
  return acc.length < curr.length ? acc : curr;
});

console.log(
  "final output as per the string length, max-length :",
  maxByLength,
  "and min-length",
  minByLength
);
