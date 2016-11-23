// require dependencies
var express = require('express');

var router  = express.Router();

//export router
module.exports = router;


// route for app index
router.get('/', function(req, res) {
    res.send('hello express! <br><mark>Index page</mark>');
});

// route for app home
router.get('/home', function(req, res) {
    res.send('hello express! <br><mark>Home page</mark>');
});

// route for app index
router.get('/about', function(req, res) {
    res.send('hello express! <br><mark>About Me!</mark>');
});

// route for app index
router.get('/contact', function(req, res) {
    res.send('hello express! <br><mark>Contact!</mark>');
});

router.post('/contact', function(req, res) {
    res.send('<mark>POST Contact!</mark>');
});



