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

function display(button) {
    const buttonText = this.innerText;
    let displayText = document.querySelector("#display");
    displayText.innerText += buttonText;
}



function hookButtons() {
    const allButtons = document.querySelectorAll("button");
    const operatorButtons = document.querySelectorAll(".operator");

    for (button of allButtons) {
        if (button.innerText === "Clear") { continue; }
        button.addEventListener("click", display);
    }


}

hookButtons();