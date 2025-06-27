// Learning curve with JS
const welcomeJS = () => {
  console.log("Welcome to javascript world!");
};
export default welcomeJS;
// Let start with once by one

// Hos javascript run through excution context.
// var n = 2;
// function square(num) {
//   var ans = num * num;
//   return ans;
// }
// var square2 = square(n);
// var square3 = square(4);

// console.log("square output fn 1", square2);
// console.log("square output fn 2", square3);

// Hosting

//How function and variables work in stack/-Memrory(global & local), Code
var x = 1;
a();
b();
console.log(x);

function a() {
  var x = 10;
  console.log(x);
}
function b() {
  var x = 100;
  console.log(x);
}
