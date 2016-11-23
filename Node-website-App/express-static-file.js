// require our dependencies
var express = require('express');
var app = express();
var port = process.env.PORT || 3000;

// route our app with app-router.js
var router = require('./app/app-router');
app.use('/', router);

// set static file(css,img) realtive path for view pages
app.use(express.static(__dirname + '/public');

// start the server
app.listen(port, function() {
  console.log('app started & router');
});
