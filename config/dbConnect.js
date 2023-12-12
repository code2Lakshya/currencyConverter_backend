const mysql = require('mysql');

require('dotenv').config();

const { HOST, DB_NAME, DB_USERNAME, DB_PASSWORD } = process.env;

const conenction = mysql.createConnection({
    host: HOST,
    user: DB_USERNAME,
    password: DB_PASSWORD,
    database: DB_NAME
})
conenction.connect((err) => {
    if (err) {
        console.log('DB Connect Failure', err.message);
        return;
    }
    console.log('DB Connection Success');
})
module.exports = conenction;