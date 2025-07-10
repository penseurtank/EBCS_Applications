//Higer Order Function - HOF
// A function which take a another function as input or argument, and retur a function, known as a higher order function.

// let see the syntax.
function x() {
  console.log(" Hello Ravi Singh.");
}
// taking function as a input here
function y(x) {
  // retunring a function
  x();
}
y(x);

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

const double = multiplier(2);
console.log(double(5)); // Output: 10

// 🔤 Summary: Key Syntax Components
// ✅ Function passed as argument: function hof(cb) { cb(); }

// ✅ Function returned from another: function hof() { return function() {}; }

// ✅ Arrow function version:
const hof = (cb) => () => {
  cb();
};
