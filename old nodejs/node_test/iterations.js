/*node.js test*/

function xiterations(){
	var clc = require('cli-color');
console.log(('*************************************************'));
var a, b;
a = 5;
b = 8;
if (a > b || a - b < a) {
console.log('conditional-->a>b || a-b<a');
} else {
console.log('..another');
}
console.log(clc.green.bgWhite('*********************************'));

for (var counter = 0; counter < 10; counter++) {
console.log(counter);
}

console.log(clc.green.bgWhite('*********************************'));
var num = 0;
while (num < 10) {
console.log(num);
num++;
}
console.log(('*************************************************'));
}
//execute
xiterations();
/*
//iterations
for (initialize; condition; increment / decrement) {
// do something

while (condition) {
// do something
}

}
*/