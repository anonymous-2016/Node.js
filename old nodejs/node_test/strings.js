/*node.js test*/

function xString(){
	var clc = require('cli-color');
console.log(clc.green.bgWhite('*********************************'));
var obj1 = new String("hello world");
var obj2 = "hello world";
console.log(obj1);
console.log(obj2);
console.log(('*************************************************'));
var str1 = 'hello ';
var str2 = 'world ';
var str3 = 'nodejs';
console.log(str1 + str2 + str3);
console.log(('*************************************************'));
console.log('-----parseInt-----');
console.log(parseInt('123'));
console.log(parseInt('123.45'));
console.log(parseInt('-123'));
console.log(parseInt('0.34'));
console.log(parseInt('12abc'));
console.log('-----parseFloat-----');
console.log(parseFloat('123'));
console.log(parseFloat('123.45'));
console.log(parseFloat('-123'));
console.log(parseFloat('0.34'));
console.log(parseFloat('12abc'));

console.log(('*************************************************'));

var a = 123;
var b = a + '';
var num = 405;
var str = num.toString();
console.log(b);
console.log(num);
console.log(('*************************************************'));
var data = 'Berlin;Amsterdam;London;Jakarta';
console.log(data);
var strs = data.split(';');
for(var index in strs){
console.log(strs[index]);
}

console.log(('*************************************************'));
var str1 = 'hello world, nodejs';
console.log(str1);
console.log('Total string:' + str1.length);
console.log(('*************************************************'));

var str1 = 'hello world, nodejs';
console.log(str1.substring(2,8));
console.log(str1.substring(1,5));
console.log(str1.substring(0,6));
console.log(str1.substring(0,str1.length));
console.log(('*************************************************'));
var str1 = 'hello world, nodejs';
console.log(str1.substr(2,6));
console.log(str1.substr(5,4));
console.log(str1.substr(0,6));
console.log(str1.substr(0,str1.length));
console.log(('*************************************************'));
var str1 = 'Hello WORLD, nodejs';
console.log(str1.toUpperCase());
console.log(str1.toLowerCase());

console.log(('*************************************************'));
var str = 'Hello WORLD, nodejs';
console.log('-----indexOf-----');
console.log(str.indexOf('ello'));
console.log(str.indexOf('nodejs'));
console.log(str.indexOf('e'));

console.log('-----lastIndexOf-----');
console.log(str.lastIndexOf('ello'));
console.log(str.lastIndexOf('nodejs'));
console.log(('lastIndexOf---error?'));
console.log(str.lastIndexOf('e'));
console.log(('**************case-sensitive*********************'));
var str = 'Hello WORLD, nodejs';
console.log(str.indexOf('C#'));
console.log(('*************************************************'));
var data = 'Berlin;Amsterdam;London;Jakarta';
console.log(data.charAt(0));
console.log(data.charAt(4));
console.log(data.charAt(7));
console.log(data.charAt(10));
console.log(('*************************************************'));
var data = 'Berlin;Amsterdam;London;Jakarta';
console.log(data.charAt(100));

console.log(('***************empty character***************'));
}
//execute
xString();
/*
//JSON (JavaScript Object Notation)

*/