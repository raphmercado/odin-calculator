// NEXT TODOS: 
// Create logic to clear values
// Try to remove values.isClicked to test if logic still works

const firstNum = document.querySelectorAll(".num");
const operators = document.querySelectorAll(".operator");
const secondNum = document.querySelectorAll(".num");
const equals = document.querySelector(".equals");
const clear = document.querySelector(".clear");
const result = document.querySelector(".container__result");

const values = {
  firstNumArray: [],
  secondNumArray: [],
  num1: 0,
  num2: 0,
  operator: "",
  isClicked: ""
};

function add() {
  secondNum.forEach(num => num.removeEventListener("click", getSecondNum));
  result.textContent = `${values.num1} ${values.operator} ${values.num2} = ${values.num1 + values.num2}`;
  values.firstNumArray = [];
  values.secondNumArray = [];
  values.num1 = 0;
  values.num2 = 0;
  values.operator = "";
  values.isClicked = "";
  console.log("Resetting values...\nDone.");
  operators.forEach(operator => disable(operator));
  disable(equals);
  main();
}

function subtract() {
  secondNum.forEach(num => num.removeEventListener("click", getSecondNum));
  result.textContent = `${values.num1} ${values.operator} ${values.num2} = ${values.num1 - values.num2}`;
  values.firstNumArray = [];
  values.secondNumArray = [];
  values.num1 = 0;
  values.num2 = 0;
  values.operator = "";
  values.isClicked = "";
  console.log("Resetting values...\nDone.");
  operators.forEach(operator => disable(operator));
  disable(equals);
  main();
}

function multiply() {
  secondNum.forEach(num => num.removeEventListener("click", getSecondNum));
  result.textContent = `${values.num1} ${values.operator} ${values.num2} = ${values.num1 * values.num2}`;
  values.firstNumArray = [];
  values.secondNumArray = [];
  values.num1 = 0;
  values.num2 = 0;
  values.operator = "";
  values.isClicked = "";
  console.log("Resetting values...\nDone.");
  operators.forEach(operator => disable(operator));
  disable(equals);
  main();
}

function divide() {
  secondNum.forEach(num => num.removeEventListener("click", getSecondNum));
  result.textContent = `${values.num1} ${values.operator} ${values.num2} = ${values.num1 / values.num2}`;
  values.firstNumArray = [];
  values.secondNumArray = [];
  values.num1 = 0;
  values.num2 = 0;
  values.operator = "";
  values.isClicked = "";
  console.log("Resetting values...\nDone.");
  operators.forEach(operator => disable(operator));
  disable(equals);
  main();
}

function operate() {
  equals.removeEventListener("click", operate);
  switch (values.operator) {
    case "+":
      add();
      break;
    case "-":
      subtract();
      break;
    case "×":
      multiply();
      break;
    case "÷":
      divide();
      break;
  }
}

function clearValues() {
  values.firstNumArray = [];
  values.secondNumArray = [];
  values.num1 = 0;
  values.num2 = 0;
  values.operator = "";
  values.isClicked = "";
  result.textContent = "";
  console.log(`firstNumArray: ${values.firstNumArray}\nnum1 ${values.num1}\nsecondNumArray: ${values.secondNumArray}\nnum2: ${values.num2}\noperator: ${values.operator}\nisClicked: ${values.isClicked}`);
  main();
}

function getFirstNum(e) {
  values.firstNumArray.push(e.target.value);
  values.num1 = parseInt(values.firstNumArray.join(""));
  operators.forEach(operator => enable(operator));
  enable(clear);
  values.isClicked = "firstNum";
  result.textContent = `${values.num1}`;
  console.log(values.num1);
  console.log(values.isClicked);
}

function getSecondNum(e) {
  if (values.isClicked === "secondNum") {
    values.secondNumArray.push(e.target.value);
    values.num2 = parseInt(values.secondNumArray.join(""));
    enable(equals);
    result.textContent = `${values.num1} ${values.operator} ${values.num2}`;
    console.log(values.num2);
    console.log(values.isClicked);
    equals.addEventListener("click", operate);
  }
}

function getOperator(e) {
  values.operator = e.target.value;
  values.isClicked = "operator";
  result.textContent = `${values.num1} ${values.operator}`;
  console.log(values.operator);
  if (values.isClicked === "operator") {
    firstNum.forEach(num => num.removeEventListener("click", getFirstNum));
    console.log("Stopped. Next: Second num");
    operators.forEach(operator => operator.removeEventListener("click", getOperator));
    values.isClicked = "secondNum";
    // EventListener for second number
    secondNum.forEach(num => num.addEventListener("click", getSecondNum));
  }
}

function enable(element) {
  element.disabled = false;
}

function disable(element) {
  element.disabled = true;
}

function main() {
  // EventListener for first number
  firstNum.forEach(num => num.addEventListener("click", getFirstNum));
  // EventListener for operator
  operators.forEach(operator => operator.addEventListener("click", getOperator));
  // EventListener for clear button
  clear.addEventListener("click", clearValues);
}

main();