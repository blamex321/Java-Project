const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: process.env.PASSWORD,
    port:3306,
    database: 'testing'
});

connection.connect(function(err){
    if(err){
        console.log(err);
    } else {
        console.log('Connection Successful');
    }
});

module.exports = connection;