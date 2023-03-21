const interface = require('readline-sync');

var calculator = require('./app/calculator')

const firstNum = interface.question("First number: ");
const secondNum = interface.question("Second number: ");

var a = parseInt(firstNum);
var b = parseInt(secondNum);

console.log(`${a} + ${b} = ${calculator.add(a,b)}`);
console.log(`${a} - ${b} = ${calculator.minus(a,b)}`);
console.log(`${a} * ${b} = ${calculator.multiply(a,b)}`);
console.log(`${a} / ${b} = ${calculator.divide(a,b)}`);
console.log(`sqrt ${a} = ${calculator.sqrt(a)}`);