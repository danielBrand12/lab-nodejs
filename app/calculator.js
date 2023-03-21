'use strict'; 
function add(a,b){
    return a + b;
}

function minus(a,b){
    return a - b;
}

function sqrt(a){
    return Math.sqrt(a);
}

function multiply(a,b){
    return a*b;
}

function divide(a,b){
    if(b===0){
        return new Error("Can't divide by 0!")
    }
    return a/b;
}

module.exports = {
    add,
    minus,
    divide,
    sqrt,
    multiply
}