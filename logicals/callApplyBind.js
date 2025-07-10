// Call, Apply, and Bind
/**
 *
 * why we are using these methods??
 * - these methods are use help that to control the 'this' context in fucntion.
 */

// let name = {
//   firstN: "Ravi",
//   lastN: "Ranjan",

//   // print output-
//   printFullName: function () {
//     console.log(this.firstN + " " + this.lastN);
//   },
// };
// name.printFullName();

// let name2 = {
//   firstN: "Rajesh",
//   lastN: "Singh",

//   // print output-
//   printFullName: function () {
//     console.log(this.firstN + " " + this.lastN);
//   },
// };
// name2.printFullName();

let odiCricket = {
  fName: "Mahendra Singh",
  lName: "Dhoni",
};
let testCricket = {
  fName: "Yuvraj",
  lName: "Singh",
};

// let create common method for initilize value to control this.
let output = function (state) {
  console.log(this.fName + " " + this.lName + " from " + state);
};

// call method, here 1st argument is refering to this key word, to print name, next argument it will take as a common seprated.
output.call(odiCricket, "Jharkhand");
output.call(testCricket, "Punjab");
// apply method have also 1st argument is reffering to this keyword, to print name, and next argument it will take common seprated withing array.
output.apply(odiCricket, ["Jharkhand"]);
output.apply(testCricket, ["Punjab"]);

// apply bind method, here it will return new function.
let bOutput = output.bind(testCricket, "Punjab");
console.log("bind action::", bOutput);
// need to invoke the fn()
bOutput();
