/*node.js test*/

function xcomparision(){
	var clc = require('cli-color');
console.log(clc.green.bgWhite('*********************************'));
var a, b;
a = 5;
b = 8;
console.log(a > b && a != b);
console.log(!(a >= b));
console.log(a == b || a > b);	

console.log(clc.green.bgWhite('*********************************'));

}
//execute
xcomparision();
/*
//Logical Operators  Note
&&  And
||  Or
!  Not
*/
