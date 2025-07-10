//Higer Order Function - HOF
// A function which take a another function as input or argument, and retur a function, known as a higher order function.

// let see the syntax.
// function x() {
//   console.log(" Hello Ravi Singh.");
// }
// // taking function as a input here
// function y(x) {
//   // retunring a function
//   x();
// }
// y(x);

// function higherOrderFunction(callbackFunction) {
//   // Do something
//   callbackFunction(); // invoke the function passed as argument
// }

// function higherOrderFunction() {
//   return function innerFunction() {
//     // Do something
//   };
// }

// function multiplier(factor) {
//   return function (number) {
//     return number * factor;
//   };
// }

// const double = multiplier(2);
// console.log(double(5)); // Output: 10

// 🔤 Summary: Key Syntax Components
// ✅ Function passed as argument: function hof(cb) { cb(); }

// ✅ Function returned from another: function hof() { return function() {}; }

// ✅ Arrow function version:
// const hof = (cb) => () => {
//   cb();
// };

// HOF showing through using circle mathematical calculation.

// let find area, circumferece, and redius of the circle.
// area = 2PI(r*r), circumference = 2PI(r), redius= 2*r

const redius = [5, 2, 4, 6];

const area = function (redius) {
  return 2 * Math.PI * redius * redius;
};
const circumferece = function (redius) {
  return 2 * Math.PI * redius;
};
const calculation = function (arr, logic) {
  const output = [];
  for (let i = 0; i < arr.length; i++) {
    output.push(logic(arr[i]));
  }
  return output;
};

console.log(calculation(redius, area));
console.log(redius.map(area));
