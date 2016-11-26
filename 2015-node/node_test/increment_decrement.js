/*node.js test*/

function xincrement_decrement(){
	var clc = require('cli-color');
console.log(('*************************************************'));
console.log(clc.green.bgWhite('*********************************'));
var a = 5;
a = a + 1;

var a = 0;
for(var n=0;n<10;n++){
	a++;
	console.log(a);
}
console.log(('*************************************************'));
var b = 8;
b = b + 1;

var b = 11;
for(var n=10;n>0;n--){
	b--;
	console.log(b);
}	

console.log(clc.green.bgWhite('*********************************'));

}
//execute
xincrement_decrement();
/*
//Increment and Decrement
*/