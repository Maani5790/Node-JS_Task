                            //   descending order
const ps = require("prompt-sync");
const prompt = ps();
const input = prompt("Enter your Array:");
const arr = input.split(",").map(Number);
const arr1 = arr.sort();
// console.log(arr1);
console.log(arr.reverse());


// const descendingArr = arr.slice().sort((a, b) => b - a);
// console.log(`Descending order: ${descendingArr}`);
