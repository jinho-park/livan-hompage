const mysql = require('mysql');
const connection = require('db').connection;

exports.userLogin = (data) => new Promise((resolve, reject)=>{
    const query = "select * from user where email=?";

    connection.query(query, data.email, function(err, row){
        if(err){
            console.log(err);
            reject(err);
        }

        resolve(row);
    });
});