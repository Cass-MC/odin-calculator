let histogramText = document.querySelector("#histogram");
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
    if (stopDuplicateOp) { return; }
    else { histogramText.innerText += buttonText; }

}

function stopDuplicateOperations(buttonText, histogramText) {
    const lastButtonChar = String(buttonText)
                            .charAt(buttonText.length - 1);
    const lastDisplayChar = String(histogramText)
                            .charAt(histogramText.length - 1);
    const operationsReg = /[\+\-\*\/]/g;
    if (lastButtonChar.match(operationsReg) && lastDisplayChar.match(operationsReg)) {
        return true;
    }
    else { return false; }
}

function startOperation(button) {
    //hang on.
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
