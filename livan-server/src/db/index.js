var mysql = require('mysql');

const {
    DB_URL : db_url,
    USER : User,
    PASSWORD : Password,
    DATABASE : Database,
} = process.env;

var pool = mysql.createPool({
    host : db_url,
    user : User,
    password : Password,
    database : Database,
    connectionLimit : 10
});

exports.getUser = function(name){
    var sql = "select * from user";

    pool.getConnection(function(name, connection){
        if(err){
            console.log(err);
            callback(true);
            return;
        }

        connection.query(sql, [name], function(err, results){
            connection.realease();
            if(err){
                console.log(err);
                callback(true);
                return;
            }

            console.log(result);
            callback(false, results);
        })
    })
};