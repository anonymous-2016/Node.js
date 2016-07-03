/*node.js test*/

function arithmetic(){
var clc = require('cli-color');
var a, b;
a = 10;
b = 5.4;
console.log('a = 10;b = 5.4;');
console.log(clc.green.bgWhite('*********************************'));

// Addition
var c = a + b;
console.log('a = 10;b = 5.4;');
console.log('c = a + b;');
console.log(clc.green.bgWhite('*********************************'));
console.log(clc.red('addition:c=')+c);

// Subtraction
var c = a - b;
console.log('c = a - b;');
console.log(clc.green.bgWhite('*********************************'));
console.log(clc.green('subtraction:c=')+c);
// Multiplication

var c = a * b;
console.log('c = a * b;');
console.log(clc.green.bgWhite('*********************************'));
console.log(clc.blue('multiplication:c=')+c);

// Division
var c = a / b;
console.log('c = a / b;');
console.log(clc.green.bgWhite('*********************************'));
console.log(clc.black.bgWhite('division:c=')+c);
}
arithmetic();



