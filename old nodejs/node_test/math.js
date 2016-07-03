/*node.js test*/

function xmath(){
	var clc = require('cli-color');
console.log(clc.green.bgWhite('*********************************'));
	
var a, b;
//Math.PI=3.141592653589793
console.log(Math.PI);
console.log(clc.green.bgWhite('*********************************'));
a = Math.PI/6;
b = Math.PI/3;

console.log(Math.sin(a));
console.log(Math.cos(b));
console.log(clc.green.bgWhite('*********************************'));

var a=3,b=5;
console.log(Math.max(a, b));
console.log(Math.min(a, b));
console.log(clc.green.bgWhite('*********************************'));

var x=3.6;
var y=7.4;
console.log(Math.ceil(x));
console.log(Math.floor(x));
console.log(Math.ceil(y));
console.log(Math.floor(y));

var x=2,y=3;
console.log(Math.pow(x,y));
console.log(clc.green.bgWhite('*********************************'));

var a=64,b=2;
console.log(Math.log(a));
console.log(Math.exp(b));
console.log(clc.green.bgWhite('*********************************'));

var a=3,b=27;
console.log(Math.sqrt(a*b));
console.log(clc.green.bgWhite('*********************************'));

var n = 100;
console.log(Math.random()*n);// pseudorandom [0-1)(*100扩展[0-100))
console.log(clc.green.bgWhite('*********************************'));

var x=37.3,y=37.5,n=37.7;
console.log(Math.round(x));
console.log(Math.round(y));
console.log(Math.round(n));
console.log(clc.green.bgWhite('*********************************'));
}
//execute
xmath();

/*
  Math.abs(a), the absolute value of a
  Math.acos(a), arc cosine of a
  Math.asin(a), arc sine of a
  Math.atan(a), arc tangent of a
  Math.atan2(a,b), arc tangent of a/b
  Math.ceil(a), integer closest to a and not less than a
  Math.cos(a), cosine of a
  Math.exp(a), exponent of a (Math.E to the power a)
  Math.floor(a), integer closest to a, not greater than a
  Math.log(a), log of a base e
  Math.max(a,b), the maximum of a and b
  Math.min(a,b), the minimum of a and b
  Math.pow(a,b), a to the power b
  Math.random(), pseudorandom number 0 to 1 (see examples)
  Math.round(a), integer closest to a (see rounding examples)
  Math.sin(a), sine of a
  Math.sqrt(a), square root of a
  Math.tan(a), tangent of a
*/