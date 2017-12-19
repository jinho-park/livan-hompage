const mysql = require('mysql');
const pool = require('db');

exports.resisterlocal = (data) =>{
    var query = "insert into user(nickname, social, email, password) value(?, NULL, ?, ?)";

    pool.getConnection((data, connection) => {
        if(err){
            console.log(err);
            callback(true);
            return;
        }

        connection.query(query, [data.nickname, data.email, data.password], function(err, results){
            //connection.release();
            if(err){
                console.log(err);
                callback(true);
                return;
            }

            console.log(result);
            callback(false, results);
        })
    });
};