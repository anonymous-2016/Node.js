/*node.js test*/

var http = require('http');

http.createServer(function (req, res) {

  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.writeHead(200, 'Content-Type: application/javascript; charset=utf-8');
  res.end('Hello World !\n');
  
  //res.end('000 Hello World\n');
  //res.end只可以执行一次！
  
  //var clc = require('cli-color');
  //res.end(clc.green.white('001 Hello World\n'));
  //colored text 不可以用在这里？
  
  
  
}).listen(1338, "127.0.0.1");

console.log('Server running at http://127.0.0.1:1338/');


//Output colored text:
var clc = require('cli-color');
console.log('************************************');
console.log(clc.white.bgRed('04 white text on red background.'));
console.log(clc.green('05 Server running at http://127.0.0.1:1338/'));
/*
//colored text
  var clc = require('cli-color');
  console.log(clc.green.white('01 Hello World\n'));
  console.log('************************************');
  
  var msg = clc.xterm(232).bgXterm(231);
  console.log(msg('02 Hello World\n'));
  console.log('************************************');
  
  var msg2 = clc.xterm(46).bgXterm(226);
  console.log(msg2('03 Hello World\n'));
  console.log('************************************');
*/
