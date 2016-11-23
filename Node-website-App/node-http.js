//server.js
// import the http module
var http = require('http');

// handle sending requests and returning responses
function handleRequests(req, res) {
  //return string
  res.end('Hello node-http!');
}

// create the server
var server = http.createServer(handleRequests);

// start server and listen on port x
server.listen(8080, function() {
  console.log('node-http is Listening on port 8080');
});


