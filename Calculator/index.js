"use strict";

const counterValue = document.querySelector("#counterInput");
counterValue.value = "";
const output = document.querySelector("#output")



let num1 = 0;
let num2 = 0;
let operator ="";

const zero = () => {
    const num = counterValue.value;
    counterValue.value = num+0;
}

const one = () => {
    const num = counterValue.value;
    counterValue.value = num +1;
}

const two = () => {
    const num = counterValue.value;
    counterValue.value = num +2;
}

const three = () => {
    const num = counterValue.value;
    counterValue.value = num +3;
}

const four = () => {
    const num = counterValue.value;
    counterValue.value = num +4;
}

const five = () => {
    const num = counterValue.value;
    counterValue.value = num +5;
}

const six = () => {
    const num = counterValue.value;
    counterValue.value = num +6;
}

const seven = () => {
    const num = counterValue.value;
    counterValue.value = num +7;
}

const eight = () => {
    const num = counterValue.value;
    counterValue.value = num +8;
}

const nine = () => {
    const num = counterValue.value;
    counterValue.value = num +9;
    
}

const clearCalculator = () => {
    counterValue.value = "";
}

const plus = () => {
    const num = counterValue.value;
    num1 = counterValue.value;

    counterValue.value = "";

    operator = "+";
    
}

const minus = () => {
    const num = counterValue.value;
    num1 = counterValue.value;

    counterValue.value="";

    operator = "-";
}

const divide = () => {
    const num = counterValue.value;
    num1 = counterValue.value;
    counterValue.value="";

    operator = "/";
}

const multiply = () => {
    const num = counterValue.value;
    num1 = counterValue.value;
    counterValue.value="";

    operator = "*";
}

const equals = () => {
    
    num2 = counterValue.value;
    
    if (operator == "+") {
        counterValue.value = parseFloat(num1)+parseFloat(num2);
        const newOutput = document.createElement("p");
        newOutput.innerText = String(num1 + operator + num2 + " = " + counterValue.value);
        output.appendChild(newOutput);
    } else if (operator == "-"){
        counterValue.value = parseFloat(num1)-parseFloat(num2);
        const newOutput = document.createElement("p");
        newOutput.innerText = String(num1 + operator + num2 + " = " + counterValue.value);
        output.appendChild(newOutput);
    } else if (operator == "/") {
        counterValue.value = parseFloat(num1)/parseFloat(num2);
        const newOutput = document.createElement("p");
        newOutput.innerText = String(num1 + operator + num2 + " = " + counterValue.value);
        output.appendChild(newOutput);
    } else if (operator == "*") {
        counterValue.value = parseFloat(num1)*parseFloat(num2);
        const newOutput = document.createElement("p");
        newOutput.innerText = String(num1 + operator + num2 + " = " + counterValue.value);
        output.appendChild(newOutput);
    }
    
}
