function add(num1, num2) {
  alert(`${num1} ${operator} ${num2} = ${num1 + num2}`);
}

function subtract(num1, num2) {
  alert(`${num1} ${operator} ${num2} = ${num1 - num2}`);
}

function multiply(num1, num2) {
  alert(`${num1} ${operator} ${num2} = ${num1 * num2}`);
}

function divide(num1, num2) {
  alert(`${num1} ${operator} ${num2} = ${num1 / num2}`);
}

function operate() {
  equals.removeEventListener("click", operate);
  switch (operator) {
    case "+":
      add(num1, num2);
      break;
    case "-":
      subtract(num1, num2);
      break;
    case "×":
      multiply(num1, num2);
      break;
    case "÷":
      divide(num1, num2);
      break;
  }
}

function getFirstNum(e) {
  firstNumArray.push(e.target.value);
  num1 = parseInt(firstNumArray.join(""));
  operators.forEach(operator => enable(operator));
  enable(clear);
  console.log(num1);
  console.log(isClicked);
}

function getSecondNum(e) {
  secondNumArray.push(e.target.value);
  num2 = parseInt(secondNumArray.join(""));
  enable(equals);
  console.log(num2);
  console.log(isClicked);
  secondNum.forEach(num => num.removeEventListener("click", getSecondNum));
  equals.addEventListener("click", operate);
}

function getOperator(e) {
  operator = e.target.value;
  isClicked = true;
  if (isClicked === true) {
    firstNum.forEach(num => num.removeEventListener("click", getFirstNum));
    console.log("Stopped. Next: Second num");
    operators.forEach(operator => operator.removeEventListener("click", getOperator));
    isClicked = false;
    // EventListener for second number
    secondNum.forEach(num => num.addEventListener("click", getSecondNum));
  }
}

function enable(element) {
  element.disabled = false;
}

function main() {
  const firstNum = document.querySelectorAll(".num");
  const operators = document.querySelectorAll(".operator");
  const secondNum = document.querySelectorAll(".num");
  const equals = document.querySelector(".equals");
  const clear = document.querySelector(".clear");
  let firstNumArray = [];
  let secondNumArray = [];
  let num1;
  let num2;
  let operator;
  let isClicked = false;
  // EventListener for first number
  firstNum.forEach(num => num.addEventListener("click", getFirstNum));
  // EventListener for operator
  operators.forEach(operator => operator.addEventListener("click", getOperator));
}

main();