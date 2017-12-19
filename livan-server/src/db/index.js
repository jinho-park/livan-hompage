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

exports.pool = pool;