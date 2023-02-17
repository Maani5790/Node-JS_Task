const ps = require("prompt-sync");
// const { question } = require("readline-sync");
const prompt = ps();
let num1 = parseInt(prompt("Enter First Number?"));
let num2 = parseInt(prompt("Enter Second Number?"));
let operation = prompt("select operator?");
let quest = prompt("Run Calculator?");

if(quest === 'yes'){

    switch (operation) {

        case "-":
          console.log(`the answer is ${num1 - num2}`);
      
        case "*":
          console.log(`the answer is ${num1 * num2}`);
      
        case "/":
          console.log(`the answer is ${num1 / num2}`);
      
        case "+" :
          console.log(`the answer is ${num1 + num2}`);
      
        default:
      }


} else{
    console.log("thank you");
}







// var question1 = prompt("further performed?");
// if (question1 === "yes") {
//   console.log("Run again");
// } else {
//   console.log("thank you");
// }
