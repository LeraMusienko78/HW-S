"use strict";

//          ***   CALCULETE  ***

let isRunning = true;

while (isRunning) {
    const userNumber1 = +prompt("Назовите первое число:");
    const userNumber2 = +prompt("Назовите второе число:");
    const userSymbol = prompt("Введите знак: \n 1) +  \n 2) -  \n 3) * \n 4) /");

    calculate(userNumber1, userNumber2, userSymbol);

    isExit();
}

function isExit(){
    isRunning = !confirm("Хочешь выйти ?");

    if (isRunning) {
    }
    else {
        alert("Goodbay");
    }
}

function calculate (x, y, symbol){
    validate(x, y );

    let result;

    switch (symbol){
        case "+":
        result = add(x, y);
        alert(`${x} ${symbol} ${y} =  ${result}`);
        console.log("[RESULT] " ,result);
        break;

        case "-":
        result = subtr(x, y);
        alert(`${x} ${symbol} ${y} =  ${result}`);
        console.log("[RESULT] " ,result);
        break

        case "*":
        result = multiply(x, y);
        alert(`${x} ${symbol} ${y} =  ${result}`);
        console.log("[RESULT] " ,result);
        break;

        case "/":
        result = div(x, y);
        alert(`${x} ${symbol} ${y} =  ${result}`);
        console.log("[RESULT] " ,result);
        break

        default:

        break;
    }
}

function validate(a, b){
    if(!isNaN (a) && !isNaN (b)){
        console.log ("Valide");
        alert("Продолжай");
    }
    else{
        console.error("Invalide");
        isError("Введите корректные данные");
    }
}

function add(a, b){
    return a + b;
}
function subtr(a, b){
    return a - b;
}
function multiply(a, b){
    return a * b;
}
function div(a, b){
    return a / b;
}

function isError(messange){
    alert (messange);
}






