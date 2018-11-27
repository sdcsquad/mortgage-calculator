const { Client } = require('pg');

const client = new Client({
  host: '18.144.4.70',
  user: 'other_user',
  password: '$password',
  database: 'datahaus',
});

client.connect((err) => {
  if (err) {
    console.error('connection error', err.message);
  } else {
    console.log('connected');
  }
});

module.exports = client;
