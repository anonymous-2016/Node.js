//Web application
/*node.js test*/
var clc = require('cli-color');
function xfunction(){
console.log(clc.green.bgWhite('*********************************'));
console.log(('*************************************************'));
console.log(('*************************************************'));

console.log(('*************************************************'));
}
//execute
xfunction();
var http = require('http');
var server = http.createServer(function (req, res) {
	
// print request header
console.log(req.headers);
// set response header
res.setHeader('AppId','123456');


res.write('Welcome to http nodejs');
res.write('<h1>'+'Welcome to http nodejs'+'<h1>');
var h01 = '<h1>';
var h02 = '<h1>';
res.write(h01+'Welcome to http nodejs'+h02);
console.log('*******************************************');
res.write('<!doctype html><html lang="en">');
res.write('<head><style type="text/css">body{background:red;}<style></head>');
res.write('<body>');
res.write('<h1>Welcome to http nodejs !</h1></br>');
res.write('</hr><p>This is my web application test page!<p>');
res.write('</body><html>');
res.end();
});
server.listen(8084);
console.log(clc.green('Server is running on port 8084'));

console.log(clc.green('only IE 支持解析<h1>标签'));

console.log(clc.green('to close this Server :Ctrl + C'));






/*
//JSON (JavaScript Object Notation)

*/

