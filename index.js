function add(num1, num2) {

}

function subtract(num1, num2) {

}

function multiply(num1, num2) {

}

function divide(num1, num2) {

}

function operate(num1, num2, operator) {

}

function getFirstNum(e) {
  firstNumArray.push(e.target.value);
  const finalNum = parseInt(firstNumArray.join(""));
  console.log(finalNum);
  console.log(isClicked);
}

function getSecondNum(e) {
  secondNumArray.push(e.target.value);
  const finalNum = parseInt(secondNumArray.join(""));
  console.log(finalNum);
  console.log(isClicked);
}

function getOperator(e) {
  console.log(e.target.value);
  isClicked = true;
  if (isClicked === true) {
    firstNum.forEach(num => num.removeEventListener("click", getFirstNum));
    console.log("Stopped");
    operators.forEach(operator => operator.removeEventListener("click", getOperator));
    isClicked = false;
    // EventListener for second number
    secondNum.forEach(num => num.addEventListener("click", getSecondNum));
  }
}

const firstNum = document.querySelectorAll(".num");
const operators = document.querySelectorAll(".operator");
const secondNum = document.querySelectorAll(".num");
let firstNumArray = [];
let secondNumArray = [];
let isClicked = false;
// EventListener for first number
firstNum.forEach(num => num.addEventListener("click", getFirstNum));
// EventListener for operator
operators.forEach(operator => operator.addEventListener("click", getOperator));
