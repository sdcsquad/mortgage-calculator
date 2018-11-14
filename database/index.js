const mysql = require('mysql');

const connection = mysql.createPool({
  user: process.env.DB_USER,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
});

connection.getConnection((err) => {
  if (err) {
    throw err;
  }
  console.log('Connected to mysql');
});

module.exports = connection;
