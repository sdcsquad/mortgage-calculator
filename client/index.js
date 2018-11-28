const path  = require('path')
import express from 'express';

const Template = require('./src/templates/html');
const App = require('./src/templates/app')
const Scripts = require('./src/templates/scripts')

const Component = require('./src/server.jsx')
const serverRender = require('./serverRender');


const server = express();

server.use('/homes', express.static(path.join(__dirname, '/../public/dist')));


server.get('/', (req, res) => {
  res.send('hello world');
});
server.listen(8080)



// var nr = require('newrelic');
// require('dotenv').config();

// const express = require('express');
// const bodyParser = require('body-parser');

// const port = 3000;
// const db = require('./../database/dbMethods.js');

// const app = express();

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use('/homes/:id', express.static('public/dist'));

// app.listen(port, () => {
//   console.log(`listening at ${port}`);
// });

// app.get('/api/mortgageCalculator/:id', (req, res) => {
//   let { id } = req.params;
//   db.retrieve(id, (err, data) => {
//     if (err) {
//       res.end(err);
//     } else {
//       res.writeHead(200, { 'Content-Type': 'application/json' });
//       res.end(JSON.stringify(data));
//     }
//   });
// });

// app.post('/api/mortgageCalculator/:id', (req, res) => {
//   const { id } = req.params;
//   db.add(id, (err, data) => {
//     if (err) {
//       res.end(err);
//     } else {
//       res.writeHead(200, { 'Content-Type': 'application/json' });
//       res.end(JSON.stringify(data));
//     }
//   });
// });

// app.put('/api/mortgageCalculator/:id', (req, res) => {
//   const { id } = req.params;
//   db.update(id, (err, data) => {
//     if (err) {
//       res.end(err);
//     } else {
//       res.writeHead(200, { 'Content-Type': 'application/json' });
//       res.end(JSON.stringify(data));
//     }
//   });
// });

// app.delete('/api/mortgageCalculator/:id', (req, res) => {
//   const { id } = req.params;
//   db.deleteItem(id, (err, data) => {
//     if (err) {
//       res.end(err);
//     } else {
//       res.writeHead(200, { 'Content-Type': 'application/json' });
//       res.end(JSON.stringify(data));
//     }
//   });
// });