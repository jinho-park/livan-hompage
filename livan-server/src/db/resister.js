const mysql = require('mysql');
const pool = require('db');

exports.resisterlocal = (data) =>{
    var query = "insert into user(Email, nickName, password) value(?, ?, ?)";

    pool.getConnection((connection) => {
        if(err){
            console.log(err);
            callback(true);
            return;
        }

        connection.query(query, [data.email, data.nickname, data.password], function(err, results){
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

exports.dupData = (data) => {
    var query = "";

    pool.getConnection((data, connection) => {
        if(err){
            console.log(err);
            callback(true);
            return;
        }

        //connection.query(query, )
    })
}