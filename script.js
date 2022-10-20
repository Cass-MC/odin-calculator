let histogramText = document.querySelector("#histogram");
let currentOpText = document.querySelector("#currentOperation");
const operationsReg = /[\+\-\*\/]/g;
let currentAnswer = 0;
hookButtons();

function add(x,y) {
    return x+y;
}

function subtract(x,y) {
    return x-y;
}

function multiply(x,y) {
    return x*y;
}

function divide(x,y) {
    return x/y;
}

function operate(o,x,y) {
    switch (o) {
        case "+":
            return add(x,y);
            break;
        case "-":
            return subtract(x,y);
            break;
        case "*":
            return multiply(x,y);
            break;
        case "/":
            return divide(x,y);
            break;
    }
}

function updateHistogram(button) {
    if (checkDuplicateOperations(this.innerText)) {
        //change the histogram to have the new operation
        console.log("Is duplicate");
    }

    if (midOperation(this.innerText)) {
        //go to doOperation
    }
    else {
        //just update histogram
        histogramText.innerText += this.innerText;
    }
    
}

function checkDuplicateOperations(buttonText) {
    if (histogramText.innerText === "") { return false; }
    const lastCharHisto = histogramText.innerText.slice(-1);
    if (lastCharHisto.match(operationsReg) && buttonText.match(operationsReg)) {
        return true;
    }  
    return false;
}

function midOperation(buttonText) {
    return false;
}

function doOperation(button) {

}


function hookButtons() {
    const allButtons = document.querySelectorAll("button");
    const operatorButtons = document.querySelectorAll(".operator");
    for (button of allButtons) {
        if (button.innerText === "Clear") { continue; }
        if (button.innerText === "=") { button.addEventListener("click", doOperation); continue; }
        button.addEventListener("click", updateHistogram);
    } //May not be necessary vv
    for (button of operatorButtons) {
        button.addEventListener("click",doOperation);
    }
}
