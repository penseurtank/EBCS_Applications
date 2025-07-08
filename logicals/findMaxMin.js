// write a program to find maximum and minimum number from arrays.

// Approach one
const numbers = [122, 34, 400, 778, 10, 876];
const max = Math.max(...numbers);
const min = Math.min(...numbers);

console.log("finding min and max using predefine array() method");
console.log("max val : ", max);
console.log("min val: ", min);

// Approach two
let maxn = numbers[0];
let minn = numbers[0];
for (let i = 1; i < numbers.length; i++) {
  if (numbers[i] > maxn) {
    maxn = numbers[i];
  }
  if (numbers[i] < minn) {
    minn = numbers[i];
  }
}
console.log("find a max and min through noramal appraoch using `for` method");
console.log("maximum number : ", maxn);
console.log("minimum number : ", minn);

// write a program to find maximum and minimum value from arrays, and array will keep value as string.
// as per lexicographical order
const fruits = ["apple", "banana", "muskmelon", "chiku", "nuts"];

const maxLexi = fruits.reduce((a, b) => (a > b ? a : b));
const minWLexi = fruits.reduce((a, b) => (a < b ? a : b));

console.log("String-based max and min value calculation:");
console.log("Max value as per lexicographical order:", maxLexi); // nuts , as per lexicographical order — 'n' > 'm' > 'c' > 'b' > 'a'.
console.log("Min value as per lexicographical order:", minWLexi); // apple

// max/min based on string length
const maxByLength = fruits.reduce((a, b) => (a.length > b.length ? a : b));
const minByLength = fruits.reduce((a, b) => (a.length < b.length ? a : b));
console.log("Longest fruit name:", maxByLength);
console.log("Shortest fruit name:", minByLength);

/**
 * 
 * a > b → compares strings alphabetically by character Unicode value (not by length).

"nuts" > "muskmelon" because 'n' (110) > 'm' (109).

If you want to compare by length, use .length.
 */
