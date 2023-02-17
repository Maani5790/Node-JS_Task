                    //  total array items
const ps = require("prompt-sync");
const prompt = ps();
// const numbers = prompt("Enter Array: ")
//   .split(",")
//   .map((number) => parseInt(number.trim()));

// let sum = 0;
// for (let i = 0; i < numbers.length; i++) {
//   sum += numbers[i];
//   console.log(i);
// }
// console.log(numbers);

// const addNum = () =>{
//     numbers.reduce();

// }

// addNum();
// let array = prompt("Enter array:").split(" ").map(Number);
// const input = prompt("Enter your Array:");
// const arr = input.split(",").map(Number);
// let newArray = arr.reduce(function(total, current) {
//   return total + current;
// });

// console.log("The sum of the array is: " + newArray);


const input = prompt("Enter your Array:");
let strArray = input.split(",");
let arr = [];
let i = 0;
while (i < strArray.length) {
  arr.push(Number(strArray[i]));
  i++;
}
let newArray = arr.reduce(function(total, current) {
  return total + current;
});

// function addTotal(a,b){
//   return a + b 
// }

// console.log(addTotal(arr));

console.log("The sum of the array is: " + newArray);







