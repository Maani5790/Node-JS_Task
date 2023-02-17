const ps = require("prompt-sync");
const prompt = ps();

let x = prompt("enter ur number");

var rem, temp = 0;

while(x>0){
    rem = x%10;
    temp = temp+(rem*rem*rem);
    x = parseInt(x/10);
};

console.log("your answer is " + temp);
