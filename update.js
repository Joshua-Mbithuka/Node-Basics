var mysql = require('mysql');
var config= require('./config.js');
var connection= mysql.createConnection(config);

let myquery= `update employeedb.todo set Name="Mutua" where id=?`;
//let myquery= `delete from employeedb.todo  where id=?`;
connection.query(myquery,2,function(err, results){
    if(!err)
        console.log("affected row was changed successfully" + results);
    else
        console.error(err.message);
});
