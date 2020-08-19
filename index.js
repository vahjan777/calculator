let setNumb = '';
let val2;
let val1;
const plus = document.getElementById("plus");


function setNum(val) {
    setNumb = setNumb + val;
    console.log(setNumb);
    return setNumb;
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
    console.log(eval(setNumb));
}
