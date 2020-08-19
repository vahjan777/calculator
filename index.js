const display = document.getElementById("display")
let currentValue = '';
let bufferValue;
let simbol;
const plus = document.getElementById("plus");


function setNum(val) {
    currentValue = currentValue + val;
    console.log(currentValue);
    display.innerHTML = currentValue;
}

function mathOption(value){
    bufferValue = +currentValue;
    currentValue = '';
    simbol = value;
    display.innerHTML = bufferValue;
}
// function setOpt(id) {
//
//     if( val1 === 0 ) {
//         val1 = +setNumb;
//         setNumb = '';
//         setNum(val);
//     } else {
//         val2 = +setNumb;
//     }
//
// }

function equal(){
    if(simbol === "plus") {
        bufferValue = bufferValue +  +currentValue;
    } else if(simbol === "min") {
        bufferValue = bufferValue  - currentValue;
    } else if(simbol === "mult") {
        bufferValue = bufferValue  * +currentValue;
    }else if(simbol === "divis") {
        bufferValue = bufferValue  / +currentValue;
    }else if(simbol === "persent") {
        bufferValue = bufferValue  * +currentValue / 100;
    }
    console.log(bufferValue);
    display.innerHTML = bufferValue;
}

function clearAll() {
    bufferValue = null;
    currentValue = '';
    display.innerHTML = currentValue;
}
