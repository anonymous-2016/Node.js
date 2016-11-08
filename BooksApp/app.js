// 入口文件
let express = require('express');

let port = process.env.PORT || 3000;

let app = express();

app.set('views', './views');
app.set('view engine', 'jade');
// app.set('port', 3000);
app.listen(port);

console.log("start ... OK!" + `\nport = ${port}`);

app.get('/', (req, res) => {
    res.render('index',{title:'books'});
});

// node app.js

// set PORT=8888
// node app.js

// PORT=8888 node app.js (Error)