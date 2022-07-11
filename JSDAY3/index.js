"use strict";

const myInput = document.querySelector("input#myInput");
const output = document.querySelector("#output");

const writeInput = () => {
    const newInput = document.createElement("p");
    newInput.innerText = myInput.value; 
    output.appendChild(newInput);

    // myInput.value = "";
    // myInput.focus();
}