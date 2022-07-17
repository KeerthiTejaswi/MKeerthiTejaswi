// create connection
// require() function is used to include modules
var mysql = require('mysql');
var connection = mysql.createConnection ({
  host: "localhost",
  user: "username",
  password : "password"
});

connection.connect(function(err)
{
  if(err)
  throw err;
  console.log("connected ");
});  // we will be getting output as connected

// create a database
// require() function is used to include modules
var mysql = require('mysql');
var connection = mysql.createConnection({
  host: "localhost",
  user: "username",
  password:"password"
});

connection.connect(function(err) {
  if(err)
  throw err;
  console.log("connect");
  // create database named db
  connection.query("CREATE DATABASE db",function(err,result){
    if(err)
    throw err;
    console.log(" created database");
  });
});
