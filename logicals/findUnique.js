// removing duplicates with using pre-define method.
const arr = [1, 2, 3, 5, 6, 3, 5];
const uniqueArr = [];

for (let i = 0; i < arr.length; i++) {
  let isDuplicate = false;
  for (let j = 0; j < uniqueArr.length; j++) {
    if (arr[i] === uniqueArr[j]) {
      isDuplicate = true;
      break;
    }
  }

  // let push it...
  if (!isDuplicate) {
    uniqueArr[uniqueArr.length] = arr[i];
  }
}

console.log("output :", uniqueArr);

// Removing duplicate from string

let str = "javascript";
let uniqueStr = ""; // to build final result.
for (let i = 0; i < str.length; i++) {
  let isDuplicate = false;
  for (let j = 0; j < uniqueStr.length; j++) {
    if (str[i] === uniqueStr[j]) {
      isDuplicate = true;
      break;
    }
  }
  if (!isDuplicate) {
    uniqueStr = uniqueStr + str[i];
  }
}
console.log("output str:", uniqueStr);
