const mysql = require("mysql");

var connection= mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'1234',
    database:'employeedb',
    insecureAuth:true
})


connection.connect(function(err){
    if(!err)
        console.log('connected to mysql server');
    else
        console.log("connection failed\error:" + JSON.stringify(err))
})
let todos =`create table Todo(
    id int(30) auto_increment primary key,
    Name varchar(20) NOT NULL,
    tId int(30) 
)`;
connection.query(todos ,function(err,msg,res){
    if(err)
        console.log(err.message);
});
connection.end(function(err){
    if(err)
    console.log('errpr\n:' + err.message)
});