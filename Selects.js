var mysql = require('mysql');
var config= require('./config.js');
var connection= mysql.createConnection(config);

let sql= "select * from employeedb.todo";
connection.query(sql, function(err, results){
    if(err){
        console.error(err.message);
    }
    console.log(results);
});
connection.end()