let histogramText = document.querySelector("#histogram");
let currentOpText = document.querySelector("#currentOperation");
const operationsReg = /[\+\-\*\/]/g;
let currentOp = 0;
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
    //add functionality for = here later
}

function display(button) {
    const buttonText = this.innerText;
    let stopDuplicateOp = false;

    if (histogramText.innerText.length > 0) { 
        stopDuplicateOp = stopDuplicateOperations(buttonText, histogramText.innerText); 
    }
    if (stopDuplicateOp) {
        const updateOperation = String(histogramText.innerText)
                                    .substring(0, histogramText.innerText.length - 1);
        histogramText.innerText = updateOperation + buttonText;
     }
    else { 
        histogramText.innerText += buttonText;
    }
}

function stopDuplicateOperations(buttonText, histogramText) {
    const lastButtonChar = String(buttonText)
                            .charAt(buttonText.length - 1);
    const lastDisplayChar = String(histogramText)
                            .charAt(histogramText.length - 1);
    if (lastButtonChar.match(operationsReg) && lastDisplayChar.match(operationsReg)) {
        return true;
    }
    else { return false; }
}

function startOperation(button) {
    histoNumbers = histogramText.innerText.match(/[0-9]/g);
    histoOperations = histogramText.innerText.match(operationsReg); 

    //Set up currentOp if there's enough data to do an operation
    if (currentOp === 0 && histoOperations.length === 2) {
        const op = histoOperations[histoOperations.length-2];
        const num1 = Number(histoNumbers[histoNumbers.length-2]);
        const num2 = Number(histoNumbers[histoNumbers.length-1]);
        currentOp = operate(op, num1, num2);   
    }
    //Once there's enough data to work with, work with it.
    else if (histoOperations.length % 2 === 0 || histoOperations.length === 3) {
        //last operation, last number
        const op = histoOperations[histoOperations.length-2];
        const num2 = Number(histoNumbers[histoNumbers.length-1]);
        currentOp = operate(op, currentOp, num2);
        console.log("heyo");
    }
    
    currentOpText.innerText = currentOp;

}

function hookButtons() {
    const allButtons = document.querySelectorAll("button");
    const operatorButtons = document.querySelectorAll(".operator");
    for (button of allButtons) {
        if (button.innerText === "Clear") { continue; }
        button.addEventListener("click", display);
    }
    for (button of operatorButtons) {
        button.addEventListener("click",startOperation);
    }
}
