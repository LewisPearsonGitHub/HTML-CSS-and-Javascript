"use strict";

const counterValue = document.querySelector("#counterInput");
counterValue.value = 0;
const output = document.querySelector("#output")

const minusFive = () => {
    const num = parseFloat(counterValue.value);
    counterValue.value = num -5;
    const newOutput = document.createElement("p");
    newOutput.innerText = String(num + " -5 = " + (counterValue.value));
    output.appendChild(newOutput);


}

const minusOne = () => {
    const num = parseFloat(counterValue.value);
    counterValue.value = num -1;
    const newOutput = document.createElement("p");
    newOutput.innerText = String(num + " -1 = " + (counterValue.value));
    output.appendChild(newOutput);
}

const reset = () => {
    const num = parseFloat(counterValue.value);
    counterValue.value = 0;
    const newOutput = document.createElement("p");
    newOutput.innerText = String("Value reset");
    output.appendChild(newOutput);
}

const addOne = () => {
    const num = parseFloat(counterValue.value);
    counterValue.value = num +1;
    const newOutput = document.createElement("p");
    newOutput.innerText = String(num + " +1 = " + counterValue.value);
    output.appendChild(newOutput);
    
}

const addFive = () => {
    const num = parseFloat(counterValue.value);
    counterValue.value = num +5;
    const newOutput = document.createElement("p");
    newOutput.innerText = String(num + " +5 = " + counterValue.value);
    output.appendChild(newOutput);
}