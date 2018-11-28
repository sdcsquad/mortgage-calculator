const { Client } = require('pg');

const client = new Client({
  host: '13.57.255.50',
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
