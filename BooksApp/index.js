// 入口文件
let express = require('express');

let app = express();

app.set('view engine', 'jade');
app.set('port', 3000);

app.get('/', (req, res) => {
    res.render('index',{title:'books'});
});