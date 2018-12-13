const mysql = require('mysql');
const pool = require('db').pool;

exports.testquery = (data) => {
    var query = "select * from user where nickName=?";

    pool.getConnection((err, connection) => {
        if(err){
            console.log(err);
            return;
        }

        connection.query(query, [data.nickName], function(err){
            if(err){
                console.log(err);
                return;
            }

            console.log(result);
            return result;
        })
    })
}