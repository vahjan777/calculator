const display = document.getElementById("display")
let currentValue = '',
    bufferValue = '',
    simbol;
const plus = document.getElementById("plus");


function setNum(val) {
    currentValue = currentValue + val;
    display.innerHTML = currentValue;
}

function mathOption(value) {
    bufferValue = +bufferValue + +currentValue;
    currentValue = '';
    simbol = value;
    display.innerHTML = bufferValue;
}
function mathOption1(value) {
    if(value === "square"){
        currentValue = +currentValue * +currentValue;
    }
    else if(value === "cube") {
        currentValue = +currentValue * +currentValue * +currentValue;
    }
    else if(value === "tenRedXDig") {
        currentValue = tenRedXDig(+currentValue);
    }
    else if(value === "fact") {
        currentValue = fact(+currentValue);
    }
    else if(value === "sqrt") {
        currentValue = sqrt(+currentValue);
    }
    else if(value === "round") {
        currentValue = (+currentValue).toFixed();
    }
    else if(value === "plusMin") {
        currentValue = -(+currentValue);
    }
    else if(value === "oneDividX") {
        currentValue = 1 / +currentValue;
    }
    else if(value === "ce") {
        currentValue = currentValue.slice(0, -1);
    }
    display.innerHTML = currentValue;
}

function equal() {
        if (simbol === "plus") {
            bufferValue = bufferValue + +currentValue;
        } else if (simbol === "min") {
            bufferValue = bufferValue - currentValue;
        } else if (simbol === "mult") {
            bufferValue = bufferValue * +currentValue;
        } else if (simbol === "divis") {
            bufferValue = bufferValue / +currentValue;
        } else if (simbol === "persent") {
            bufferValue = +currentValue * +bufferValue / 100;
        }else if (simbol === "persent") {
            bufferValue = +currentValue * +bufferValue / 100;
        }
        currentValue = '';
        display.innerHTML = bufferValue;
}

function clearAll() {
        bufferValue = null;
        currentValue = '';
        display.innerHTML = currentValue;
}

function tenRedXDig(num) {
    let digit = 1;
    if(num <= 0) return 1;
    for (let i = 0; i < num; i++) digit *= 10;
    return digit;
}

function fact(el){
    let fact = 1;
    if (el === 0){
        fact = 1;
    } else {
        while (el){
            fact *= el--;
        }
    }
    return fact;
}


function sqrt(value) {
    let variable;
    let variable1 = value / 2;
    do {
        variable = variable1;
        variable1 = (variable + (value / variable)) / 2;
    }
    while (variable !== variable1);
    return variable;
}