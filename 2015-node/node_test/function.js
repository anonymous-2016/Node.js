/*node.js test*/
var clc = require('cli-color');
//global variable
function xfunction(){
console.log(clc.green.bgWhite('*********************************'));

console.log(('*************************************************'));

console.log(('*************************************************'));

console.log(('*************************************************'));
}
function myfunction(){
console.log('calling myfunction');
}
//execute
xfunction();
myfunction();

function getCurrentCity(){
return 'Berlin';
}
var ret = getCurrentCity();
console.log(clc.green.bgWhite('*********************************'));
console.log(ret);
console.log(clc.green.bgWhite('*********************************'));

function add(a,b){
return a+b;
}
var result = add(10,15);
console.log(result);

console.log(clc.green.bgWhite('*********************************'));
function perform(a,b,callback){
var c = a*b + a;
callback(c);
}
perform(10,5,function(result){
console.log(result);
})
console.log(clc.green.bgWhite('*********************************'));
function perform(a,b,callback){
// do processing
var errorCode = 102;
callback(errorCode,'Internal server error');
}
perform(10,5,function(errCode,msg){
if(errCode){
console.log(msg);
}
})

/*
//function
*/