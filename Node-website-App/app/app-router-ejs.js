// require dependencies
var express = require('express');
var xpath    = require('path');
var router  = express.Router();

//export router
module.exports = router;

// route for app index
router.get('/', function(req, res) {
    // __dirname === root dir
    res.render('ejs/index'));
});

// route for app home
router.get('/home', function(req, res) {
    res.render('ejs/home'));
});

// route for app index
router.get('/about', function(req, res) {
    res.render('ejs/about'));
});

// route for app index
router.get('/contact', function(req, res) {
    res.render('ejs/contact'));
});

router.post('/contact', function(req, res) {
   // res.render('ejs/contact'));
   console.log(req.body.message);
});



