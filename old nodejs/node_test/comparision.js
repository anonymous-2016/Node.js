/*node.js test*/

function xcomparision(){
	var clc = require('cli-color');
console.log(clc.green.bgWhite('*********************************'));
	
var a, b;
a = 5;
b = 8;
console.log(clc.green.bgWhite('*********************************'));
console.log(a > b);
console.log(a < b);
console.log(a >= b);
console.log(a <= b);
console.log(a != b);
console.log(a == b);
console.log(clc.green.bgWhite('*********************************'));

}
//execute
xcomparision();
/*
//Node.js Comparison  Note
==  Equal to
!=  Not equal
>  Greater than
<  Less than
>=  Greater than or equal to
<=  Less than or equal to
*/
