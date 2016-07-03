//movie website
var express = require('express')
var port = process.env.PORT || 3000
var app = express()

app.set('views','./view')
app.set('view engine','jade')
app.listen(port)

console.log('movies website started on port:'+port)

//index page
app.get('/',function(req,res){
	res.render('index',{
		title:'movies home page'
	})
})

//detail page
app.get('/',function(req,res){
	res.render('detail',{
		title:'movies detail page'
	})
})

//admin page
app.get('/',function(req,res){
	res.render('admin',{
		title:'movies admin page'
	})
})

//list page
app.get('/',function(req,res){
	res.render('list',{
		title:'movies list page'
	})
})





