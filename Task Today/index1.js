// const ps = require("prompt-sync");
// const prompt = ps();
// const numbers = prompt("Enter multiple number: ");
// const numsArr = numbers.split(",").map(Number);

// function addNum (){
//     return numbers
// }

// addNum();

const ps = require("prompt-sync");
const prompt = ps();
const getOperator = () => {
    operator = prompt("select operation? ");
    // const numbers = prompt("Enter multiple number: ");
// const numsArr = numbers.split(",").map(Number);

    if (operator === '+' || operator === '-' || operator === '*' || operator === '/') {
        
    } else {
        console.log("Enter valid operation.");
        getOperator();
    }
}

const getNum = (type) => {
    let someNum = prompt(`Please enter  ${type} number: `);
    if (!isNaN(someNum)) {
    
        return someNum;
    } else {
        console.log("enter a valid number.");
        return getNum(type);
    }
}

const calc = () => {
    if (operator === '+') {
        let add = num1 + num2;
        return add;
    } else if (operator === '-') {
        let substract = num1 - num2;
        return substract;
    } else if (operator === '*') {
        let multiply = num1 * num2;
        return multiply;
    } else if (operator = '/') {
        if (num2 === 0) {
            console.log("Cannot divide by zero.");
            getOperator();
        } else {
            let quotient = num1 / num2;
            return quotient
        }
    }
}
getOperator();
num1 = Number(getNum('first'));
num2 = Number(getNum('second'));
console.log(calc());



























// const sum = numsArr.reduce((a, b) => a + b);


// const substraction = numsArr.reduce((a, b) => a - b);

// const multiply = numsArr.reduce((a, b) => a * b);

// const division = numsArr.reduce((a, b) => a / b);


// const modulous = numsArr.reduce((a, b) => a % b);


// console.log(numsArr);
// console.log(sum);
// console.log(substraction);
// console.log(multiply);
// console.log(division);
// console.log(modulous);




// function addNum(){

// }



