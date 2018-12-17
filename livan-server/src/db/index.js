var mysql = require('mysql');

const {
    DB_URL : db_url,
    USER : User,
    PASSWORD : Password,
    DATABASE : Database,
} = process.env;

const connection = mysql.createConnection({
    host : db_url,
    user : User,
    password : Password,
    database : Database
});

exports.connection = connection;