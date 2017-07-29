var express = require('express');
var mysql = require('mysql');
var app = express();
var port = 3001;

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "node",

});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "INSERT INTO users (user,pwd) VALUES ? ";
  var values = [
  		["anakshiant","player"],
  		["rama","krishna"],
  		['chahat',"kora"],
  ]
  con.query(sql,[values],function(err,result){
  	if(err){
  		console.log(err);
  	}
  	console.log("table created"+result.insertId);
  });

  con.query("SELECT * FROM users",function(err,res){
  		console.log(res);
  });
});


