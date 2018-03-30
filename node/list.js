var express = require('express');
var app = express()
var mysql = require('mysql')

var pool = mysql.createPool({
	host:'127.0.0.1',
	user:'root',
	password:'yu62417..',
	database:'item',
	port:3306
})
//删除
app.get('/',function(req,res){
	res.setHeader('Access-Control-Allow-Origin',"*");
	pool.getConnection(function(err,connection){
		if(err){
			console.log(err)
			return
		}
		connection.query('delete  from news where id=id',function(err,data){
			if(err){
				console.log(err)
				return
			}
			res.send(data)
			console.log(data)
		})		
	})
	
})



app.listen(4000,function(){
	console.log('ok')
})
