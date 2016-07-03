//http url

var http = require('http');
var server = http.createServer(function (req, res) {
console.log(req.url);
if(req.url=='/'){
res.write('Welcome to http nodejs');
res.end();
}else
if(req.url=='/customer'){
res.write('Welcome to Customer page');
res.end();
}else
if(req.url=='/admin'){
res.write('Welcome to Admin page');
res.end();
}else
{
res.write('Page not found');
res.end();
}
});
server.listen(8084);
console.log('Server is running on port 8084');