"use strict";

const counterValue = document.querySelector("#counterInput");
counterValue.value = "";
const output = document.querySelector("#output")



let num1 = 0;
let num2 = 0;
let operator ="";

const numberInput = (event) => {
    const num = counterValue.value;
    counterValue.value = num+event.target.innerText;
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