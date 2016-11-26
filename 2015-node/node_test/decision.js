/*node.js test*/

function xdecision(){
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

var a = 8, b = 3;
console.log(a > b ? false : true);
console.log(a==b ? 'a==b' : 'a is not equal to b');

console.log(clc.green.bgWhite('*********************************'));
var color = 'green';
switch (color) {
case 'black':
console.log('black');
break;
case 'green':
console.log('green');
break;
case 'white':
console.log('white');
break;
}
console.log(('*************************************************'));
}
//execute
xdecision();
/*
//decision
  if..then
  switch..case
*/