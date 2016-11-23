 // server.js
var express = require('express');
var app = express();
var port = 3000;

// start the server
app.listen(port, function() {
  console.log('express app started');
});

// route our app
app.get('/', function(req, res) {
    res.send('hello express! <mark>nodemon local path tets OK!</mark>');
});