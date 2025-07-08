// Write a code and take string value and try to reverse it.

/**
 * Here we can reverse the string using multiple approach
 * => By using predefine method i.e : .reverse() method.
 * => By using treditional or normap approach using for, while, do-while, forZEach, with  there comparision arr[i].
 * => By using recursion, we can reverse.
 */

//Approach 01:- Using predefine methods .reverse().

const str = "Ravi Ranjan Singh";

// step-01 split the string
const splitVal = str.split("");
console.log("splitted value of current string...", splitVal); // here we will get string in splitted in the form of array.
// step-02 reverse the array
const getReveseArr = splitVal.reverse();
console.log("splitted string array now reversed", getReveseArr);
// step-03 convert array into string.
const finalRevString = getReveseArr.join("");
console.log(" final result after reverse process completed:", finalRevString);

// you can write in single line also...
const reverseStrResult = str.split("").reverse().join("");
console.log("final output of string reverse: ", reverseStrResult);

//Approach 02:- By using normal/ traditional approach.
// using for loop...

let reverseRes = "";
for (let i = str.length - 1; i >= 0; i--) {
  reverseRes = reverseRes + str[i];
}
console.log(" loop reverse output for string::", reverseRes);

// 🔍 Why str.length - 1?
// If str = "Ravi", its length is 4, but valid indices are:

// Index  	Character
// 0      	R
// 1      	a
// 2      	v
// 3      	i

// So str[4] is undefined.
// So if you not keep str.length-1 then you get final out: udefinedhgniS najnaR ivaR

// Approch 03- By using recursion fn()

const reverseString = (str) => {
  if (str.length <= 1) {
    return str;
  }

  return reverseString(str.slice(2)) + str[0];
};
const result = reverseString("Tonay Stark");
console.log(" Reverse string using recurstion ----->", result);

// Approach 04:- Reverse each word.
// Recusive process to reverse each words
function reverseEachString(sentence) {
  // step1 split the sentence
  const newArr = sentence.split(" ");
  //   return newArr;
  // step2 new array should we revere each word here
  function helper(index) {
    if (index >= newArr.length) return [];
    const reverseWords = reverseString(newArr[index]);
    return [reverseWords, ...helper(index + 1)];
  }
  //   return helper(0);
  return helper(0).join(" ");
}
const input = "Tony Stark";
const results = reverseEachString(input);
console.log(" Reverse each word...", results);

// Approach 05:- using recurstion with map() method.
// Simpler version to reverse words, using map() method
const reverseWords = (sentence) => {
  //   const wordArr = sentence.split(" ");
  //   const newData = wordArr.map((item) => reverseString(item));
  //   return newData.join(" ");
  return sentence
    .split(" ")
    .map((item) => reverseString(item)) // using recursion.
    .join(" ");
};
const rwResult = reverseWords("Tom George");
console.log(" reverse words using map method:", rwResult);

// Approch06 - using normal approach
const reverseEachWords = (sentence) => {
  const wordsArr = sentence.split(" "); // split and between comma keep single space, to split by word not charecter.

  const reverseWrods = wordsArr.map((word) => {
    return word.split("").reverse().join("");
  });
  return reverseWrods.join(" "); // during join again you need to keep space, then you will get reverse each word.
};
const finalRes = reverseEachWords("Fullstack Developer");
console.log("Reversing each words using without recursion::", finalRes);
