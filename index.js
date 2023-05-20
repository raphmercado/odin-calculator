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

const nums1 = document.querySelectorAll(".num");
nums1.forEach(num => num.addEventListener("click", e => console.log(e.target.value)));

const nums2 = 5;
const operators = document.querySelectorAll(".operator");
operators.forEach(operator => operator.addEventListener("click", e => console.log(e.target.value)));