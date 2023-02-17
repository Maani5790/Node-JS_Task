const ps = require("prompt-sync");
const prompt = ps();

const checkNumber = () => {
  num = prompt("Enter your Number");

  if (num % 2 == 0) {
    console.log(num + " is an even number");
  } else {
    console.log(num + " is an odd number");
  }
};

checkNumber();

