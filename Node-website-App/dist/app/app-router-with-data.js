// require dependencies
var express = require('express');
var xpath    = require('path');
var router  = express.Router();

//export router
module.exports = router;

// route for app index URL path
router.get('/', function(req, res) {
    // __dirname === root dir ??? === views folder (real path)
    res.render('ejs/index');
});

// route for app home
router.get('/home', function(req, res) {
    res.render('ejs/home');
});

// route for app index
router.get('/about', function(req, res) {
    /* Ajax json data */
    var users = [
        { name: 'Holly', email: 'holly@xgqfrms.xyz', avatar: 'http://placekitten.com/300/300'},
        { name: 'Chris', email: 'chris@xgqfrms.xyz', avatar: 'http://placekitten.com/400/400'},
        { name: 'Ado', email: 'Ado@xgqfrms.xyz', avatar: 'http://placekitten.com/500/500'},
        { name: 'Samantha', email: 'Samantha@xgqfrms.xyz', avatar: 'http://placekitten.com/700/700'}
    ];
    res.render('ejs/about', { users: users });
});

// route for app index
router.get('/contact', function(req, res) {
    res.render('ejs/contact');
});

router.post('/contact', function(req, res) {
   // res.render('ejs/contact');
   console.log(req.body.message);
   // server respond action
   res.send('thanks for subscribe this website! ' + req.body.name +' we will respond shortly!');
});


// http://placekitten.com/4096/8192 Error
// http://placekitten.com/5096/4096 OK
// only support 4K images
