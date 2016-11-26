/*node.js test*/
var clc = require('cli-color');
function xmodule(){
console.log(clc.green.bgWhite('*********************************'));

console.log(('*************************************************'));
}
console.log(('*************************************************'));
var myModule = require('./MyModule.js');
var result1 = myModule.calculate(20,10);
var result2 = myModule.add(20,10);
var result3 = myModule.show('xgqfrms');
console.log(result1);
console.log(result2);
console.log(result3);

console.log(('*******you can create a class as a module in Node.js*******'));
console.log(('注意：***变量名Account 要与后面的实例化对象保持一致，new Account();******'));
console.log(('*************************************************************************'));
var Account = require('./Account.js');
var account = new Account();
account.perform();
account.foo(100,100);

//execute
xmodule();
/*
//module

*/