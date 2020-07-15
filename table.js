var mysql = require('mysql');
var config= require('./config.js');
var connection= mysql.createConnection(config);

var sql= `insert into todo (Name, tId)
 Values ('joshua',4),
 ("bram","8")`;
 
connection.query(sql, function(err,results){
    if(!err){
        console.log('number of rows  inserted are:' + results.affectedRows);
    }
    else
        console.log("operation was not successful:" + err.message);
});
connection.end();