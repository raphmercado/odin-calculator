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

const firstNum = document.querySelectorAll(".num");
let firstNumArray = [];
firstNum.forEach(num => num.addEventListener("click", e => {
  firstNumArray.push(e.target.value);
  const finalFirstNum = parseInt(firstNumArray.join(""));
  console.log(finalFirstNum);
}));

// const operators = document.querySelectorAll(".operator");
// let isClicked = false;
// operators.forEach(operator => operator.addEventListener("click", e => {
//   //console.log(e.target.value);
//   operator = e.target.value;
//   console.log(operator);
// }, { once: true }));

// const nums2 = 5;
