const { Client } = require('pg');

const client = new Client({
  port: 5432,
  user: 'postgres',
  password: 'enter',
  database: 'postgres',
});

client.connect((err) => {
  if (err) {
    console.error('connection error', err.message);
  } else {
    console.log('connected');
  }
});

module.exports = client;
