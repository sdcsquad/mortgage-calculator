const mysql = require('mysql');

const connection = mysql.createPool({
  user: 'root',
  database: 'zillower',
  password: '',
});

connection.getConnection((err) => {
  if (err) {
    throw err;
  }
  console.log('Connected to mysql');
});

module.exports = connection;
