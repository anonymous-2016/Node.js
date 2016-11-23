// require dependencies
var express = require('express');
var xpath    = require('path');
var router  = express.Router();

//export router
module.exports = router;


// route for app index
router.get('/', function(req, res) {
    // __dirname === root dir
    res.sendFile(xpath.join(__dirname + '../index.html'));
});

// route for app home
router.get('/home', function(req, res) {
    res.sendFile(xpath.join(__dirname + '../home.html'));
});

// route for app index
router.get('/about', function(req, res) {
    res.sendFile(xpath.join(__dirname + '../about.html'));
});

// route for app index
router.get('/contact', function(req, res) {
    res.sendFile(xpath.join(__dirname + '../contact.html'));
});

router.post('/contact', function(req, res) {
   res.sendFile(xpath.join(__dirname + '../contact.html'));
});



