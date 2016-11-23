 // server.js
var express = require('express');
var app = express();
var port = 3000;

// start the server
app.listen(port, function() {
  console.log('express app started with rotue!');
});

// route our app
app.get('/', function(req, res) {
    res.send('hello express! <br><mark>Index page</mark>');
});

app.get('/home', function(req, res) {
    res.send('hello express! <br><mark>Home page</mark>');
});

// route our app
app.get('/about', function(req, res) {
    res.send('hello express! <br><mark>About Me!</mark>');
});

// route our app
app.get('/contact', function(req, res) {
    res.send('hello express! <br><mark>Contact!</mark>');
});