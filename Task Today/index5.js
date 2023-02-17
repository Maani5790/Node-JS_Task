const ps = require("prompt-sync");
const prompt = ps();
// let array = prompt("Enter array , valid:")
//   .split(" ")
//   .map(Number);

// let zeroIndex = array.indexOf(0);

// if (zeroIndex === -1 || zeroIndex === array.length - 1) {
//   console.log("No rearrangement needed");
// } else {
//   let rearrangedArray = array
//     .slice(zeroIndex + 1)
//     .concat(array.slice(0, zeroIndex + 1));
//   console.log("Array after rearrangement: " + rearrangedArray);
// }
// let input = prompt("Enter the array:");

// let arr = input.split(',').map(Number);


// let beforeZero = [];
// let afterZero = [];


// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] === 0) {
//     afterZero.push(arr[i]);
//   } else if (afterZero.length === 0) {
//     beforeZero.push(arr[i]);
//   } else {
//     afterZero.push(arr[i]);
//   }
// }

// let result = beforeZero.concat(afterZero);
// console.log(result);



const input = prompt("Enter array:");


const inputArray = input.split(",");

const originalArray = inputArray.map((str) => parseInt(str));

const newArray = originalArray.map((element) => [element, 0])

console.log(newArray);















