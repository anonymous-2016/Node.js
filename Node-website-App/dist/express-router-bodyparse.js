// require our dependencies
var express = require('express');
var app = express();
var port = process.env.PORT || 3000;

// require express-ejs-layouts
var expressLayouts = require('express-ejs-layouts');

// require body-parser
var bodyParser = require('body-parser');

// use body-parser ??? urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// ??? var ejs = require('ejs');  views folder ???
// set & use ejs
app.set('view engine', 'ejs');
// use express-ejs-layouts
app.use(expressLayouts);


/*
ejs 应该在 router 前面，防止 error！
*/

// route app with app-router.js
var router = require('./app/app-router-with-data');
app.use('/', router);

// set static file(css,img) realtive path for view pages
app.use(express.static(__dirname + '/public'));

// start the server
app.listen(port, function() {
  console.log('app started & router');
});

