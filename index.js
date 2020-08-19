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
        bufferValue = +currentValue * +currentValue;
    } else if(value === "cube") {
        bufferValue = +currentValue * +currentValue * +currentValue;
    }
    else if(value === "tenRedXDig") {
        bufferValue = tenRedXDig(+currentValue);
    }
    else if(value === "fact") {
        bufferValue = fact(+currentValue);
    }
    else if(value === "sqrt") {
        bufferValue = sqrt(+currentValue);
    }
    else if(value === "round") {
        bufferValue = (+currentValue).toFixed();
    }
    else if(value === "plusMin") {
        bufferValue = -(+currentValue);
    }
    display.innerHTML = bufferValue
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