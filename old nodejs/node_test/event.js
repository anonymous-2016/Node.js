/*node.js test*/
var clc = require('cli-color');
function xevent(){
console.log(clc.green.bgWhite('*********************************'));
console.log(('*************************************************'));
console.log(('*************************************************'));


}

var EventEmitter = require('events').EventEmitter;
var myEmitter = new EventEmitter;
var connection = function(id){
// do something
console.log('client id: ' + id);
};
myEmitter.on('connection', connection);
myEmitter.on('message', function(msg){
// do something
console.log('message: ' + msg);
});

myEmitter.emit('connection', 6);
myEmitter.emit('connection', 8);
myEmitter.emit('message', 'this is the first message');
myEmitter.emit('message', 'this is the second message');
myEmitter.emit('message', 'welcome to nodejs');

console.log(('******************once************************'));
var EventEmitter = require('events').EventEmitter;
var myEmitter = new EventEmitter;
myEmitter.once('message', function(msg){
// do something
console.log('message: ' + msg);
});
myEmitter.emit('message', 'this is the first message');
myEmitter.emit('message', 'this is the second message');
myEmitter.emit('message', 'welcome to nodejs');

console.log(('******************removeListener************************'));
var EventEmitter = require('events').EventEmitter;
var myEmitter = new EventEmitter;
// functions
var connection = function(id){
// do something
console.log('client id: ' + id);
};
var message = function(msg){
// do something
console.log('message: ' + msg);
};
// waiting event
myEmitter.on('connection', connection);
myEmitter.on('message', message);
// send message
myEmitter.emit('connection', 6);
// remove event
myEmitter.removeListener('connection',connection);
// test to send message
myEmitter.emit('connection', 10);
myEmitter.emit('message', 'welcome to nodejs');
//execute
xevent();
/*
//event
*/